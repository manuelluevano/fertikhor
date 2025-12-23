import { Link } from 'react-router-dom'
import { getContactContent } from '../controllers/contactController.js'
import BrandLogo from '../components/BrandLogo'

// Vista Contacto: muestra los distintos medios de contacto y un recordatorio de ubicación.
const ContactPage = () => {
  const contact = getContactContent()

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#f4f8f5] to-[#e9f3ea] text-brand-ink">
      {/* Hero con logo legible y acciones rápidas */}
      <header className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-8">
        <div className="rounded-3xl border border-brand-primary/10 bg-white/90 p-6 shadow-xl shadow-brand-primary/10 backdrop-blur">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <Link to="/" className="flex items-center gap-3">
              <BrandLogo className="h-20" />
              <span className="sr-only">Ferti Khor</span>
            </Link>
            <div className="flex flex-wrap gap-3" />
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-highlight">Contacto directo</p>
              <h1 className="font-display text-4xl leading-tight text-brand-primary">{contact.headline}</h1>
              <p className="text-brand-ink/80">{contact.description}</p>
              <div className="space-y-3">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="https://wa.me/523314025519"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-brand-primary/90"
                  >
                    WhatsApp 33 1402 5519
                  </a>
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center rounded-full border border-brand-highlight px-5 py-3 text-xs font-semibold uppercase tracking-wide text-brand-highlight transition hover:bg-brand-highlight/10"
                  >
                    Ir al inicio
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-brand-primary/10 bg-brand-accent/50 p-6 shadow-inner">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-primary">Cobertura</p>
              <p className="mt-3 text-sm text-brand-ink/80">
                Respuesta en menos de 24 h. Enviamos a toda la República Mexicana y damos soporte en campo para nutrición vegetal y protección vegetal.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl bg-white/80 p-4 shadow">
                  <p className="text-xs uppercase tracking-wide text-brand-ink/60">Celular</p>
                  <p className="text-brand-primary font-semibold">{contact.phones.mobile}</p>
                </div>
                <div className="rounded-xl bg-white/80 p-4 shadow">
                  <p className="text-xs uppercase tracking-wide text-brand-ink/60">Oficina</p>
                  <p className="text-brand-primary font-semibold">{contact.phones.office}</p>
                </div>
                <div className="rounded-xl bg-white/80 p-4 shadow col-span-2">
                  <p className="text-xs uppercase tracking-wide text-brand-ink/60">Ubicación</p>
                  <p className="text-brand-primary font-semibold">{contact.location}</p>
                  <p className="text-xs text-brand-ink/60">Zapopan, Jalisco · Citas previa coordinación</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Tarjetas de contacto */}
      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 sm:px-8">
        <article className="rounded-2xl border border-brand-primary/10 bg-white p-6 shadow-lg shadow-brand-primary/10">
          <h2 className="font-display text-2xl text-brand-primary">Correos electrónicos</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-brand-ink/80">
            {contact.emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="flex items-center justify-between rounded-xl border border-brand-primary/10 bg-brand-accent/50 px-4 py-3 font-semibold text-brand-primary transition hover:border-brand-highlight"
              >
                <span>{email}</span>
                <span className="text-[11px] uppercase tracking-wide text-brand-highlight">Enviar correo</span>
              </a>
            ))}
          </div>
        </article>
      </section>
    </main>
  )
}

export default ContactPage
