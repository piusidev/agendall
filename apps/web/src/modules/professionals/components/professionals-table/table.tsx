'use client'

import { Table, TableBody } from '@agendall/ui/table'
import {
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from '@tanstack/react-table'
import React, { useEffect, useState } from 'react'
import { type Professional, columns } from './columns'
import { ProfessionalRow } from './row'
import { TableHeader } from './table-header'

type Props = {
  data: Professional[]
  pageSize: number
  hasNextPage: boolean
}

export function DataTable({
  data: initialData,
  pageSize,
  hasNextPage: initialHasNextPage,
}: Props) {
  const [data, setData] = useState(initialData)
  const [from, setFrom] = useState(pageSize)
  const [hasNextPage, setHasNextPage] = useState(initialHasNextPage)

  const table = useReactTable({
    data,
    getRowId: ({ id }) => id,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  useEffect(() => {
    setData(initialData)
  }, [initialData])

  return (
    <div className="border rounded-xl">
      <Table>
        <TableHeader />

        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <ProfessionalRow key={row.id} row={row} setOpen={() => {}} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
