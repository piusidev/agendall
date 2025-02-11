'use client'

import { type Row, flexRender } from '@tanstack/react-table'

import { TableCell, TableRow } from '@agendall/ui/table'
import { cn } from '@agendall/ui/utils'

import type { Professional } from './columns'

type Props = {
  row: Row<Professional>
  setOpen: (id?: string) => void
}

export function ProfessionalRow({ row, setOpen }: Props) {
  return (
    <TableRow key={row.id}>
      {row.getVisibleCells().map((cell, index) => (
        <TableCell
          key={cell.id}
          onClick={() => ![3, 4, 5, 6].includes(index) && setOpen(row.id)}
          className={cn(index !== 0 && 'hidden md:table-cell')}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  )
}
