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
import { cnpjMask } from '@/modules/shared/utils/formatters'
import { SelectCompanyType } from '@/modules/shared/components/select-company-type'

import {
  createCompanySchema,
  CreateCompanySchema,
} from '@/modules/onboarding/schemas/create-company'
import { useOnboardingStore } from '@/modules/onboarding/stores/onboarding'

export function CompanyForm() {
  const { company, updateCompany, updateStep } = useOnboardingStore()

  const form = useForm<CreateCompanySchema>({
    resolver: zodResolver(createCompanySchema),
    defaultValues: {
      document: company.document,
      name: company.name,
      company_type: company.company_type,
      employee_count: company.employee_count || undefined,
    },
  })

  function onSubmit(data: CreateCompanySchema) {
    updateCompany(data)
    updateStep(2)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="grid gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Nome da Empresa</FormLabel>

                    <FormControl>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Nome da Empresa"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="document"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>CNPJ</FormLabel>

                    <FormControl>
                      <Input
                        id="document"
                        type="text"
                        placeholder="00.000.000/0000-00"
                        {...field}
                        onChange={(e) =>
                          form.setValue('document', cnpjMask(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="company_type"
                render={({ field }) => (
                  <FormItem className="w-full">
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
                  <FormItem className="w-full">
                    <FormLabel>Número de profissionais</FormLabel>
                    <FormControl>
                      <Input
                        id="employee_count"
                        type="text"
                        placeholder="0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <Button variant="secondary" asChild>
              <Link href={routes.onboarding.root}>Voltar</Link>
            </Button>

            <Button type="submit">Próximo</Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
