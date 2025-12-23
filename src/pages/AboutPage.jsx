import { Link } from 'react-router-dom'
import { getAboutContent } from '../controllers/aboutController.js'
import BrandLogo from '../components/BrandLogo'

// Vista "Quiénes somos": replica el mensaje histórico y la estética de la etiqueta.
const AboutPage = () => {
  const about = getAboutContent()

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#f4f8f5] to-[#e9f3ea] text-brand-ink">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
        <div className="rounded-3xl border border-brand-primary/10 bg-white/90 p-6 shadow-xl shadow-brand-primary/10 backdrop-blur md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <Link to="/" className="flex items-center gap-3">
              <BrandLogo className="h-20" />
              <span className="sr-only">Ferti Khor</span>
            </Link>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/"
                className="rounded-full border border-brand-primary/30 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-primary transition hover:border-brand-highlight hover:text-brand-highlight"
              >
                Volver al inicio
              </Link>
              <Link
                to="/contacto"
                className="rounded-full bg-brand-highlight px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-brand-highlight/90"
              >
                Contacto
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-8 items-start lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-highlight">Quiénes somos</p>
              <h1 className="font-display text-4xl leading-tight text-brand-primary">{about.title}</h1>
              <div className="rounded-2xl border border-brand-primary/10 bg-white/80 p-6 shadow-sm">
                <p className="text-base text-brand-ink/80">{about.intro}</p>
                <p className="mt-3 text-base text-brand-ink/80">{about.guarantee}</p>
              </div>
              <ul className="space-y-3 text-sm font-semibold uppercase tracking-wide text-brand-primary">
                {about.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">✓</span>
                    <span className="text-brand-ink/80">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold text-brand-highlight">{about.gratitude}</p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-brand-primary/10 bg-brand-accent/60 p-6 shadow-inner">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-primary">Datos de la empresa</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-white/85 p-4 shadow">
                    <p className="text-xs uppercase tracking-wide text-brand-ink/60">Origen</p>
                    <p className="text-brand-primary font-semibold">México y Alemania</p>
                  </div>
                  <div className="rounded-xl bg-white/85 p-4 shadow">
                  <p className="text-xs uppercase tracking-wide text-brand-ink/60">Trayectoria</p>
                  <p className="text-brand-primary font-semibold">35 años formulando</p>
                </div>
                <div className="rounded-xl bg-white/85 p-4 shadow sm:col-span-2">
                  <p className="text-xs uppercase tracking-wide text-brand-ink/60">Enfoque</p>
                  <p className="text-brand-primary font-semibold">Productos de nutrición vegetal y protección vegetal.</p>
                </div>
              </div>
            </div>
              <div className="rounded-2xl border border-brand-primary/10 bg-white p-6 shadow-lg shadow-brand-primary/10">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-highlight">Nuestro compromiso</p>
                <p className="mt-3 text-sm text-brand-ink/80">
                  Acompañamos a productores con formulaciones probadas, soporte en campo y entrega rápida para cada etapa
                  del cultivo.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-end gap-3 rounded-2xl border border-brand-primary/10 bg-white/70 p-5">
            <Link
              to="/contacto"
              className="rounded-full bg-brand-primary px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-brand-primary/90"
            >
              Hablar con un asesor
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
