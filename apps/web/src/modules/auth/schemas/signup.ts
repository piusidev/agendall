import { z } from 'zod'

export const signUpSchema = z
  .object({
    first_name: z.string().min(1, 'Campo obrigatório').min(3, 'Nome inválido'),
    last_name: z
      .string()
      .min(1, 'Campo obrigatório')
      .min(3, 'Sobrenome inválido'),
    email: z.string().email('Email inválido').min(1, 'Campo obrigatório'),
    password: z
      .string()
      .min(1, 'Campo obrigatório')
      .min(8, 'Senha deve ter no mínimo 8 caracteres'),
    password_confirmation: z
      .string()
      .min(1, 'Campo obrigatório')
      .min(8, 'Senha deve ter no mínimo 8 caracteres'),
  })
  .refine((schema) => schema.password === schema.password_confirmation, {
    message: 'Senhas não conferem',
    path: ['passwordConfirmation'],
  })

export type SignUpSchema = z.infer<typeof signUpSchema>
