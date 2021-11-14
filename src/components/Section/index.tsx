import React, { ReactNode } from "react";

interface SectionPropTypes {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionPropTypes) => {
  return (
    <div className="w-full mt-12 flex flex-col">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        {title}
      </h2>
      {children}
      <span className="inline-block mt-8 self-end flex gap-4 hover:gap-5 transition-all cursor-pointer">
        <span className="">See More</span> →
      </span>
    </div>
  );
};

export default Section;
