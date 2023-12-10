import Link from 'next/link'

import { ColorPallete, pallete } from '@/lib/pallete'
import { cn } from '@/lib/utils'

type PostCardProps = {
  slug: string
  data: {
    date: string
    title: string
    color?: ColorPallete
  }
}

export function BlogCard({ data, slug }: PostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className='min-h-[170px] w-full cursor-pointer rounded-3xl border-2 border-border p-2 transition-all'
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
