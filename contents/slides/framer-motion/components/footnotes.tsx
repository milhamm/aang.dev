export function Footnotes({ children }: React.PropsWithChildren) {
  return (
    <footer className='fixed mt-11 w-full text-center text-xs text-muted-foreground'>
      {children}
    </footer>
  )
}
