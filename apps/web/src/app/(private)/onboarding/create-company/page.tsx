import { Metadata } from 'next'

import { CreateCompany } from '@/modules/onboarding/components/create-company'
import { Logo } from '@agendall/ui/logo'

export const metadata: Metadata = {
  title: 'Onboarding - Criar empresa',
}

export default async function Page() {
  return (
    <div className="bg-muted min-h-svh flex flex-col gap-4 p-6">
      <div className="flex justify-center gap-2 md:justify-start">
        <Logo />
      </div>

      <div className="flex flex-1 items-center justify-center">
        <CreateCompany />
      </div>
    </div>
  )
}
