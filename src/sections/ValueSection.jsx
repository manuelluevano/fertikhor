// Vista: ValueSection destaca los pilares estratégicos de la marca.
const ValueSection = ({ values }) => (
  <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-8">
    <div
      className="absolute inset-x-0 top-6 h-40 rounded-full bg-gradient-to-r from-brand-primary/15 via-brand-primary/10 to-transparent blur-3xl"
      aria-hidden="true"
    />
    <article className="relative overflow-hidden rounded-3xl border border-brand-primary/15 bg-white/90 p-8 shadow-xl shadow-brand-primary/15 backdrop-blur sm:p-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="whitespace-nowrap text-6xl font-extrabold leading-tight text-brand-ink sm:text-7xl lg:text-8xl">
          Gana más
        </h2>
        <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-brand-primary/30 via-brand-primary/20 to-transparent" />
      </div>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {values.map((value) => (
          <li
            key={value.title}
            className="flex items-center gap-3 rounded-2xl border border-brand-primary/10 bg-brand-primary/5 px-4 py-3 text-base text-brand-ink"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-semibold text-brand-primary shadow-sm shadow-brand-primary/15">
              •
            </span>
            <span className="leading-snug">{value.title}</span>
          </li>
        ))}
      </ul>
    </article>
  </section>
)

export default ValueSection
