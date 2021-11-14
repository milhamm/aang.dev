import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full py-12 bg-dots-light dark:bg-dots-dark bg-center bg-20/20 flex items-center justify-center">
      <div className="flex items-center lg:items-center flex-col lg:flex-row">
        <div className="w-[108px] h-[108px] bg-gradient-to-br from-cyan-500 to-cyan-300 rounded-full flex items-center justify-center">
          <Image
            src="https://cdn.discordapp.com/attachments/757835711323045969/909478969974349834/dumb.png"
            alt="Yuna"
            className="rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="ml-0 mt-8 lg:mt-0 lg:ml-8 px-4">
          <h1 className="text-center lg:text-left text-2xl font-bold text-gray-800 dark:text-white mb-2 bg-white dark:bg-gray-900">
            Muhammad Ilham Mubarak //{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-cyan-500 to-cyan-300">
              Aang
            </span>
          </h1>
          <span className="text-center block lg:inline-block lg:w-auto bg-white dark:bg-gray-900 lg:text-left text-gray-800 dark:text-white">
            Frontend Weeb Developer
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
