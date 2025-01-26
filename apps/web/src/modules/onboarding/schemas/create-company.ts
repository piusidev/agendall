import { z } from 'zod'

export const createCompanySchema = z.object({
  name: z.string().min(1, 'Campo obrigatório').min(3, 'Nome inválido'),
  document: z.string().min(1, 'Campo obrigatório').min(3, 'CNPJ inválido'),
  company_type: z.string().min(1, 'Campo obrigatório'),
  employee_count: z.coerce
    .number({
      invalid_type_error: 'Campo inválido',
    })
    .min(1, 'Campo obrigatório'),
})

export type CreateCompanySchema = z.infer<typeof createCompanySchema>
