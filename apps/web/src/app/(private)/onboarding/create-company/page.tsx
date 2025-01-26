import { Metadata } from 'next'

import { CreateCompanyForm } from '@/modules/onboarding/components/create-company-form'

export const metadata: Metadata = {
  title: 'Onboarding - Criar empresa',
}

export default async function Page() {
  return (
    <div className="bg-muted min-h-svh flex flex-col items-center justify-center p-2">
      <CreateCompanyForm />
    </div>
  )
}
