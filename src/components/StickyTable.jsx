import React from 'react'
import {useReactTable, getCoreRowModel, flexRender} from '@tanstack/react-table'
import { useMemo } from 'react'
import { Styles } from './TableStyles'
import { useTable, useBlockLayout, useSticky } from 'react-table'
import "./VenueTable.css"
import { COLUMNS } from './Columns'
import VSchedule from '../data/VSchedule.json'
//import * as File from "../data";

function StickyTable() {

    console.log(__dirname);
    console.log("hehy");
    const columns = useMemo( () => COLUMNS, [] )
    const data = useMemo( () => VSchedule, [] )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable(
        {
          columns,
          data,
        },
        useBlockLayout,
        useSticky,
      );
    /** @type import('@tanstack/react-table').ColumnDef<any> */
    return (
        <Styles>
          <div {...getTableProps()} className="table sticky" style={{ width: 1000, height: 500 }}>
            <div className="header">
              {headerGroups.map((headerGroup) => (
                <div {...headerGroup.getHeaderGroupProps()} className="tr">
                  {headerGroup.headers.map((column) => (
                    <div {...column.getHeaderProps()} className="th">
                      {column.render('Header')}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div {...getTableBodyProps()} className="body">
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <div {...row.getRowProps()} className="tr">
                    {row.cells.map((cell) => (
                      <div {...cell.getCellProps()} className="td">
                        {cell.render('Cell')}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </Styles>
      );
}

export default StickyTable
