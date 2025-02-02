'use client'

import { Button } from '@agendall/ui/button'
import { useAction } from 'next-safe-action/hooks'
import { createCompanyAction } from '../../actions/create-company'
import { useCreateCompanyStore } from '../../store/create-company'
import { toast } from '@agendall/ui/toast'

export function CreateCompanyForm() {
  const { company } = useCreateCompanyStore()
  const { execute, isExecuting } = useAction(createCompanyAction, {
    onError: ({ error }) => {
      if (error.serverError) {
        toast.error(error.serverError)
      }
    },
  })

  return (
    <div className="grid gap-6">
      <p>colocar algo legal aqui</p>

      <Button size="lg" onClick={() => execute(company)} loading={isExecuting}>
        Criar empresa
      </Button>
    </div>
  )
}
