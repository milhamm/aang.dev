import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cx from "classnames";

interface NavItemPropTypes {
  href: string;
  text: string;
}

const NavItem = ({ href, text }: NavItemPropTypes) => {
  const { asPath } = useRouter();
  const isActive = asPath == href;

  return (
    <li>
      <Link href={href}>
        <a
          className={cx(
            "px-5 py-2 h-full rounded-lg font-medium cursor-pointer mr-8 hover:bg-blueGray-100 dark:hover:bg-gray-800",
            {
              "dark:text-gray-200": !isActive,
              "dark:text-white": isActive,
            }
          )}
        >
          {text}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
