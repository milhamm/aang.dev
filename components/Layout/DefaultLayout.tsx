import { PageProps } from "types";

import { Footer } from "~/components/Footer";
import { Navbar } from "~/components/Navbar";
import SEO from "~/components/SEO";

const DefaultLayout = ({ children, meta }: PageProps) => {
  return (
    <>
      <SEO meta={meta} />
      <Navbar />
      <main className="max-w-3xl px-2 mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export { DefaultLayout };
