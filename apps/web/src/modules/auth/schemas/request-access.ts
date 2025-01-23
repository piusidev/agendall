import { z } from 'zod'

export const requestAcessSchema = z.object({
  company_document: z
    .string()
    .min(1, 'Campo obrigatório')
    .min(18, 'CNPJ inválido'),
  company_name: z.string().min(1, 'Campo obrigatório').min(3, 'Nome inválido'),
  responsible_name: z
    .string()
    .min(1, 'Campo obrigatório')
    .min(3, 'Nome inválido'),
  responsible_email: z
    .string()
    .email('Email inválido')
    .min(1, 'Campo obrigatório'),
  responsible_phone: z
    .string()
    .min(1, 'Campo obrigatório')
    .min(14, 'Telefone inválido'),
  company_type: z.string().min(1, 'Campo obrigatório'),
  employee_count: z.coerce
    .number({
      invalid_type_error: 'Deve informar pelo menos um profissional',
    })
    .int()
    .positive('Deve informar pelo menos um profissional')
    .min(1, 'Campo obrigatório'),
})

export type RequestAcessSchema = z.infer<typeof requestAcessSchema>
