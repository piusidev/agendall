'use client'

import Link from 'next/link'

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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@agendall/ui/select'

import { routes } from '@/modules/shared/config/routes'

import {
  companyInfoSchema,
  type CompanyInfoSchema,
} from '@/modules/onboarding/schemas/create-company'
import { useCreateCompanyStore } from '@/modules/onboarding/stores/create-company'
import { useCompanyTypes } from '@/modules/shared/hooks/use-company-types'

export function CompanyInfoForm() {
  const { company, updateCompanyInfo, updateStep } = useCreateCompanyStore()
  const { data: companyTypes } = useCompanyTypes()

  const form = useForm<CompanyInfoSchema>({
    resolver: zodResolver(companyInfoSchema),
    defaultValues: {
      name: company.name,
      type: company.type,
      employee_count: company.employee_count || undefined,
    },
  })

  function onSubmit(data: CompanyInfoSchema) {
    updateCompanyInfo(data)
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
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Nome da Empresa</FormLabel>

                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Nome da Empresa"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col md:flex-row gap-2">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel htmlFor="type">Ramo de atuação</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        name={field.name}
                      >
                        <SelectTrigger
                          className="bg-background"
                          id={field.name}
                        >
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {companyTypes?.map((companyType) => (
                              <SelectItem
                                key={companyType.value}
                                value={companyType.value}
                              >
                                {companyType.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
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
                      <Input type="text" placeholder="0" {...field} />
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
