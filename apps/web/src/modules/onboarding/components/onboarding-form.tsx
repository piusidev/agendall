import Link from 'next/link'
import { LogIn, CirclePlus } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@agendall/ui/card'
import { Button } from '@agendall/ui/button'
import { Separator } from '@agendall/ui/separator'

import { routes } from '@/modules/shared/config/routes'

export function OnboardingForm() {
  return (
    <div className="w-full max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle>Seja bem-vindo ao Agendall!</CardTitle>
          <CardDescription>
            Primeiro, escolha como configurar sua conta
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          <Button size="lg" asChild>
            <Link href={routes.onboarding.joinCompany}>
              <LogIn />

              <h3>Entrar em uma empresa</h3>
            </Link>
          </Button>

          <div className="w-full flex items-center justify-center gap-2 overflow-hidden">
            <Separator />
            <p className="text-muted-foreground text-sm">ou</p>
            <Separator />
          </div>

          <Button size="lg" asChild>
            <Link href={routes.onboarding.createCompany}>
              <CirclePlus />

              <h3>Criar uma empresa</h3>
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
