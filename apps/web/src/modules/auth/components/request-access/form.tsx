'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@repo/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/ui/select'
import { Input } from '@repo/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@repo/ui/form'

import { RequestAcessFormSchema, requestAcessFormSchema } from './schema'
import Link from 'next/link'
import { routes } from '@/modules/shared/config/routes'
import { cnpjMask, phoneMask } from '@/modules/shared/utils/masks'

export function RequestAcessForm() {
  const form = useForm<RequestAcessFormSchema>({
    resolver: zodResolver(requestAcessFormSchema),
    defaultValues: {
      document: '',
      email: '',
      companyName: '',
      name: '',
      phone: '',
      lineOfBusiness: '',
    },
  })

  function onSubmit(data: RequestAcessFormSchema) {}

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
              name="document"
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
                        form.setValue('document', cnpjMask(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da empresa</FormLabel>

                  <FormControl>
                    <Input
                      id="companyName"
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome do responsável</FormLabel>
                  <FormControl>
                    <Input
                      id="name"
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
              name="phone"
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
                        form.setValue('phone', phoneMask(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lineOfBusiness"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ramo de atuação</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Clínica de estética">
                            Clínica de estética
                          </SelectItem>
                          <SelectItem value="Salão de beleza">
                            Salão de beleza
                          </SelectItem>
                          <SelectItem value="Fisioterapia">
                            Fisioterapia
                          </SelectItem>
                          <SelectItem value="Barbearia">Barbearia</SelectItem>
                          <SelectItem value="Outros">Outros</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full">
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
