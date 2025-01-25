'use client'

import { useState } from 'react'
import Link from 'next/link'

import { useAction } from 'next-safe-action/hooks'
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
import { toast } from '@repo/ui/toast'

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
      email: '',
      password: '',
      password_confirmation: '',
    },
  })

  if (emailSent) {
    return (
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Verifique seu email</h1>
        <p className="text-sm text-muted-foreground">
          Enviamos um email de confirmação para você, verifique sua caixa de
          entrada.
        </p>

        <Button className="w-full" asChild>
          <Link href={routes.auth.login}>Voltar ao login</Link>
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(execute)}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Criar conta</h1>
          <p className="text-sm text-muted-foreground">
            Para criar uma conta no Untitled, insira seus dados abaixo.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input
                        id="first_name"
                        type="text"
                        placeholder="Untitled"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sobrenome</FormLabel>
                    <FormControl>
                      <Input
                        id="last_name"
                        type="text"
                        placeholder="Silva"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

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
                      placeholder="untitled@gmail.com"
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

          <Button type="submit" className="w-full" disabled={isExecuting}>
            Criar conta
          </Button>

          <div className="text-sm">
            Já tem uma conta?{' '}
            <Link
              href={routes.auth.login}
              className="underline underline-offset-4"
            >
              Entrar
            </Link>
          </div>
        </div>
      </form>
    </Form>
  )
}
