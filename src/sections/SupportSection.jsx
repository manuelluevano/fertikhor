import facebookIcon from '../assets/facebook.svg'

// Vista: SupportSection resume los servicios de acompañamiento técnico.
const SupportSection = ({ support }) => (
  <section id="soporte" className="bg-[#eff6f0] px-4 py-16 sm:px-8">
    <div className="mx-auto max-w-6xl space-y-10">
      <header className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-highlight">Soporte</p>
        <h2 className="font-display text-3xl text-brand-primary">{support.title}</h2>
        <p className="mt-3 text-brand-ink/70">{support.description}</p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {support.services.map((service) => (
          <article key={service.name} className="rounded-3xl bg-white p-6 shadow-lg shadow-brand-primary/10">
            <h3 className="text-lg font-semibold text-brand-primary">{service.name}</h3>
            <p className="mt-3 text-sm text-brand-ink/80">{service.detail}</p>
          </article>
        ))}
      </div>
      <div className="rounded-3xl border border-brand-primary/20 bg-white p-6 text-center shadow-lg">
        <p className="text-sm uppercase tracking-[0.25em] text-brand-highlight">{support.contact.name}</p>
        <p className="mt-2 text-2xl font-semibold text-brand-primary">{support.contact.phone}</p>
        <p className="text-sm text-brand-ink/70">{support.contact.mail}</p>
        <a
          href="https://www.facebook.com/FERTIKHOR?locale=es_LA"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 px-4 py-2 text-sm font-semibold text-brand-primary transition hover:border-brand-highlight hover:text-brand-highlight"
        >
          <img src={facebookIcon} alt="" className="h-4 w-4" />
          Facebook
        </a>
      </div>
    </div>
  </section>
)

export default SupportSection
