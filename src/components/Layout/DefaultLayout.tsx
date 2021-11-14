import React from "react";
import SEO from "components/SEO";
import { PageProps } from "types";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

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

export default DefaultLayout;
