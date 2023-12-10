import { MatterMetadata } from '@/lib/blogs.server'
import { pallete } from '@/lib/pallete'
import { cn } from '@/lib/utils'

type BlogHeaderProps = {
  frontmatter: MatterMetadata
}

export function BlogHeader({ frontmatter }: BlogHeaderProps) {
  const { title, publishedAt } = frontmatter

  return (
    <div
      className={cn(
        'relative',
        "after:absolute after:bottom-0 after:h-full after:w-full after:bg-gradient-to-t after:from-background after:from-20% after:content-['']"
      )}
    >
      <div className='rounded-2xl border-2 border-border p-2'>
        <div
          className={cn(
            'mb-10 flex h-60 w-full flex-col justify-end gap-4 rounded-xl p-5 lg:h-[450px] lg:p-10',
            'bg-gradient-to-br',
            pallete['blue']
          )}
        >
          <h1 className='z-10 max-w-lg font-head text-2xl font-bold lg:text-4xl'>{title}</h1>
          <span className='z-10 text-muted-foreground'>{publishedAt}</span>
        </div>
      </div>
    </div>
  )
}
