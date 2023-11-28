import Link from 'next/link'

import { cn } from '@/lib/utils'

type PostCardProps = {
  slug: string
  data: {
    date: string
    title: string
    color?: 'blue' | 'orange' | 'pink'
  }
}

const pallete = {
  blue: 'from-cyan-500 to-blue-700',
  orange: 'from-orange-400 to-amber-400',
  pink: 'from-red-500 to-pink-600',
}

export function BlogCard({ data, slug }: PostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className='border-blueGray-200 min-h-[170px] w-full cursor-pointer rounded-3xl border p-3 transition-all dark:border-white'
    >
      <div
        className={cn(
          'h-full rounded-2xl bg-gradient-to-br px-4 py-4 text-sm text-white',
          pallete[data.color || 'blue']
        )}
      >
        <p>{data.date}</p>
        <h3 className='mt-4 line-clamp-4 font-bold'>{data.title}</h3>
      </div>
    </Link>
  )
}
