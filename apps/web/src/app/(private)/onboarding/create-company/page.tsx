import { Metadata } from 'next'

import { CreateCompany } from '@/modules/onboarding/components/create-company'

export const metadata: Metadata = {
  title: 'Onboarding - Criar empresa',
}

export default async function Page() {
  return <CreateCompany />
}
