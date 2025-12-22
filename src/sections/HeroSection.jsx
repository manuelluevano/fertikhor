import { useState } from 'react'
import { Link } from 'react-router-dom'
import BrandLogo from '../components/BrandLogo'

import whatsappIcon from '../assets/whatsapp.svg'
import facebookIcon from '../assets/facebook.svg'

const FACEBOOK_URL = 'https://www.facebook.com/FERTIKHOR?locale=es_LA'
const WHATSAPP_URL = 'https://wa.me/523314025519'

const navClass =
  'rounded-full border border-transparent px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary transition hover:border-brand-highlight hover:text-brand-highlight'

const NavLink = ({ href, children, onClick }) =>
  href.startsWith('#') ? (
    <a href={href} className={navClass} onClick={onClick}>
      {children}
    </a>
  ) : (
    <Link to={href} className={navClass} onClick={onClick}>
      {children}
    </Link>
  )

const ActionLink = ({ href, className, children }) =>
  href.startsWith('#') ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <Link to={href} className={className}>
      {children}
    </Link>
  )

// Vista: HeroSection presenta navegación, claim central y métricas principales.
const HeroSection = ({ hero, brand, navLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="relative text-brand-ink">
      <div className="absolute inset-0 bg-hero-crops bg-cover bg-center" aria-hidden="true" />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-8 sm:px-8">
        <nav className="flex flex-col gap-3 rounded-3xl bg-white/85 px-4 py-3 shadow-lg backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-between gap-3">
            <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
              <BrandLogo className="h-10" />
              <span className="sr-only">{brand}</span>
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-primary/20 bg-white text-brand-primary shadow-sm transition hover:border-brand-highlight hover:text-brand-highlight sm:hidden"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <span className="block h-0.5 w-5 rounded bg-current" />
              <span className="sr-only">Menú</span>
            </button>
          </div>
          <div
            className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end ${
              menuOpen ? 'flex' : 'hidden sm:flex'
            }`}
          >
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href} onClick={closeMenu}>
                {link.label}
              </NavLink>
            ))}
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-primary/30 bg-white text-brand-primary transition hover:border-brand-highlight"
              aria-label="Facebook Ferti Khor"
              onClick={closeMenu}
            >
              <img src={facebookIcon} alt="" className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-primary/30 bg-white text-brand-primary transition hover:border-brand-highlight"
              aria-label="WhatsApp 33 1402 5519"
              onClick={closeMenu}
            >
              <img src={whatsappIcon} alt="" className="h-4 w-4" />
            </a>
          </div>
        </nav>

        <div className="mt-auto max-w-3xl space-y-6 pb-16 pt-20 text-white">
          <span className="text-sm uppercase tracking-[0.4em] text-white/70">Ferti Khor</span>
          <h1 className="font-display text-4xl leading-tight sm:text-5xl">{hero.title}</h1>
          <p className="text-lg text-white/85">{hero.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <ActionLink
              href={hero.primaryAction.href}
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-primary transition hover:scale-105"
            >
              {hero.primaryAction.label}
            </ActionLink>
            {hero.secondaryAction?.label && hero.secondaryAction?.href ? (
              <ActionLink
                href={hero.secondaryAction.href}
                className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
              >
                {hero.secondaryAction.label}
              </ActionLink>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeroSection
