import { Metadata } from 'next'

import { LoginForm } from '@/modules/auth/components/login-form'

export const metadata: Metadata = {
  title: 'Login',
}

export default function Page() {
  return <LoginForm />
}
