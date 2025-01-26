import Link from 'next/link'
import { LogIn, CirclePlus } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/card'
import { routes } from '@/modules/shared/config/routes'

export function OnboardingForm() {
  return (
    <div className="w-full max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Vamos configurar a sua conta...</CardTitle>
        </CardHeader>

        <CardContent className="flex gap-4 justify-between">
          <Link
            href={routes.onboarding.joinCompany}
            className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border bg-muted flex flex-col gap-4 justify-center items-center w-full rounded-xl px-4 py-6 text-muted-foreground transition-all hover:shadow hover:bg-muted/80"
          >
            <LogIn className="size-10" />

            <h3>Entrar em uma empresa</h3>
          </Link>

          <Link
            href={routes.onboarding.createCompany}
            className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border bg-muted flex flex-col gap-4 justify-center items-center w-full rounded-xl px-4 py-6 text-muted-foreground transition-shadow hover:shadow hover:bg-muted/80"
          >
            <CirclePlus className="size-10" />

            <h3>Criar uma empresa</h3>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
