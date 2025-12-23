import { useState } from 'react'

// Vista: ProductSection lista los fertilizantes destacados y su información clave.
const ProductSection = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const message = (name) => encodeURIComponent(`Hola, me interesa cotizar ${name}`)

  return (
    <section id="productos" className="mx-auto max-w-6xl px-4 py-16 sm:px-8">
      <header className="space-y-3 text-center">
        <p className="text-brand-highlight tracking-[0.3em] uppercase text-xs">Línea profesional</p>
        <h2 className="font-display text-3xl text-brand-primary">Soluciones nutricionales</h2>
      </header>
      <div className="mt-10 grid gap-6 rounded-3xl bg-white/90 p-4 shadow-xl sm:p-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          const whatsappUrl = `https://wa.me/523314025519?text=${message(product.name)}`
          return (
            <article
              key={product.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-brand-primary/15 bg-white shadow-lg shadow-brand-primary/20"
            >
              <button
                type="button"
                className="group flex h-60 items-center justify-center bg-brand-accent/40 p-6 sm:h-72"
                onClick={() => setSelectedProduct(product)}
                aria-label={`Ver ${product.name} en grande`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-auto object-contain transition duration-200 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </button>
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

      {selectedProduct ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen de ${selectedProduct.name}`}
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-brand-primary/20 bg-white text-brand-primary shadow hover:border-brand-highlight"
              onClick={() => setSelectedProduct(null)}
              aria-label="Cerrar imagen"
            >
              ✕
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="mx-auto max-h-[75vh] w-full object-contain"
            />
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default ProductSection
