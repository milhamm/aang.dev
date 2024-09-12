export function Meaning() {
  return (
    <div className='mx-0 mb-6 grid place-items-center gap-6 rounded-lg'>
      <div className='relative aspect-[16/10] w-full overflow-hidden rounded-lg'>
        <video
          src='https://cdn.rauno.me/ixd/iphone-close-stretch.mp4'
          height='100%'
          loop
          autoPlay
          preload='auto'
          className='absolute inset-0 !my-0 size-full object-cover object-center'
        ></video>
      </div>
      <footer className='mt-1 w-full text-center text-xs text-muted-foreground'>
        Video by{' '}
        <a href='https://rauno.me/craft/interaction-design' target='_blank'>
          Rauno Freiberg
        </a>
      </footer>
    </div>
  )
}
