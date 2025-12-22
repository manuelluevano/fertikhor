import { Link } from 'react-router-dom'

// Vista: CTASection invita a solicitar un programa personalizado.
const CTASection = ({ cta }) => (
  <section className="px-4 py-20 sm:px-8">
    <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-[32px] bg-gradient-to-r from-brand-primary to-emerald-500 px-8 py-12 text-white shadow-2xl lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h2 className="font-display text-3xl">{cta.title}</h2>
        <p className="mt-3 max-w-2xl text-white/90">{cta.description}</p>
      </div>
      <Link
        to="/contacto"
        className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-primary transition hover:scale-105"
      >
        {cta.button}
      </Link>
    </div>
  </section>
)

export default CTASection
