export function Metaphors() {
  return (
    <div className='mx-0 mb-6 grid grid-cols-2 place-items-center gap-6 rounded-lg md:-mx-16'>
      <div className='relative aspect-[16/10] w-full overflow-hidden rounded-lg'>
        <video
          src='https://cdn.rauno.me/ixd/ipad-home-swipe.mp4'
          height='100%'
          loop
          autoPlay
          preload='auto'
          className='absolute inset-0 !my-0 size-full object-cover object-center'
        ></video>
      </div>

      <div className='relative aspect-[16/10] w-full overflow-hidden rounded-lg'>
        <video
          src='https://cdn.rauno.me/ixd/page-flip4.mp4'
          loop
          autoPlay
          preload='auto'
          className='absolute inset-0 !my-0 size-full object-cover object-center'
        ></video>
      </div>
      <footer className={'col-span-2 mt-1 w-full text-center text-xs text-muted-foreground'}>
        Video by:{' '}
        <a href='https://rauno.me/craft/interaction-design' target='_blank'>
          Rauno Freiberg: Invisible Details of Interaction Design
        </a>
      </footer>
    </div>
  )
}
