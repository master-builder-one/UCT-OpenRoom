import requests
from bs4 import BeautifulSoup
import time
import json
import pandas as pd
import os


url = "https://ictsapps.uct.ac.za/classroom/"

response = requests.get(url)
soup = BeautifulSoup(response.text, "html5lib")

venues = []


for venue in soup.find_all("span", attrs={"class":"menuhead"}):
    outer_tag = venue.parent
    link = outer_tag["href"]
    link = url + link
    venues.append({"venue": venue.text, "venue_link": link})

array = []
i = 0
file_content = ""
for a_venue in venues:
    str_table = ""
    response = requests.get(a_venue["venue_link"])
    soup = BeautifulSoup(response.text, "html5lib")
    table = soup.find("table", attrs = {"id":"tblSchedule"})

    if(i == 0):
        file_content = soup.find("h4").text
    

    if table.text != "":
        tables_pd = pd.read_html(response.content, index_col=False)
        tables_pd = tables_pd[0] 

        
        time_object = {}
        for i in range(0, 32):
            time = tables_pd[i].at[0]
            time = time.split()
            time_object[time[0]] = ""
            if len(time) > 1:
                time_object[time[0]] = time[1]


        time_object["Venue"] = a_venue["venue"]
        time_object["VenueLink"] = a_venue["venue_link"]
        array.append(time_object)
        i += 1
    table = None


# Decode Table
ps = "//PS_"
rb = "RB"
test = "TEST"

for row in array:
    for column in row:
        if row[column] == "":
            row[column] = "Open Room"
        elif ps in row[column]:
            row[column] = row[column][5:13]
        elif rb in row[column]:
            row[column] = "RB"
        elif test in row[column]:
            row[column] = row[column][:14]
        elif "/" in row[column] and "https://" not in row[column]:
            cell = row[column]
            row[column] = row[column][:cell.index("/")]



base_path = "./src/data"
json_file = "VSchedule.json"
file_path = os.path.join(base_path, json_file)

with open(file_path, "w") as final:
    json.dump(array, final)

file_path = os.path.join(base_path, "heading.txt")
with open(file_path, "w") as file:
    file.write(file_content)