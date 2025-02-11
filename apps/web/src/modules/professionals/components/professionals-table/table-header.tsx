'use client'

import { Button } from '@agendall/ui/button'
import {
  TableHeader as BaseTableHeader,
  TableHead,
  TableRow,
} from '@agendall/ui/table'

export function TableHeader() {
  return (
    <BaseTableHeader>
      <TableRow>
        <TableHead>
          <Button
            className="p-0 hover:bg-transparent space-x-2"
            variant="ghost"
          >
            <span>Nome</span>
          </Button>
        </TableHead>
        <TableHead className="hidden md:table-cell">
          <Button
            className="p-0 hover:bg-transparent space-x-2"
            variant="ghost"
          >
            <span>E-mail</span>
          </Button>
        </TableHead>
        <TableHead className="hidden md:table-cell">
          <Button
            className="p-0 hover:bg-transparent space-x-2"
            variant="ghost"
          >
            <span>Telefone</span>
          </Button>
        </TableHead>
      </TableRow>
    </BaseTableHeader>
  )
}
