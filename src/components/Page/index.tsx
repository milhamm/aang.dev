import React from "react";
import SEO from "@/components/SEO";
import { PageProps } from "@/types/";

const Page = ({ children, meta }: PageProps) => {
  return (
    <>
      <SEO meta={meta} />
      {children}
    </>
  );
};

export default Page;
