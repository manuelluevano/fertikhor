// Vista: ProductSection lista los fertilizantes destacados y su información clave.
const ProductSection = ({ products }) => (
  <section id="productos" className="mx-auto max-w-6xl px-4 py-16 sm:px-8">
    <header className="space-y-3 text-center">
      <p className="text-brand-highlight tracking-[0.3em] uppercase text-xs">Línea profesional</p>
      <h2 className="font-display text-3xl text-brand-primary">Soluciones nutricionales</h2>
    </header>
    <div className="mt-10 grid gap-6 rounded-3xl bg-white/90 p-6 shadow-xl md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const message = encodeURIComponent(`Hola, me interesa cotizar ${product.name}`);
        const whatsappUrl = `https://wa.me/523314025519?text=${message}`;
        return (
          <article
            key={product.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-brand-primary/15 bg-white shadow-lg shadow-brand-primary/20"
          >
            <div className="flex h-72 items-center justify-center bg-brand-accent/40 p-6">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-auto object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="font-display text-xl text-brand-primary">{product.name}</h3>
              <p className="text-sm text-brand-ink/80 flex-1">{product.description}</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex self-start rounded-full border border-brand-highlight px-4 py-2 text-xs uppercase tracking-wide text-brand-highlight transition hover:bg-brand-highlight/10"
                aria-label={`Cotizar ${product.name} por WhatsApp`}
              >
                Cotizar
              </a>
            </div>
          </article>
        )
      })}
    </div>
  </section>
)

export default ProductSection
