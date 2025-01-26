import { Metadata } from 'next'

import { OnboardingForm } from '@/modules/onboarding/components/onboarding-form'

export const metadata: Metadata = {
  title: 'Onboarding - Entrar em uma empresa',
}

export default async function Page() {
  return (
    <div className="bg-muted min-h-svh flex flex-col items-center justify-center p-2">
      <OnboardingForm />
    </div>
  )
}
