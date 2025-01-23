'use client'

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
  requestAcessSchema,
  RequestAcessSchema,
} from '../schemas/request-access'

import Link from 'next/link'
import { routes } from '@/modules/shared/config/routes'
import { cnpjMask, phoneMask } from '@/modules/shared/utils/formatters'
import { SelectCompanyType } from '@/modules/shared/components/select-company-type'
import { useAction } from 'next-safe-action/hooks'
import { requestAccessAction } from '../actions/request-access'

export function RequestAcessForm() {
  const { execute } = useAction(requestAccessAction)

  const form = useForm<RequestAcessSchema>({
    resolver: zodResolver(requestAcessSchema),
    defaultValues: {
      company_document: '',
      company_name: '',
      company_type: '',
      responsible_email: '',
      responsible_name: '',
      responsible_phone: '',
      employee_count: 0,
    },
  })

  function onSubmit(data: RequestAcessSchema) {
    console.log(data)
    execute(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">
            Conte-nos mais sobre seu negócio
          </h1>
          <p className="text-sm text-muted-foreground">
            Queremos conhecer mais sobre seu negócio para oferecer a melhor
            experiência
          </p>
        </div>

        <div className="grid gap-6">
          <div className="flex flex-col gap-3">
            <FormField
              control={form.control}
              name="company_document"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CNPJ</FormLabel>

                  <FormControl>
                    <Input
                      id="document"
                      type="text"
                      placeholder="00.000.000/0000-00"
                      {...field}
                      onChange={(e) =>
                        form.setValue(
                          'company_document',
                          cnpjMask(e.target.value),
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da empresa</FormLabel>

                  <FormControl>
                    <Input
                      id="company_name"
                      type="text"
                      placeholder="Empresa Exemplo"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="responsible_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome do responsável</FormLabel>
                  <FormControl>
                    <Input
                      id="responsible_name"
                      type="text"
                      placeholder="João da Silva"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="responsible_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email do responsável</FormLabel>
                  <FormControl>
                    <Input
                      id="responsible_email"
                      type="email"
                      placeholder="João da Silva"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="responsible_phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone para contato</FormLabel>
                  <FormControl>
                    <Input
                      id="phone"
                      type="text"
                      placeholder="(00) 000000-0000"
                      {...field}
                      onChange={(e) =>
                        form.setValue(
                          'responsible_phone',
                          phoneMask(e.target.value),
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ramo de atuação</FormLabel>
                  <FormControl>
                    <SelectCompanyType
                      placeholder="Selecione uma opção"
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="employee_count"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de profissionais</FormLabel>
                  <FormControl>
                    <Input
                      id="employee_count"
                      type="number"
                      placeholder="0"
                      min={0}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            onClick={() => console.log(form.formState.errors)}
          >
            Solicitar acesso
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
