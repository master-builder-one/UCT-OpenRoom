import requests
from bs4 import BeautifulSoup
import json
import pandas as pd
from concurrent.futures import ThreadPoolExecutor
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

df = pd.DataFrame()

def parse_page(a_venue):
    try: 
        response = requests.get(a_venue["venue_link"])
        soup = BeautifulSoup(response.text, "html5lib")
        table = soup.find("table", attrs = {"id":"tblSchedule"})

        
       

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
            return time_object
        table = None
    except Exception as e:
        print('Request failed due to error:', e)


MAX_THREADS = min(os.cpu_count(), len(venues))
df_array = []
with ThreadPoolExecutor(max_workers=MAX_THREADS) as executor:
    df_array = list(executor.map(parse_page, venues))




base_path = "./src/data"
json_file = "VSchedule.json"
file_path = os.path.join(base_path, json_file)

with open(file_path, "w") as final:
    json.dump(df_array, final)

file_path = os.path.join(base_path, "heading.txt")
with open(file_path, "w") as file:
    file.write("date-DD-MM-YYYY")