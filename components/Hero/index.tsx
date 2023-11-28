import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex w-full items-center justify-center bg-dots-light bg-20/20 bg-center py-[5rem] dark:bg-dots-dark'>
      <div className='flex flex-col items-center p-5 lg:flex-row lg:items-center'>
        <div className='mask-squircle flex h-[140px] w-[140px] items-center justify-center bg-white dark:bg-black'>
          <Image
            src='https://avatars.githubusercontent.com/u/35242329?v=4'
            alt='Aang'
            className='mask-squircle'
            width='120'
            height='120'
          />
        </div>
        <div className='ml-0 mt-5 px-4 lg:ml-6 lg:mt-0'>
          <h1 className='bg-white p-3 text-center text-2xl font-bold text-gray-800 dark:bg-black dark:text-white lg:text-left'>
            Muhammad Ilham Mubarak //{' '}
            <span className='bg-gradient-to-br from-cyan-500 to-cyan-300 bg-clip-text text-transparent'>
              Aang
            </span>
          </h1>
          <span className='block bg-white p-3 text-center text-gray-800 dark:bg-black dark:text-white lg:inline-block lg:w-auto lg:text-left'>
            Frontend Weeb Engineer
          </span>
        </div>
      </div>
    </div>
  )
}

export default Hero
