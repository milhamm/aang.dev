import { DefaultLayoutProps } from "types";

import { DefaultLayout } from "./DefaultLayout";
import { Title } from "./Title";

type PageProps = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
} & Omit<DefaultLayoutProps, "children">;

const Page = ({ meta, children, title }: PageProps) => {
  return (
    <DefaultLayout meta={meta}>
      <Title>{title}</Title>
      <div>{children}</div>
    </DefaultLayout>
  );
};

export { Page };
