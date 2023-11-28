import Head from 'next/head'
import { SEOProps } from 'types'

const SEO = ({ meta }: SEOProps) => {
  const title: string = meta?.title ? meta.title : "Hello, I'm Aang"

  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export default SEO
