import React from 'react';
import DataTable from 'react-data-table-component';
import VSchedule from '../data/VSchedule.json'

function VenueSchedule() {
    const columns = [
            {
                name: '08:00',
                selector: row => row["08:00"]
            },
            {
                name: '08:30',
                selector: row => row["08:30"]
            },
            {
                name: '09:00',
                selector: row => row["08:30"]
            },
            {
                name: '09:30',
                selector: row => row["08:30"]
            },
            {
                name: '10:00',
                selector: row => row["08:30"]
            },
            {
                name: '10:30',
                selector: row => row["08:30"]
            },
            {
                name: '11:00',
                selector: row => row["08:30"]
            },
            {
                name: '11:30',
                selector: row => row["08:30"]
            },
            {
                name: '12:00',
                selector: row => row["08:30"]
            },
            {
                name: '12:30',
                selector: row => row["08:30"]
            },
            {
                name: '13:00',
                selector: row => row["08:30"]
            },
            {
                name: '13:30',
                selector: row => row["08:30"]
            },
            {
                name: '14:00',
                selector: row => row["08:30"]
            },
            {
                name: '14:30',
                selector: row => row["08:30"]
            },
            {
                name: '15:00',
                selector: row => row["08:30"]
            },
            {
                name: '15:30',
                selector: row => row["08:30"]
            },
            {
                name: '16:00',
                selector: row => row["08:30"]
            },
            {
                name: '16:30',
                selector: row => row["08:30"]
            },
    
            {
                name: '17:00',
                selector: row => row["08:30"]
            },
            {
                name: '17:30',
                selector: row => row["08:30"]
            },
            {
                name: '18:00',
                selector: row => row["08:30"]
            },
            {
                name: '18:30',
                selector: row => row["08:30"]
            },
            {
                name: '19:00',
                selector: row => row["08:30"]
            },
            {
                name: '19:30',
                selector: row => row["08:30"]
            },
            {
                name: '20:00',
                selector: row => row["08:30"]
            },
            {
                name: '20:30',
                selector: row => row["08:30"]
            },
            {
                name: '21:00',
                selector: row => row["08:30"]
            },
            {
                name: '21:30',
                selector: row => row["08:30"]
            },
            {
                name: '22:00',
                selector: row => row["08:30"]
            },
            {
                name: '22:30',
                selector: row => row["08:30"]
            },
            {
                name: '23:00',
                selector: row => row["08:30"]
            },
            {
                name: '23:30',
                selector: row => row["08:30"]
            },
            {
                name: 'Venue',
                selector: row => row["Venue"]
            },
            {
                name: 'VenueLink',
                selector: row => row["VenueLink"]
            }
    ]
    const data = VSchedule;
    //alert(JSON.stringify(data))
    return (
        <div className='container mt-5'>
            <DataTable>
                columns={columns}
                data={data}
            </DataTable>
        </div>   
    )
}

export default VenueSchedule