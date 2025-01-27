'use client'

import { Button } from '@agendall/ui/button'

import { useOnboardingStore } from '@/modules/onboarding/stores/onboarding'
import { CircleCheck } from 'lucide-react'

export function FreeTrial() {
  const { updateStep } = useOnboardingStore()

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center">
          <CircleCheck size={20} className="text-green-500" />
          <p>Sistema de agendamento completo</p>
        </div>

        <div className="flex gap-2 items-center">
          <CircleCheck size={20} className="text-green-500" />
          <p>Envio de lembretes por WhatsApp</p>
        </div>

        <div className="flex gap-2 items-center">
          <CircleCheck size={20} className="text-green-500" />
          <p>Gestão financeira</p>
        </div>

        <div className="flex gap-2 items-center">
          <CircleCheck size={20} className="text-green-500" />
          <p>E muito mais!</p>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="secondary" onClick={() => updateStep(1)}>
          Voltar
        </Button>

        <Button onClick={() => updateStep(3)}>Próximo</Button>
      </div>
    </div>
  )
}
