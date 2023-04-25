import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { NavItem } from "~/components/Navbar/NavItem";

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <nav className="max-w-3xl mx-auto py-8 mb-12 w-full flex justify-between">
      <ul className="flex items-center ml-[-0.2rem]">
        <NavItem href="/" text="Home" />
        <NavItem href="/blog" text="Blog" />
        <NavItem href="/about" text="About Me" />
      </ul>
      <button
        data-testid="btn-toggle"
        className="mr-4 p-1 bg-gray-200 dark:bg-gray-800 rounded-lg"
        onClick={() => {
          setTheme(resolvedTheme === "light" ? "dark" : "light");
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 36 36"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          {resolvedTheme === "dark" ? (
            <path
              data-testid="light-btn"
              d="M26.5857 15.2758C26.2107 14.9007 25.9999 14.392 25.9999 13.8616V12C25.9999 10.8954 25.1045 10 23.9999 10H22.1384C21.6079 10 21.0992 9.78929 20.7242 9.41422L19.4142 8.10422C18.6331 7.32317 17.3668 7.32317 16.5857 8.10422L15.2757 9.41422C14.9007 9.78929 14.3919 10 13.8615 10H11.9999C10.8954 10 9.99994 10.8954 9.99994 12V13.8616C9.99994 14.392 9.78923 14.9007 9.41416 15.2758L8.10415 16.5858C7.32311 17.3668 7.32311 18.6332 8.10415 19.4142L9.41415 20.7242C9.78923 21.0993 9.99994 21.608 9.99994 22.1384V24C9.99994 25.1046 10.8954 26 11.9999 26H13.8615C14.3919 26 14.9007 26.2107 15.2757 26.5858L16.5857 27.8958C17.3668 28.6768 18.6331 28.6768 19.4142 27.8958L20.7242 26.5858C21.0992 26.2107 21.6079 26 22.1384 26H23.9999C25.1045 26 25.9999 25.1046 25.9999 24V22.1384C25.9999 21.608 26.2107 21.0993 26.5857 20.7242L27.8957 19.4142C28.6768 18.6332 28.6768 17.3668 27.8957 16.5858L26.5857 15.2758ZM17.9999 24V24C16.9851 24 16.8817 22.6775 17.5448 21.9092C18.4505 20.86 18.9999 19.4949 18.9999 18C18.9999 16.5051 18.4505 15.14 17.5448 14.0908C16.8817 13.3225 16.9851 12 17.9999 12V12C21.3099 12 23.9999 14.69 23.9999 18C23.9999 21.31 21.3099 24 17.9999 24Z"
            />
          ) : (
            <path
              data-testid="dark-btn"
              d="M21.2679 8.33975C20.7445 8.03761 20.2042 7.78927 19.6536 7.59235C18.2053 7.07433 17.1715 8.72651 17.4457 10.2401C17.8518 12.4818 17.4971 14.871 16.2679 17C15.0387 19.129 13.147 20.6309 11.0025 21.4C9.55463 21.9193 8.64068 23.6407 9.81346 24.636C10.2593 25.0143 10.7445 25.3581 11.2679 25.6603C16.0483 28.4203 22.1681 26.7805 24.9281 22C27.6881 17.2195 26.0483 11.0998 21.2679 8.33975Z"
            />
          )}
        </svg>
      </button>
    </nav>
  );
};

export { Navbar };
