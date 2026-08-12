import type { ReactNode } from 'react'

interface PortfolioShellProps {
  children: ReactNode
}

export function PortfolioShell({ children }: PortfolioShellProps) {
  return (
    <div className="portfolio-shell">
      <div className="portfolio-meta">
        <div className="portfolio-brand">SODA MUSIC</div>
        <div className="portfolio-kicker">SIMILAR VERSION DENOISING</div>
        <div className="portfolio-title">Interactive Product Prototype</div>
        <div className="portfolio-badge">Concept Prototype · Unofficial</div>
      </div>

      <div className="portfolio-device-wrap">{children}</div>

      <div className="portfolio-hint">Scroll or drag to switch tracks</div>
    </div>
  )
}
