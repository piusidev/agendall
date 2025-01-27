import { Logo } from '@agendall/ui/logo'

export function CenteredTemplate({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="bg-muted min-h-svh flex flex-col gap-4 p-6">
      <div className="flex justify-center gap-2 md:justify-start">
        <Logo />
      </div>

      <div className="flex flex-1 items-center justify-center">{children}</div>
    </div>
  )
}
