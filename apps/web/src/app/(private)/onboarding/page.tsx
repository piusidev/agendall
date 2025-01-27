import { Metadata } from 'next'

import { OnboardingForm } from '@/modules/onboarding/components/onboarding-form'

export const metadata: Metadata = {
  title: 'Onboarding',
}

export default async function Page() {
  return <OnboardingForm />
}
