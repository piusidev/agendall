'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@agendall/ui/card'

import { useOnboardingStore } from '@/modules/onboarding/stores/onboarding'

import { CompanyForm } from './company-form'
import { FreeTrial } from './free-trial'
import { Success } from './success'

function renderStep(step: number) {
  switch (step) {
    case 1:
      return <CompanyForm />
    case 2:
      return <FreeTrial />
    case 3:
      return <Success />
    default:
      return null
  }
}

function getStepHeader(step: number) {
  switch (step) {
    case 1:
      return {
        title: 'Configure sua empresa',
        description: 'Nos conte mais sobre o seu negócio para começarmos',
      }
    case 2:
      return {
        title: 'Você tem 7 dias grátis para testar o Agendall!',
        description:
          'Se você gostar, pode assinar e continuar usando o Agendall sem interrupções',
      }
    case 3:
      return {
        title: 'Tudo pronto!',
        description: 'Sua empresa foi criada e configurada com sucesso',
      }
    default:
      return {
        title: 'Vamos configurar sua empresa',
        description: 'Conte-nos mais sobre seu negócio',
      }
  }
}

export function CreateCompany() {
  const { step } = useOnboardingStore()

  const header = getStepHeader(step)

  const progress = step * 33.33 - 100

  return (
    <div className="w-full max-w-2xl">
      <Card>
        <CardHeader className="flex gap-2 flex-row justify-between items-start">
          <div className="flex flex-col space-y-1.5">
            <CardTitle>{header.title}</CardTitle>
            <CardDescription>{header.description}</CardDescription>
          </div>

          <div className="relative min-w-8 size-8">
            <svg
              className="size-full -rotate-90"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-muted"
                strokeWidth="4"
              ></circle>
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-primary transition-[stroke-dashoffset] duration-500 ease-out"
                strokeWidth="4"
                strokeDasharray="100"
                strokeDashoffset={progress}
                strokeLinecap="round"
              ></circle>
            </svg>
          </div>
        </CardHeader>

        <CardContent>{renderStep(step)}</CardContent>
      </Card>
    </div>
  )
}
