import { RequestAcessForm } from '@/modules/auth/components/request-access-form'

export default function Page() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-muted lg:flex items-center justify-center m-4 rounded-3xl">
        <div className="w-3/4 flex flex-col gap-4 p-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Simplifique a gestão do seu negócio
          </h1>

          <p className="leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Agende, gerencie e impressione seus clientes com um sistema criado
            para o sucesso do seu espaço.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-6 md:p-10 col-span-1">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-lg">
            <RequestAcessForm />
          </div>
        </div>
      </div>
    </div>
  )
}
