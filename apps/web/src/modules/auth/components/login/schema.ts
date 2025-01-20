import { z } from 'zod'

export const loginFormSchema = z.object({
  email: z.string().email('Email inválido').min(1, 'Campo obrigatório'),
  password: z.string().min(1, 'Campo obrigatório'),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
