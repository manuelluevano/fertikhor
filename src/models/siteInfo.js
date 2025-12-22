// Modelo: Contiene toda la información textual del landing inspirado en Haifa Group.
export const siteInfo = {
  brand: 'Ferti Khor',
  navLinks: [
    { label: 'INICIO', href: '/' },
    { label: 'Productos', href: '#productos' },
    { label: 'Contacto', href: '/contacto' },
    { label: 'Quiénes somos', href: '/quienes-somos' }
  ],
  hero: {
    title: 'Fertilizantes foliares y de fertirriego que suben tu rendimiento',
    subtitle:
      'Portafolio completo con fórmulas concentradas, correctores y coadyuvantes listos para campo abierto, invernadero y berries. Respuestas visibles en 48 h y soporte agronómico directo.',
    primaryAction: { label: 'Cotizar ahora', href: '/contacto' },
    secondaryAction: { label: '', href: '' }
  },
  values: [
    {
      title: 'Fórmulas concentradas',
      description: 'Nutrientes y coadyuvantes en alta concentración para menos pasadas y mejores mezclas.'
    },
    {
      title: 'Compatibilidad probada',
      description: 'Ensayos constantes en fertirriego y aplicaciones foliares para garantizar seguridad en tanque.'
    },
    {
      title: 'Soporte agronómico',
      description: 'Acompañamiento de campo para ajustar dosis, horarios y etapas fenológicas clave.'
    }
  ],
  solutions: {
    title: 'Soluciones para cada etapa',
    description: 'Programas foliares y de fertirriego para raíces, crecimiento, floración, llenado y calidad final.',
    items: [
      {
        name: 'Arranque y raíces',
        details: 'Enraizadores, fósforo disponible y humus líquidos para plántula vigorosa y suelo suelto.',
        tags: ['Trasplante', 'Siembra directa']
      },
      {
        name: 'Floración y cuaje',
        details: 'Calcio, boro, molibdeno y fosfitos sistémicos para amarre uniforme y defensa natural.',
        tags: ['Floración', 'Cuajado']
      },
      {
        name: 'Llenado y calidad',
        details: 'Potasio, silicio y micronutrientes que elevan grados Brix, firmeza y apariencia comercial.',
        tags: ['Llenado', 'Calidad']
      }
    ]
  },
  innovation: {
    title: 'Foliares tapatíos probados en campo',
    description:
      'Ferti Khor es una línea de fertilizantes foliares líquidos de alta concentración, creada en Guadalajara y aplicada sobre hoja para corregir deficiencias rápido. Probamos cada lote para que disuelva fácil, mezcle seguro y mejore consistencia, calidad y tamaño de frutos y granos.',
    highlights: ['Alta concentración N-P-K (ej. 15-20-10)', 'Absorción foliar rápida', 'Origen tapatío con pruebas en campo']
  },
  support: {
    title: 'Soporte simple y directo',
    description: 'Te ayudamos a elegir el producto correcto, la dosis y la mezcla segura sin rodeos.',
    services: [
      {
        name: 'Diagnóstico nutrimental',
        detail: 'Interpretamos tus análisis y te decimos qué aplicar y cuánto.'
      },
      { name: 'Aplicación', detail: 'Recomendamos horarios, boquillas y compatibilidad en tanque.' },
      { name: 'Entrega', detail: 'Enviamos rápido y con lotes consistentes para no parar tu programa.' }
    ],
    contact: {
      name: 'Línea directa de asesores foliares',
      phone: '+52 33 1402 5519',
      mail: 'soporte@fertikhor.com'
    }
  },
  news: {
    title: 'En campo con Ferti Khor',
    articles: [
      {
        title: 'Resultados en berries bajo macro túnel',
        date: 'Mayo 2025',
        summary: 'Silicio, calcio y fosfitos lograron mayor firmeza y mejor color en frambuesa.'
      },
      {
        title: 'Fertirriego con potasio eleva grados Brix en melón',
        date: 'Abril 2025',
        summary: 'Productores de la costa reportaron más dulzor y peso uniforme con aplicaciones semanales.'
      }
    ]
  },
  cta: {
    title: 'Arma tu programa foliar y de fertirriego hoy',
    description: 'Cuéntanos cultivo, etapa y sistema de riego para enviarte dosis, frecuencias y mezclas seguras.',
    button: 'Hablar con un asesor'
  },
  footer: {
    contact: {
      title: 'Contacto',
      details: ['berumen.8a@gmail.com', 'soporte@fertikhor.com', 'Tel: +52 33 1402 5519']
    },
    columns: [
      { title: 'Soluciones', links: ['Foliares', 'Fertirriego', 'Correctores'] },
      { title: 'Recursos', links: ['Casos de éxito', 'Guías de mezcla', 'Programas por cultivo'] },
      { title: 'Empresa', links: ['Quiénes somos', 'Contacto', 'Distribuidores'] }
    ]
  }
}
