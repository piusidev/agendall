import { z } from 'zod'

export const companyInfoSchema = z.object({
  name: z.string().min(1, 'Campo obrigatório').min(3, 'Nome inválido'),
  type: z.string().min(1, 'Campo obrigatório'),
  employee_count: z.coerce
    .number({
      invalid_type_error: 'Campo inválido',
    })
    .min(1, 'Campo obrigatório'),
})

export const companyAddressSchema = z.object({
  zipcode: z.string().min(1, 'Campo obrigatório').max(9, 'CEP inválido'),
  street: z.string().min(1, 'Campo obrigatório'),
  number: z.string().min(1, 'Campo obrigatório'),
  complement: z.string(),
  neighborhood: z.string().min(1, 'Campo obrigatório'),
  city: z.string().min(1, 'Campo obrigatório'),
  state: z.string().min(1, 'Campo obrigatório'),
})

export const createCompanySchema = z.object({
  ...companyInfoSchema.shape,
  ...companyAddressSchema.shape,
})

export type CompanyInfoSchema = z.infer<typeof companyInfoSchema>
export type CompanyAddressSchema = z.infer<typeof companyAddressSchema>
export type CreateCompanySchema = z.infer<typeof createCompanySchema>
