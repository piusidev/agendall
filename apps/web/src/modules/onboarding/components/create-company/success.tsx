'use client'

import { Button } from '@agendall/ui/button'
import { CheckCircle } from 'lucide-react'

export function Success() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-center">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
      </div>

      <div className="w-full flex justify-end">
        <Button>Começar</Button>
      </div>
    </div>
  )
}
