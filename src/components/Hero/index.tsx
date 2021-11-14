import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full py-12 bg-dots-light dark:bg-dots-dark bg-center bg-20/20 flex items-center justify-center">
      <div className="flex items-center lg:items-start flex-col lg:flex-row">
        <Image
          src="https://cdn.discordapp.com/attachments/757835711323045969/909478969974349834/dumb.png"
          alt="Yuna"
          className="rounded-full"
          width="130"
          height="130"
        />
        <div className="ml-8 mt-8">
          <h1 className="text-center lg:text-left text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Muhammad Ilham Mubarak //{" "}
            <span className="text-pink-500">Aang</span>
          </h1>
          <span className="text-center bg-white dark:bg-gray-900 lg:text-left text-gray-800 dark:text-white">
            Frontend Weeb Developer
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
