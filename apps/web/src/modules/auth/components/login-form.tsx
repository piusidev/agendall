'use client'

import Link from 'next/link'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@repo/ui/button'
import { Input } from '@repo/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@repo/ui/form'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/card'

import { routes } from '@/modules/shared/config/routes'

import { loginFormSchema, LoginFormSchema } from '../schemas/login'
import { useAction } from 'next-safe-action/hooks'
import { loginAction } from '../actions/login'

export function LoginForm() {
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { execute, isExecuting } = useAction(loginAction)

  return (
    <div className="w-full max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle>Entrar no Untitled</CardTitle>
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>

                        <FormControl>
                          <Input
                            id="email"
                            type="email"
                            placeholder="email@exemplo.com"
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
                        <div className="flex items-center">
                          <FormLabel>Senha</FormLabel>
                          <a
                            href="#"
                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                          >
                            Esqueceu a senha?
                          </a>
                        </div>

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
                </div>

                <Button type="submit" className="w-full" disabled={isExecuting}>
                  Entrar
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="text-sm mt-4 text-center text-muted-foreground">
        Ainda não tem uma conta?{' '}
        <Link
          href={routes.auth.signup}
          className="underline underline-offset-4"
        >
          Criar
        </Link>
      </div>
    </div>
  )
}
