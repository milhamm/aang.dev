import React, { ReactNode } from "react";

interface SectionPropTypes {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionPropTypes) => {
  return (
    <div className="w-full mt-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default Section;
