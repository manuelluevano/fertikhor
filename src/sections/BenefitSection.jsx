// Vista: BenefitSection muestra un statement destacado previo a Soluciones.
const BenefitSection = ({ text }) => (
  <section className="mt-0 mb-10 bg-gradient-to-r from-brand-primary/10 via-white to-brand-primary/10 px-4 pt-0 pb-10 sm:mt-0 sm:mb-14 sm:px-8 sm:pt-0">
    <div className="mx-auto w-full max-w-7xl rounded-3xl border border-brand-primary/15 bg-white/90 px-6 py-4 shadow-lg shadow-brand-primary/10 sm:px-10 sm:py-6 flex items-center justify-center text-center">
      <p className="text-center text-4xl font-extrabold leading-tight text-brand-ink sm:text-5xl lg:text-6xl">
        {text}
      </p>
    </div>
  </section>
)

export default BenefitSection
