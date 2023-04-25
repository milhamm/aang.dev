import cx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavItemPropTypes {
  href: string;
  text: string;
}

const NavItem = ({ href, text }: NavItemPropTypes) => {
  const { asPath } = useRouter();
  const isActive = asPath == href;

  return (
    <li>
      <Link
        href={href}
        className={cx(
          "px-3 lg:px-4 py-1 lg:py-2 h-full rounded-lg text-sm lg:text-base cursor-pointer mr-2 lg:mr-5 relative",
          {
            "dark:text-gray-200": !isActive,
            "dark:text-white": isActive,
          }
        )}
      >
        {isActive ? (
          <motion.span
            layoutId="hovered"
            className="px-3 bg-neutral-200 dark:bg-gray-800 lg:px-4 py-1 lg:py-2 w-full h-full rounded-lg absolute z-0 inset-0"
          />
        ) : null}
        <span className="relative">{text}</span>
      </Link>
    </li>
  );
};

export { NavItem };
