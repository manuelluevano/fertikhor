import historia from '../assets/historia.png'

// Vista: InnovationSection comunica el trabajo de I+D.
const InnovationSection = ({ innovation }) => (
  <section id="innovacion" className="px-4 py-16 sm:px-8">
    <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-[32px] bg-white px-4 py-10 shadow-xl sm:px-10 lg:grid-cols-2">
      <div className="space-y-4 text-left">
        <h2 className="font-display text-3xl text-brand-primary">{innovation.title}</h2>
        {innovation.description ? <p className="text-brand-ink/80">{innovation.description}</p> : null}
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-brand-primary/10 bg-white shadow-lg">
          <img
            src={historia}
            alt="FertiKhor 35 años de trayectoria"
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
)

export default InnovationSection
