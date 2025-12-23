import BrandLogo from '../components/BrandLogo'
import facebookIcon from '../assets/facebook.svg'
import whatsappIcon from '../assets/whatsapp.svg'

// Vista: FooterSection concentra la información de contacto y los enlaces de ayuda.
const FooterSection = ({ footer, brand }) => (
  <footer id="contacto" className="border-t border-brand-primary/10 bg-white text-brand-primary">
    <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-6 px-4 py-12 sm:px-8">
      <div className="space-y-3">
        <BrandLogo className="h-20 drop-shadow" />
        <p className="mt-4 text-sm text-brand-ink/70">{footer.contact.title}</p>
        <ul className="mt-3 space-y-1 text-sm text-brand-ink/80">
          {footer.contact.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/FERTIKHOR?locale=es_LA"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-primary/30 bg-white text-brand-primary transition hover:border-brand-highlight"
            aria-label="Facebook Ferti Khor"
          >
            <img src={facebookIcon} alt="" className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/523314025519"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-primary/30 bg-white text-brand-primary transition hover:border-brand-highlight"
            aria-label="WhatsApp 33 1402 5519"
          >
            <img src={whatsappIcon} alt="" className="h-4 w-4" />
          </a>
        </div>
      </div>
      {footer.columns.map((column) => (
        <div key={column.title} className="flex flex-col justify-center gap-2 text-left sm:items-start sm:text-left">
          <p className="font-display text-2xl text-brand-primary">{column.title}</p>
          <ul className="space-y-2 text-base text-brand-ink/80">
            {column.links.map((link) => (
              <li key={link} className="font-semibold uppercase tracking-wide text-brand-primary/80">
                {link}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </footer>
)

export default FooterSection
