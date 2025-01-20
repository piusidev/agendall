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

import { routes } from '@/modules/shared/config/routes'

import { loginFormSchema, LoginFormSchema } from './schema'

export function LoginForm() {
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(data: LoginFormSchema) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Entrar na sua conta</h1>
          <p className="text-sm text-muted-foreground">
            Insira suas credenciais para acessar o sistema
          </p>
        </div>

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

          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </div>

        <div className="text-sm">
          Ainda não tem uma conta?{' '}
          <Link
            href={routes.auth.signup}
            className="underline underline-offset-4"
          >
            Solicitar acesso
          </Link>
        </div>
      </form>
    </Form>
  )
}
