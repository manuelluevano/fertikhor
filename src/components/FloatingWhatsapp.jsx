import whatsappIcon from '../assets/whatsapp.svg'

// Botón flotante de WhatsApp que aparece en toda la app.
const phone = '3314025519'
const whatsappLink = `https://wa.me/52${phone}`

const FloatingWhatsapp = () => (
  <a
    href={whatsappLink}
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-6 right-4 z-50 inline-flex items-center rounded-full bg-white/90 p-3 text-brand-primary shadow-lg shadow-brand-highlight/60 transition hover:scale-105 md:right-8"
    aria-label="WhatsApp 33 1402 5519"
  >
    <img src={whatsappIcon} alt="" className="h-6 w-6" />
  </a>
)

export default FloatingWhatsapp
