import { Metadata } from 'next'

import { CreateCompany } from '@/modules/onboarding/components/create-company'

export const metadata: Metadata = {
  title: 'Onboarding - Criar empresa',
}

export default function Page() {
  return <CreateCompany />
}
