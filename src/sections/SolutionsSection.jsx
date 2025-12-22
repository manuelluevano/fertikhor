// Vista: SolutionsSection presenta las líneas principales de negocio.
const SolutionsSection = ({ solutions }) => (
  <section id="soluciones" className="bg-white/80 px-4 py-16 sm:px-8">
    <div className="mx-auto max-w-6xl space-y-8">
      <header className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-highlight">Soluciones</p>
        <h2 className="font-display text-3xl text-brand-primary">{solutions.title}</h2>
        <p className="mt-3 text-brand-ink/70">{solutions.description}</p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {solutions.items.map((item) => (
          <article
            key={item.name}
            className="flex flex-col rounded-3xl border border-brand-primary/15 bg-[#f7fbf7] p-6 shadow-lg shadow-brand-primary/10"
          >
            <h3 className="text-xl font-semibold text-brand-primary">{item.name}</h3>
            <p className="mt-3 flex-1 text-sm text-brand-ink/80">{item.details}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default SolutionsSection
