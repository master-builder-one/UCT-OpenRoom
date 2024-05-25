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
