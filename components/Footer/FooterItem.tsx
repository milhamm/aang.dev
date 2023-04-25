import Link from "next/link";

const FooterItem = ({ href, text, blank }: any) => {
  return (
    <li>
      {!blank ? (
        <Link href={href} className="text-gray-400">
          {text}
        </Link>
      ) : (
        <a
          href={href}
          className="text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      )}
    </li>
  );
};

export { FooterItem };
