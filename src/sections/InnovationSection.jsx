import portada from '../assets/portada.png'

// Vista: InnovationSection comunica el trabajo de I+D con apoyo visual.
const InnovationSection = ({ innovation }) => (
  <section id="innovacion" className="px-4 py-16 sm:px-8">
    <div className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-[32px] bg-white shadow-xl lg:grid-cols-2">
      <div className="p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-highlight">I+D</p>
        <h2 className="mt-2 font-display text-3xl text-brand-primary">{innovation.title}</h2>
        <p className="mt-4 text-brand-ink/80">{innovation.description}</p>
        <ul className="mt-6 space-y-3 text-sm text-brand-primary">
          {innovation.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-highlight" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex h-full w-full items-center justify-center rounded-[32px] border-l border-brand-primary/10 bg-white p-6">
        <img
          src={portada}
          alt="Ensayos de campo Ferti Khor"
          className="max-h-[380px] w-full object-contain drop-shadow-xl"
          loading="lazy"
        />
      </div>
    </div>
  </section>
)

export default InnovationSection
