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
import clsx from 'clsx'
import { Success } from './success'

function getStepStyles(position: number, step: number) {
  return clsx(
    `transition-all size-2 rounded-full ${step >= position ? 'bg-primary' : 'bg-primary/40'}`,
    {
      'size-3': step === position,
    },
  )
}

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
        title: 'Vamos configurar sua empresa',
        description: 'Conte-nos mais sobre seu negócio',
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

  return (
    <div className="w-full max-w-2xl">
      <Card>
        <CardHeader>
          <div className="flex justify-center items-center gap-2 min-h-4 mb-4">
            <div className={getStepStyles(1, step)}></div>
            <div className={getStepStyles(2, step)}></div>
            <div className={getStepStyles(3, step)}></div>
          </div>

          <CardTitle>{header.title}</CardTitle>
          <CardDescription>{header.description}</CardDescription>
        </CardHeader>

        <CardContent>{renderStep(step)}</CardContent>
      </Card>
    </div>
  )
}
