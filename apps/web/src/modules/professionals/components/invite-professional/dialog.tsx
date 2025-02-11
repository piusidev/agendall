'use client'

import * as React from 'react'

import { Button } from '@agendall/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@agendall/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@agendall/ui/drawer'
import { toast } from '@agendall/ui/toast'
import { useIsMobile } from '@agendall/ui/hooks/use-mobile'
import { InviteProfessionalForm } from './form'

export function InviteProfessional() {
  const [open, setOpen] = React.useState(false)
  const isMobile = useIsMobile()

  const texts = {
    title: 'Convidar profissional',
    description:
      'Envie um convite para o email do profissional. Ele receberá um email com um link para criar uma conta.',
    invite: 'Convidar',
  }

  const onInvite = () => {
    setOpen(false)

    toast.success('Convite enviado com sucesso')
  }

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline">{texts.invite}</Button>
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>{texts.title}</DrawerTitle>
            <DrawerDescription>{texts.description}</DrawerDescription>
          </DrawerHeader>

          <InviteProfessionalForm className="px-4" onInvite={onInvite} />

          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">{texts.invite}</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{texts.title}</DialogTitle>
          <DialogDescription>{texts.description}</DialogDescription>
        </DialogHeader>

        <InviteProfessionalForm onInvite={onInvite} />
      </DialogContent>
    </Dialog>
  )
}
