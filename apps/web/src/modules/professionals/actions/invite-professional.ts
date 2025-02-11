'use server'

import { ActionError } from '@/modules/shared/errors/action-error'
import { authActionClient } from '@/modules/shared/lib/safe-action'

import { getProfessionalByEmail } from '@agendall/supabase/queries/cached/professional'
import { getInvitedUserByEmail } from '@agendall/supabase/queries/cached/user'
import { inviteUser } from '@agendall/supabase/mutations/user'

import { inviteProfessionalSchema } from '../schemas/invite-professional'

export const inviteProfessionalAction = authActionClient
  .schema(inviteProfessionalSchema)
  .action(async ({ parsedInput, ctx: { supabase, user } }) => {
    if (!user.company_id) {
      throw new ActionError('Seu usuário não pertence a uma empresa')
    }

    const professional = await getProfessionalByEmail(parsedInput.email)

    if (professional?.data) {
      throw new ActionError('Esse profissional já está cadastrado')
    }

    const invitedUser = await getInvitedUserByEmail(parsedInput.email)

    if (invitedUser?.data) {
      throw new ActionError('Esse profissional já foi convidado.')
    }

    await inviteUser(supabase, {
      company_id: user.company_id,
      email: parsedInput.email,
      role: parsedInput.role,
      invited_by: user.id,
    })
  })
