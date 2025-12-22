// Vista: NewsSection comparte artículos y lanzamientos recientes.
const NewsSection = ({ news }) => (
  <section className="px-4 py-16 sm:px-8">
    <div className="mx-auto max-w-6xl space-y-8">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-highlight">Blog técnico</p>
          <h2 className="font-display text-3xl text-brand-primary">{news.title}</h2>
        </div>
        <a href="#contacto" className="text-sm font-semibold text-brand-highlight hover:underline">
          Ver calendario de eventos
        </a>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {news.articles.map((article) => (
          <article key={article.title} className="rounded-3xl border border-brand-primary/15 bg-white p-6 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-highlight">{article.date}</p>
            <h3 className="mt-2 text-xl font-semibold text-brand-primary">{article.title}</h3>
            <p className="mt-3 text-sm text-brand-ink/80">{article.summary}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default NewsSection
