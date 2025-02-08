interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="grid mb-10">
      <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      <p className="text-base text-muted-foreground">{description}</p>
    </div>
  )
}
