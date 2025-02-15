import Link from 'next/link'

import { DateFormatter } from '@/lib/date'
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
  const publishedAt = DateFormatter(data.date)

  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        'relative cursor-pointer transition-all',
        "after:from-background after:absolute after:bottom-0 after:h-full after:w-full after:rounded-xl after:bg-linear-to-t after:from-5% after:content-['']"
      )}
    >
      <div className='border-border aspect-5/4 rounded-xl border-2 p-1'>
        <div
          className={cn(
            'flex h-full flex-col justify-end rounded-lg bg-linear-to-br p-4 text-base text-neutral-800 dark:text-neutral-100',
            pallete[data.color || 'blue']
          )}
        >
          <h3 className='z-10 mb-2 line-clamp-4 font-bold text-balance'>{data.title}</h3>
          <span className='text-muted-foreground z-10 text-xs'>{publishedAt.getShortFormat()}</span>
        </div>
      </div>
    </Link>
  )
}
