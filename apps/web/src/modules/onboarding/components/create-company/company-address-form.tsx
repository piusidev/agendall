'use client'

import { useEffect } from 'react'

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

import { cepMask } from '@/modules/shared/utils/formatters'
import { useAddressByZipcode } from '@/modules/shared/hooks/use-address-by-zipcode'

import {
  companyAddressSchema,
  type CompanyAddressSchema,
} from '@/modules/onboarding/schemas/create-company'
import { useCreateCompanyStore } from '@/modules/onboarding/store/create-company'

export function CompanyAdressForm() {
  const { company, updateCompanyAddress, updateStep } = useCreateCompanyStore()

  const form = useForm<CompanyAddressSchema>({
    resolver: zodResolver(companyAddressSchema),
    defaultValues: {
      zipcode: company.zipcode,
      street: company.street,
      number: company.number,
      complement: company.complement,
      neighborhood: company.neighborhood,
      city: company.city,
      state: company.state,
    },
  })

  const zipcode = form.watch('zipcode')

  const { data: address } = useAddressByZipcode(zipcode)

  useEffect(() => {
    if (address) {
      form.setValue('street', address.street)
      form.setValue('neighborhood', address.neighborhood)
      form.setValue('city', address.city)
      form.setValue('state', address.state)
    }
  }, [address, form])

  const onSubmit = (data: CompanyAddressSchema) => {
    updateCompanyAddress(data)
    updateStep(3)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="grid gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col md:flex-row gap-2">
              <FormField
                control={form.control}
                name="zipcode"
                render={({ field }) => (
                  <FormItem className="w-full md:w-1/4">
                    <FormLabel>CEP</FormLabel>

                    <FormControl>
                      <Input
                        type="text"
                        placeholder="00000-000"
                        {...field}
                        onChange={(e) =>
                          field.onChange(cepMask(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem className="w-full md:w-3/4">
                    <FormLabel>Logradouro</FormLabel>

                    <FormControl>
                      <Input type="text" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-2">
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem className="w-full md:w-1/4">
                    <FormLabel>Número</FormLabel>

                    <FormControl>
                      <Input type="text" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="complement"
                render={({ field }) => (
                  <FormItem className="w-full md:w-3/4">
                    <FormLabel>Complemento</FormLabel>

                    <FormControl>
                      <Input type="text" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-2">
              <FormField
                control={form.control}
                name="neighborhood"
                render={({ field }) => (
                  <FormItem className="w-full md:w-2/5">
                    <FormLabel>Bairro</FormLabel>

                    <FormControl>
                      <Input type="text" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="w-full md:w-2/5">
                    <FormLabel>Cidade</FormLabel>

                    <FormControl>
                      <Input type="text" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="w-full md:w-1/5">
                    <FormLabel>Estado</FormLabel>

                    <FormControl>
                      <Input type="text" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <Button variant="secondary" onClick={() => updateStep(1)}>
              Voltar
            </Button>

            <Button type="submit">Próximo</Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
