type SectionProps = React.PropsWithChildren<{
  title: string
  showMore?: boolean
}>

export function Section({ title, showMore, children }: SectionProps) {
  return (
    <div className='mt-12 flex w-full flex-col'>
      <h2 className='mb-8 text-2xl font-bold text-foreground'>{title}</h2>
      {children}
      {showMore ? (
        <span className='mt-8 flex cursor-pointer gap-4 self-end transition-all hover:gap-5'>
          <span className=''>See More</span> →
        </span>
      ) : null}
    </div>
  )
}
