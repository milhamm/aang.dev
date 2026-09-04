import * as stylex from '@stylexjs/stylex';
import { createFileRoute } from '@tanstack/react-router';

const revealIn = stylex.keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(14px)'
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)'
  }
});

const styles = stylex.create({
  main: {
    position: 'relative',
    isolation: 'isolate',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100dvh',
    overflow: 'hidden',
    backgroundColor: '#0c0c12',
    color: '#f5f5f7'
  },
  content: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '2rem',
    width: '100%',
    maxWidth: '60rem',
    padding: {
      default: '1.5rem',
      '@media (min-width: 640px)': '5rem'
    },
    textAlign: 'left'
  },
  copy: {
    textShadow: '0 0 24px rgba(12, 12, 18, 0.2), 0 2px 8px rgba(0, 0, 0, 0.3)'
  },
  links: {
    color: '#f4f4f5',
    textShadow: '0 0 24px rgba(12, 12, 18, 0.2), 0 2px 8px rgba(0, 0, 0, 0.3)'
  },
  name: {
    margin: 0,
    fontSize: 'clamp(2.5rem, 7.5vw, 5rem)',
    lineHeight: 0.95,
    fontWeight: 700,
    letterSpacing: '-0.03em',
    textWrap: 'balance',
    color: '#ffffff'
  },
  title: {
    marginTop: '1rem',
    marginBottom: 0,
    fontSize: 'clamp(1rem, 2.5vw, 1.375rem)',
    fontWeight: 500,
    color: '#daf412'
  },
  description: {
    marginTop: '1rem',
    marginBottom: 0,
    maxWidth: '36rem',
    fontSize: 'clamp(0.8125rem, 1.75vw, 0.9375rem)',
    lineHeight: 1.6,
    fontWeight: 300,
    color: '#f4f4f5',
    textWrap: 'balance'
  },
  current: {
    marginTop: '1rem',
    marginBottom: 0,
    fontSize: 'clamp(0.8125rem, 1.75vw, 0.9375rem)',
    fontWeight: 300,
    color: '#fafafa'
  },
  link: {
    position: 'relative',
    display: 'inline-block',
    textDecoration: 'none',
    transitionProperty: 'color, text-shadow',
    transitionDuration: '150ms',
    transitionTimingFunction: 'ease'
  },
  currentLink: {
    color: '#fafafa',
    fontWeight: 900
  },
  socialLink: {
    fontSize: '0.875rem',
    fontWeight: 500
  },
  linkHover: {
    color: {
      default: null,
      ':hover': '#ffffff'
    },
    textShadow: {
      default: null,
      ':hover': '0 0 16px rgba(221, 255, 71, 0.95)'
    }
  },
  linkScribble: {
    position: 'relative',
    display: 'inline-block'
  },
  scribble: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '-0.15em',
    height: 4,
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg width='93' height='4' viewBox='0 0 93 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M91.3412 2.20783C90.0586 1.67211 82.029 0.556397 77.4541 0.261402C68.8544 -0.266712 26.013 0.00374115 16.4643 1.08777C8.95195 1.94487 -0.364817 2.70863 0.011015 3.44512C0.18506 3.83212 14.4902 3.67439 20.4157 3.16865C27.8809 3.06752 37.3437 2.44311 42.8112 2.86526C46.4994 2.71155 51.2717 2.75065 60.7275 2.62261C71.6764 2.47434 80.1455 2.40681 86.0192 2.81286C92.3081 3.24346 93.6022 3.10473 91.3412 2.20783Z' fill='%23daf412'/%3E%3C/svg%3E\")",
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    pointerEvents: 'none'
  },
  linkList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: '0.75rem 1.5rem',
    margin: 0,
    padding: 0,
    listStyle: 'none'
  },
  reveal: {
    opacity: {
      default: 0,
      '@media (prefers-reduced-motion: reduce)': 1
    },
    transform: {
      default: 'translateY(14px)',
      '@media (prefers-reduced-motion: reduce)': 'none'
    },
    animationName: {
      default: revealIn,
      '@media (prefers-reduced-motion: reduce)': null
    },
    animationDuration: '1.1s',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards'
  },
  copyReveal: {
    animationDelay: '0.25s'
  },
  linksReveal: {
    animationDelay: '0.55s'
  }
});

export const Route = createFileRoute('/')({
  ssr: true,
  component: Home
});

function Home() {
  return (
    <main {...stylex.props(styles.main)}>
      <section {...stylex.props(styles.content)}>
        <div {...stylex.props(styles.copy, styles.reveal, styles.copyReveal)}>
          <h1 {...stylex.props(styles.name)}>Ilham Mubarak // Aang</h1>
          <p {...stylex.props(styles.title)}>Product Engineer</p>
          <p {...stylex.props(styles.description)}>
            I build software, fast where it matters, polished where people
            notice.
          </p>
          <p {...stylex.props(styles.current)}>
            Currently at{' '}
            <a
              {...stylex.props(
                styles.link,
                styles.currentLink,
                styles.linkHover,
                styles.linkScribble
              )}
              href="https://zero-one-group.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Zero One Group
              <span {...stylex.props(styles.scribble)} aria-hidden="true" />
            </a>
            .
          </p>
        </div>

        <nav
          {...stylex.props(styles.links, styles.reveal, styles.linksReveal)}
          aria-label="Social links"
        >
          <ul {...stylex.props(styles.linkList)}>
            <li>
              <a
                {...stylex.props(
                  styles.link,
                  styles.socialLink,
                  styles.linkHover
                )}
                href="https://linkedin.com/in/milhamm"
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                {...stylex.props(
                  styles.link,
                  styles.socialLink,
                  styles.linkHover
                )}
                href="https://x.com/gluekol"
                target="_blank"
                rel="noreferrer noopener"
              >
                X
              </a>
            </li>
            <li>
              <a
                {...stylex.props(
                  styles.link,
                  styles.socialLink,
                  styles.linkHover
                )}
                href="https://github.com/milhamm"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
