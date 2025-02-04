'use client'

import { useState } from 'react'
import Link from 'next/link'

import { useAction } from 'next-safe-action/hooks'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@agendall/ui/button'
import { Input } from '@agendall/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@agendall/ui/form'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@agendall/ui/card'

import { routes } from '@/modules/shared/config/routes'
import { toast } from '@agendall/ui/toast'

import { signUpAction } from '../actions/signup'
import { signUpSchema, type SignUpSchema } from '../schemas/signup'

export function SingUpForm() {
  const [emailSent, setEmailSent] = useState(false)

  const { execute, isExecuting } = useAction(signUpAction, {
    onSuccess: () => setEmailSent(true),
    onError: () => {
      toast.error(
        'Erro ao criar a sua conta, tente novamente em alguns minutos',
      )
    },
  })

  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
  })

  if (emailSent) {
    return (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Verifique seu email</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground">
            Enviamos um email de confirmação para você, verifique sua caixa de
            entrada.
          </p>
        </CardContent>

        <CardFooter>
          <Button className="w-full" asChild>
            <Link href={routes.auth.login}>Voltar ao login</Link>
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <div className="w-full max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle>Criar conta no Agendall</CardTitle>
          <CardDescription>Preencha seus dados abaixo</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(execute)}
              className="flex flex-col gap-6"
            >
              <div className="grid gap-6">
                <div className="flex flex-col gap-3">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Turing"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            id="email"
                            type="email"
                            placeholder="alan.turing@gmail.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Senha</FormLabel>
                        <FormControl>
                          <Input
                            id="password"
                            type="password"
                            placeholder="********"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password_confirmation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirmação de senha</FormLabel>
                        <FormControl>
                          <Input
                            id="password_confirmation"
                            type="password"
                            placeholder="********"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="w-full" loading={isExecuting}>
                  Criar conta
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="text-sm mt-4 text-center text-muted-foreground">
        Já tem uma conta?{' '}
        <Link href={routes.auth.login} className="underline underline-offset-4">
          Entrar
        </Link>
      </div>
    </div>
  )
}
