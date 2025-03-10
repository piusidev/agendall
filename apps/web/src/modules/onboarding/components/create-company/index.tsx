'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@agendall/ui/card'

import { useCreateCompanyStore } from '@/modules/onboarding/store/create-company'

import { CompanyInfoForm } from './company-info-form'
import { CompanyAdressForm } from './company-address-form'
import { CreateCompanyForm } from './create-company-form'

function renderStep(step: number) {
  switch (step) {
    case 1:
      return <CompanyInfoForm />
    case 2:
      return <CompanyAdressForm />
    case 3:
      return <CreateCompanyForm />
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
        title: 'Onde fica seu negócio?',
        description:
          'Esta informação ajudará a posicionar você nas ferramentas de busca',
      }
    case 3:
      return {
        title: 'Criar empresa',
        description: 'Cheque as informações e criaremos sua empresa',
      }
    default:
      return {
        title: 'Vamos configurar sua empresa',
        description: 'Conte-nos mais sobre seu negócio',
      }
  }
}

export function CreateCompany() {
  const { step } = useCreateCompanyStore()

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
