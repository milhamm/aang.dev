import { ClientOnly, createLazyFileRoute } from '@tanstack/react-router'
import { useEffect, useState, type ReactNode } from 'react'

export const Route = createLazyFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <ClientOnly fallback={<Hero />}>
      <Hero withShader />
    </ClientOnly>
  )
}

function HeroContent() {
  return (
    <section className="hero-content">
      <div className="hero-copy reveal">
        <h1 className="hero-name">Ilham Mubarak // Aang</h1>
        <p className="hero-title">Product Engineer</p>
        <p className="hero-description">I build software.</p>
        <p className="hero-current">
          Currently at{' '}
          <a
            className="hero-link-scribble"
            href="https://zero-one-group.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Zero One Group
          </a>
          .
        </p>
      </div>

      <nav className="hero-links reveal" aria-label="Social links">
        <ul>
          <li>
            <a href="https://linkedin.com/in/milhamm" target="_blank" rel="noreferrer noopener">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://x.com/gluekol" target="_blank" rel="noreferrer noopener">
              X
            </a>
          </li>
          <li>
            <a href="https://github.com/milhamm" target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}

function Hero({ withShader = false }: { withShader?: boolean }) {
  return (
    <main className="hero">
      {withShader ? <ShaderMount /> : null}
      <HeroContent />
    </main>
  )
}

function ShaderMount() {
  const [shader, setShader] = useState<ReactNode>(null)

  useEffect(() => {
    void import('#/components/glass-agency-hero/shader-background.client').then(
      ({ ShaderBackground }) => {
        setShader(<ShaderBackground />)
      }
    )
  }, [])

  return shader
}
