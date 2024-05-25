import React from 'react'
import {useReactTable, getCoreRowModel, flexRender, getFilteredRowModel} from '@tanstack/react-table'
import { useMemo } from 'react'
import  VenueSchedule from '../data/VSchedule.json'
import "./VenueTable.css"
import { directoryImport } from 'directory-import';

function VenueTable() {


    const data = useMemo(() => VenueSchedule, [])

    let vColumns = [];
    let venue = {};
    venue.header = "Venue";
    venue.accessorKey = "Venue";
    vColumns.push(venue);
    for (var i = 8; i < 24; i++) {
        let tableProp = {};
        let tablePropHalves = {};
        let min = "00";
        let zero = "0";
        if(i > 9)
            zero = "";
        tableProp.header = zero + i + ":" + min;
        tableProp.accessorKey = zero + i + ":" + min;
        vColumns.push(tableProp)
        min = "30";
        tablePropHalves.header = zero + i + ":" + min;
        tablePropHalves.accessorKey = zero + i + ":" + min;
        vColumns.push(tablePropHalves)
    }
    let venue_link = {};
    let columnNames = [venue_link];
    
    venue_link.header = "VenueLink";
    venue_link.accessorKey = "VenueLink";
    for (var i = 0; i < columnNames.length; i++) {
        vColumns.push(columnNames[i]);
    }
    const columns = vColumns;


    const columnsSS = [
        {
            header: 'venue',
            accessorKey: 'Venue'
        },
        {
            header: '08:00',
            accessorKey: '08:00'
        },
        {
            header: '08:30',
            accessorKey: '08:30'
        },
        {
            header: '09:00',
            accessorKey: '09:00'
        },
        {
            header: '09:30',
            accessorKey: '09:30'
        },
        {
            header: '10:00',
            accessorKey: '10:00'
        },
        {
            header: '10:30',
            accessorKey: '10:30'
        },
        {
            header: '11:00',
            accessorKey: '11:00'
        },
        {
            header: '11:30',
            accessorKey: '11:30'
        },
        {
            header: '12:00',
            accessorKey: '12:00'
        },
        {
            header: '12:30',
            accessorKey: '12:30'
        },
        {
            header: '13:00',
            accessorKey: '13:00'
        },
        {
            header: '13:30',
            accessorKey: '13:30'
        },
        {
            header: '14:00',
            accessorKey: '14:00'
        },
        {
            header: '14:30',
            accessorKey: '14:30'
        },
        {
            header: '15:00',
            accessorKey: '15:00'
        },
        {
            header: '15:30',
            accessorKey: '15:30'
        },
        {
            header: '16:00',
            accessorKey: '16:00'
        },
        {
            header: '16:30',
            accessorKey: '16:30'
        },

        {
            header: '17:00',
            accessorKey: '17:00'
        },
        {
            header: '17:30',
            accessorKey: '17:30'
        },
        {
            header: '18:00',
            accessorKey: '18:00'
        },
        {
            header: '18:30',
            accessorKey: '18:30'
        },
        {
            header: '19:00',
            accessorKey: '19:00'
        },
        {
            header: '19:30',
            accessorKey: '19:30'
        },
        {
            header: '20:00',
            accessorKey: '20:00'
        },
        {
            header: '20:30',
            accessorKey: '20:30'
        },
        {
            header: '21:00',
            accessorKey: '21:00'
        },
        {
            header: '21:30',
            accessorKey: '21:30'
        },
        {
            header: '22:00',
            accessorKey: '22:00'
        },
        {
            header: '22:30',
            accessorKey: '22:30'
        },
        {
            header: '23:00',
            accessorKey: '23:00'
        },
        {
            header: '23:30',
            accessorKey: '23:30'
        },
        {
            header: 'Venue_Link',
            accessorKey: 'VenueLink'
        }
    ]

    const [filtering, setFiltering] = React.useState("");
    const table = useReactTable({
        data, 
        columns, 
        getCoreRowModel: getCoreRowModel(), 
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            globalFilter: filtering
        }, 
        onGlobalFilterChanged: setFiltering
    })
    /** @type import('@tanstack/react-table').ColumnDef<any> */
    return (
        <>
        <div class="search-box">
            <label>Search:  </label>
            <input type="text" value={filtering} onChange={(e) => setFiltering(e.target.value)}  />
        </div>
        
        <div>
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (<th id={(header.id === "Venue")? "first-column": "after-first-column"} class={header.id} key={header.id}>
                                {flexRender(header.column.columnDef.header, header.getContext())}
                            </th>))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(function(cell ) {
                                if(cell.id.substring(cell.id.indexOf("_")+1, cell.id.length) == "VenueLink") {
                                    let link = flexRender(cell.column.columnDef.cell, cell.getContext());
                                    return (<td class={cell.id.substring(cell.id.indexOf("_")+1, cell.id.length)} key={cell.id}> 
                                    <a href={link.props.renderValue()}>{link}</a> 
                                    </td>)
                                }
                                else {
                                    return(
                                    <td class={cell.id.substring(cell.id.indexOf("_")+1, cell.id.length)} key={cell.id}> 
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}  
                                    </td>
                                    )
                                    
                                }
                                })
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
        
    )
}

export default VenueTable
