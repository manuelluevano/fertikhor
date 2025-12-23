import { useState } from 'react'
import { Link } from 'react-router-dom'
import BrandLogo from '../components/BrandLogo'

import whatsappIcon from '../assets/whatsapp.svg'
import facebookIcon from '../assets/facebook.svg'
import baseInicio from '../assets/base inicio correcto.svg'
import nube from '../assets/nubef.png'

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
    <header className="relative bg-white text-brand-ink">
      <div className="relative mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-8">
        <nav className="flex flex-col gap-3 rounded-3xl border border-brand-primary/10 bg-white/90 px-4 py-3 shadow-lg backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-between gap-3">
            <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
              <BrandLogo className="h-16" />
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

        <div className="grid gap-6 py-16 lg:grid-cols-3 lg:items-center">
          <div className="space-y-3 text-center lg:col-span-2 lg:max-w-3xl lg:text-left lg:pr-6">
            <span className="text-sm uppercase tracking-[0.4em] text-brand-highlight/80">Ferti Khor</span>
            <h1 className="font-display text-4xl leading-tight text-brand-primary sm:text-5xl">
              {hero.title}
            </h1>
          </div>

          <div className="mx-auto flex w-full max-w-[320px] items-start justify-center gap-6 lg:justify-end">
            <img
              src={baseInicio}
              alt="FertiKhor producto"
              className="w-full max-w-[160px] object-contain"
              loading="lazy"
            />
            <div className="relative mt-[-10px] w-[120px] max-w-[130px]">
              <img src={nube} alt="" className="w-full object-contain" loading="lazy" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center space-y-1">
                <div className="text-[12px] font-semibold uppercase text-brand-primary leading-tight">15-20-10</div>
                <div className="text-[10px] font-semibold text-brand-ink/80 leading-tight">Para desarrollo vegetativo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeroSection
