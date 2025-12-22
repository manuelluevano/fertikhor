// Vista: ValueSection destaca los pilares estratégicos de la marca.
const ValueSection = ({ values }) => (
  <section className="mx-auto max-w-6xl px-4 py-16 sm:px-8">
    <div className="grid gap-6 md:grid-cols-3">
      {values.map((value) => (
        <article
          key={value.title}
          className="rounded-3xl border border-brand-primary/15 bg-white p-6 shadow-lg shadow-brand-primary/10"
        >
          <h3 className="text-xl font-semibold text-brand-primary">{value.title}</h3>
          <p className="mt-3 text-sm text-brand-ink/80">{value.description}</p>
        </article>
      ))}
    </div>
  </section>
)

export default ValueSection
