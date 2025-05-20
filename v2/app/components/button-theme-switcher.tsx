import { useTheme } from 'next-themes';
import { useCallback } from 'react';
import { flushSync } from 'react-dom';
import { Dark } from './icons/dark';
import { Light } from './icons/light';
import { Button } from './ui/button';

function useThemeTransition() {
  const { setTheme, theme } = useTheme();
  const isDark = theme === 'dark';

  const toggleTheme = useCallback(() => {
    if (
      !document.startViewTransition ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setTheme(isDark ? 'light' : 'dark');
      return;
    }

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(isDark ? 'light' : 'dark');
      });
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: ['circle(50% at -100% 50%)', 'circle(100% at 50% 50%)'],
          // clipPath: [
          //   `polygon(0 0, -20% 0, 0 100%, 0 100%)`,
          //   `polygon(0 0, 120% 0, 100% 100%, 0 100%)`,
          // ],
          filter: ['blur(10px)', 'blur(0)'],
        },
        {
          duration: 800,
          easing: 'ease-out',
          pseudoElement: '::view-transition-new(root)',
        },
      );
    });
  }, [setTheme, isDark]);

  return {
    theme,
    toggleTheme,
  };
}

export function ButtonThemeSwitcher() {
  const { toggleTheme, theme } = useThemeTransition();

  return (
    <Button onClick={toggleTheme} size="icon" variant="link">
      {theme === 'light' ? <Light className="size-5" /> : <Dark className="size-5" />}
    </Button>
  );
}
