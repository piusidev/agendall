import { ColumnDef } from '@tanstack/react-table'

export interface Professional {
  id: string
  name: string
  email: string
  phone: string
}

export const columns: ColumnDef<Professional>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'phone',
    header: 'Telefone',
  },
]
