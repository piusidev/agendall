import { Metadata } from 'next'

import { SingUpForm } from '@/modules/auth/components/signup-form'

export const metadata: Metadata = {
  title: 'Cadastro',
}

export default function Page() {
  return <SingUpForm />
}
