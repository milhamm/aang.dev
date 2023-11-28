import { cx } from 'utils/cx'

type TitleProps = {
  children?: string
}

const Title = ({ children }: TitleProps) => {
  return <h1 className={cx('mb-4 text-[2rem] font-bold')}>{children}</h1>
}

export { Title }
