export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="bg-muted min-h-svh flex flex-col items-center justify-center p-2">
      {children}
    </div>
  )
}
