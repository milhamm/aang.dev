import { DefaultLayoutProps } from 'types'

import { Title } from './Title'

type PageProps = {
  children: React.ReactNode
  title?: string
  subtitle?: string
} & Omit<DefaultLayoutProps, 'children'>

const Page = ({ children, title }: PageProps) => {
  return (
    <>
      <Title>{title}</Title>
      <div>{children}</div>
    </>
  )
}

export { Page }
