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
    title: 'Somos FertiKhor, fábrica química industrial de fertilizantes de alta concentración y asimilación.',
    subtitle: '',
    primaryAction: { label: '', href: '' },
    secondaryAction: { label: '', href: '' }
  },
  values: [
    {
      title: 'Fórmulas concentradas',
      description: 'Nutrientes y formulaciones en alta concentración y asimilación.'
    },
    {
      title: 'Compatibilidad probada',
      description: 'Ensayos constantes en fertirriego y aplicaciones foliares para garantizar seguridad en resultados.'
    },
    {
      title: 'Soporte agronómico',
      description: 'Acompañamiento de campo para ajustar dosis, horarios y etapas fenológicas clave.'
    }
  ],
  solutions: {
    title: 'Soluciones para cada etapa',
    description: 'Programas arranqué, desarrollo, floración, llenado y calidad final.',
    items: [
      {
        name: 'Arranque y desarrollo',
        details: 'Producimos enraizadores sólidos y líquidos, arrancadores y formulaciones para desarrollo vegetativo.',
        tags: []
      },
      {
        name: 'Floración y cuaje',
        details: 'Calcio, boro, molibdeno y fosfitos sistémicos para amarre uniforme y defensa natural.',
        tags: []
      },
      {
        name: 'Llenado y calidad',
        details: 'Potasio, silicio y micronutrientes que elevan grados Brix, firmeza y apariencia comercial.',
        tags: []
      }
    ]
  },
  innovation: {
    title: 'FERTILIZANTES FERTI-KHOR',
    description: '',
    highlights: []
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
    title: 'Un nuevo concepto en fertilización.',
    description: '',
    button: 'Hablar con un asesor'
  },
  footer: {
    contact: {
      title: 'Contacto',
      details: ['berumen.8a@gmail.com', 'efrén_8a@hotmail.com', 'Tel: +52 33 1402 5519']
    },
    columns: [
      {
        title: 'SOMOS TU MEJOR OPCIÓN',
        links: ['Para distribuidores (agroquímicas) y agricultores.']
      }
    ]
  }
}
