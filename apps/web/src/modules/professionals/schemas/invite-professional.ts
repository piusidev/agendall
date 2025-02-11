import { z } from 'zod'

import { roleSchema } from '@/modules/auth/schemas/role'

export const inviteProfessionalSchema = z.object({
  email: z.string().email('Email inválido').min(1, 'Campo obrigatório'),
  role: roleSchema,
})

export type InviteProfessionalSchema = z.infer<typeof inviteProfessionalSchema>
