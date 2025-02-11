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
import { useIsMobile } from '@agendall/ui/hooks/use-mobile'
import { InvitedProfessionalsList } from './list'
import { Inbox } from 'lucide-react'

export function InvitedProfessionals() {
  const [open, setOpen] = React.useState(false)
  const isMobile = useIsMobile()

  const texts = {
    title: 'Convidar profissional',
    description:
      'Envie um convite para o email do profissional. Ele receberá um email com um link para criar uma conta.',
    invite: 'Convidar',
  }

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="secondary" size="icon">
            <Inbox />
          </Button>
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>{texts.title}</DrawerTitle>
            <DrawerDescription>{texts.description}</DrawerDescription>
          </DrawerHeader>

          <InvitedProfessionalsList className="px-4" />

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
        <Button variant="secondary" size="icon">
          <Inbox />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{texts.title}</DialogTitle>
          <DialogDescription>{texts.description}</DialogDescription>
        </DialogHeader>

        <InvitedProfessionalsList />
      </DialogContent>
    </Dialog>
  )
}
