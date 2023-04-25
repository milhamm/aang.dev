import { NavItem } from "~/components/Navbar/NavItem";

import { ButtonThemeSwitch } from "../ButtonThemeSwitch";

const Navbar = () => {
  return (
    <nav className="max-w-3xl mx-auto py-8 mb-12 w-full flex justify-between">
      <ul className="flex items-center ml-2 lg:ml-[-0.2rem]">
        <NavItem href="/" text="Home" />
        <NavItem href="/blog" text="Blog" />
        <NavItem href="/about" text="About Me" />
      </ul>
      <ButtonThemeSwitch />
    </nav>
  );
};

export { Navbar };
