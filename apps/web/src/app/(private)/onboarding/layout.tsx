import { CenteredTemplate } from '@/modules/shared/templates/centered'

export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <CenteredTemplate>{children}</CenteredTemplate>
}
