import { Metadata } from 'next'

import { OnboardingForm } from '@/modules/onboarding/components/onboarding-form'

export const metadata: Metadata = {
  title: 'Onboarding - Entrar em uma empresa',
}

export default async function Page() {
  return <OnboardingForm />
}
