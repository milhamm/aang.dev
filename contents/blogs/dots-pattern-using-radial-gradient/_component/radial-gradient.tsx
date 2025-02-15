export function RadialGradient() {
  return (
    <div className='not-prose border-border rounded-lg border p-1 pb-5 text-center'>
      <div className='mx-auto flex h-full w-1/2 items-center justify-center'>
        <div className='relative h-40 flex-1 bg-[radial-gradient(powderblue_20px,transparent_0px)] [background-size:50px_50px] bg-center bg-no-repeat' />
        <div className='relative h-40 flex-1 bg-[radial-gradient(powderblue_20px,transparent_0px)] [background-size:50px_50px] bg-center bg-no-repeat before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(mediumvioletred_100%,transparent_0px)] before:[background-size:50px_50px] before:bg-center before:bg-no-repeat before:content-[""]' />
      </div>
      <p className='text-muted-foreground text-sm'>
        Creating a dot using <span className='font-mono'>`radial-gradient`</span>
      </p>
    </div>
  )
}
