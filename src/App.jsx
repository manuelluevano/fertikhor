import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import FloatingWhatsapp from './components/FloatingWhatsapp'

// App actúa como punto de entrada que delega la UI a cada página según la ruta.
const App = () => (
  <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/soluciones" element={<HomePage />} />
      <Route path="/investigacion" element={<HomePage />} />
      <Route path="/productos" element={<HomePage />} />
      <Route path="/contacto" element={<ContactPage />} />
      <Route path="/quienes-somos" element={<AboutPage />} />
    </Routes>
    <FloatingWhatsapp />
  </>
)

export default App
 
