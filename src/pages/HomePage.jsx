import HeroSection from '../sections/HeroSection'
import ValueSection from '../sections/ValueSection'
import SolutionsSection from '../sections/SolutionsSection'
import InnovationSection from '../sections/InnovationSection'
import ProductSection from '../sections/ProductSection'
import CTASection from '../sections/CTASection'
import FooterSection from '../sections/FooterSection'
import { getLandingContent } from '../controllers/landingController.js'

// Página Home: orquesta las secciones principales usando la data del controlador.
const HomePage = () => {
  const content = getLandingContent()

  return (
    <main className="bg-transparent text-brand-ink">
      <HeroSection hero={content.hero} brand={content.brand} navLinks={content.navLinks} />
      <ValueSection values={content.values} />
      <SolutionsSection solutions={content.solutions} />
      <InnovationSection innovation={content.innovation} />
      <ProductSection products={content.products} />
      <CTASection cta={content.cta} />
      <FooterSection footer={content.footer} brand={content.brand} />
    </main>
  )
}

export default HomePage
