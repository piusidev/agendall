import { z } from 'zod'

export const requestAcessFormSchema = z.object({
  document: z.string().min(1, 'Campo obrigatório').min(18, 'CNPJ inválido'),
  companyName: z.string().min(1, 'Campo obrigatório').min(3, 'Nome inválido'),
  name: z.string().min(1, 'Campo obrigatório').min(3, 'Nome inválido'),
  email: z.string().email('Email inválido').min(1, 'Campo obrigatório'),
  phone: z.string().min(1, 'Campo obrigatório').min(14, 'Telefone inválido'),
  companyType: z.string().min(1, 'Campo obrigatório'),
  employeeCount: z.coerce
    .number({
      invalid_type_error: 'Deve informar pelo menos um profissional',
    })
    .int()
    .positive('Deve informar pelo menos um profissional')
    .min(1, 'Campo obrigatório'),
})

export type RequestAcessFormSchema = z.infer<typeof requestAcessFormSchema>
