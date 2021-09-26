import React from "react";

export declare type SEOType = {
  title?: string;
};

export declare type SEOProps = {
  meta?: SEOType;
};

export declare type PageProps = {
  children: React.ReactNode;
  meta?: SEOType;
};
