import { Link } from 'react-router';
import { ButtonThemeSwitcher } from './button-theme-switcher';
import { Logo } from './icons/logo';

export function Navbar() {
  return (
    <nav className="fixed top-0 z-10 inset-x-0">
      <div className="flex items-center justify-center">
        <div className="h-12 px-3 mt-6 lg:mt-10 border border-border flex items-center bg-accent shadow shadow-accent rounded-sm gap-6">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Logo />
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/about">Blog</Link>
            <Link to="/works">Works</Link>
            <Link to="/about">About</Link>
            <Link to="/snippets">Snippets</Link>
          </div>
          <div className="flex md:hidden items-center gap-8 text-sm">
            <Link to="/works">Works</Link>
            <Link to="/about">About</Link>
          </div>
          <ButtonThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
