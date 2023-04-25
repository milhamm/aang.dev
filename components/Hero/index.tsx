import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full py-[5rem] bg-dots-light dark:bg-dots-dark bg-center bg-20/20 flex items-center justify-center">
      <div className="flex items-center lg:items-center flex-col lg:flex-row p-5">
        <div className="w-[140px] h-[140px] mask-squircle bg-white dark:bg-black flex items-center justify-center">
          <Image
            src="https://avatars.githubusercontent.com/u/35242329?v=4"
            alt="Aang"
            className="mask-squircle"
            width="120"
            height="120"
          />
        </div>
        <div className="ml-0 mt-5 lg:mt-0 lg:ml-6 px-4">
          <h1 className="text-center lg:text-left text-2xl font-bold text-gray-800 dark:text-white bg-white dark:bg-black p-3">
            Muhammad Ilham Mubarak //{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-cyan-500 to-cyan-300">
              Aang
            </span>
          </h1>
          <span className="text-center block lg:inline-block lg:w-auto bg-white dark:bg-black lg:text-left text-gray-800 dark:text-white p-3">
            Frontend Weeb Engineer
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
