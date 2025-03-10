import { CenteredTemplate } from '@/modules/shared/templates/centered'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <CenteredTemplate>{children}</CenteredTemplate>
}
