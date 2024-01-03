type PlaygroundLayoutProps = {
  children: React.ReactNode
  title: string
  subtitle: string
}

export function PlaygroundLayout({ children, title, subtitle }: PlaygroundLayoutProps) {
  return (
    <>
      <header className='mb-12 space-y-4'>
        <h1 className='font-prompt text-4xl font-bold'>{title}</h1>
        <p className='text-lg text-muted-foreground'>{subtitle}</p>
      </header>
      {children}
    </>
  )
}
