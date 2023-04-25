import { FooterItem } from "./FooterItem";

const FooterSection = ({ children }: any) => {
  return <ul className="flex gap-3 flex-col w-32">{children}</ul>;
};

const Footer = () => {
  return (
    <footer className="max-w-3xl mx-auto px-2 mt-10">
      <hr className="border-gray-100 dark:border-gray-600" />
      <div className="mt-10 flex">
        <FooterSection>
          <FooterItem href="/" text="Home" />
          <FooterItem href="/about" text="About Me" />
          <FooterItem href="/blog" text="Blog" />
          <FooterItem href="/resume" text="Resume" />
        </FooterSection>
        <FooterSection>
          <FooterItem href="https://github.com/milhamm" text="Github" blank />
          <FooterItem href="https://twitter.com/gluekol" text="Twitter" blank />
          <FooterItem
            href="https://www.linkedin.com/in/milhamm/"
            text="LinkedIn"
            blank
          />
        </FooterSection>
        <FooterSection>
          <FooterItem href="/slides" text="Slides" />
          <FooterItem href="/metrics" text="Metrics" />
          <FooterItem href="/weeb" text="Weeb Corner" />
        </FooterSection>
      </div>
    </footer>
  );
};

export { Footer };
