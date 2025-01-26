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
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/card'

import { SelectCompanyType } from '@/modules/shared/components/select-company-type'

import {
  createCompanySchema,
  CreateCompanySchema,
} from '../schemas/create-company'
import { cnpjMask } from '@/modules/shared/utils/formatters'

export function CreateCompanyForm() {
  const form = useForm<CreateCompanySchema>({
    resolver: zodResolver(createCompanySchema),
    defaultValues: {
      document: '',
      name: '',
      company_type: '',
    },
  })

  function onSubmit(data: CreateCompanySchema) {
    console.log(data)
  }

  return (
    <div className="w-full max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Vamos configurar sua empresa</CardTitle>
          <CardDescription>Conte-nos mais sobre seu negócio</CardDescription>
        </CardHeader>

        <CardContent>
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
                                form.setValue(
                                  'document',
                                  cnpjMask(e.target.value),
                                )
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

                <Button type="submit" className="w-fit place-self-end">
                  Próximo
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
