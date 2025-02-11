'use client'

import { useForm } from 'react-hook-form'
import { useAction } from 'next-safe-action/hooks'
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
import { toast } from '@agendall/ui/toast'
import { cn } from '@agendall/ui/utils'

import { RoleSelect } from '@/modules/auth/components/role-select'

import {
  InviteProfessionalSchema,
  inviteProfessionalSchema,
} from '../../schemas/invite-professional'
import { inviteProfessionalAction } from '../../actions/invite-professional'

interface InviteProfessionalFormProps extends React.ComponentProps<'form'> {
  onInvite: () => void
}

export function InviteProfessionalForm({
  className,
  onInvite,
}: InviteProfessionalFormProps) {
  const { execute, isExecuting } = useAction(inviteProfessionalAction, {
    onError: ({ error }) => {
      if (error.serverError) {
        return toast.error(error.serverError)
      }

      toast.error(
        'Erro ao convidar o profissional, tente novamente em alguns minutos',
      )
    },
    onSuccess: onInvite,
  })

  const form = useForm<InviteProfessionalSchema>({
    resolver: zodResolver(inviteProfessionalSchema),
    defaultValues: {
      email: '',
      role: 'member',
    },
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(execute)}
        className={cn('flex flex-col gap-6', className)}
      >
        <div className="grid gap-6">
          <div className="flex flex-col gap-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>

                  <FormControl>
                    <Input
                      id="email"
                      type="email"
                      placeholder="alan.turing@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cargo</FormLabel>
                  <FormControl>
                    <RoleSelect
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full" loading={isExecuting}>
            Convidar
          </Button>
        </div>
      </form>
    </Form>
  )
}
