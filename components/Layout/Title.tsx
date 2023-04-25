import { cx } from "utils/cx";

type TitleProps = {
  children?: string;
};

const Title = ({ children }: TitleProps) => {
  return <h1 className={cx("text-[2rem] font-bold mb-4")}>{children}</h1>;
};

export { Title };
