import ogImageSrc from '@images/social.png';

export const SITE = {
  title: 'Fills de Rocha i López - Maquinaria y Generadores',
  tagline: 'Reparación, venta y automatización en Hospitalet',
  description:
    'Especialistas en reparación, venta y automatización de generadores, maquinaria de obra pública y jardinería. Más de 50 años de experiencia en Hospitalet ofreciendo confianza y calidad.',
  description_short:
    'Reparación y automatización de generadores y maquinaria en Hospitalet con 50 años de experiencia.',
  url: 'https://fillsrocha.com',
  author: 'Fills de Rocha i López',
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: 'es-ES',
    '@id': SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      '@type': 'WebSite',
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: 'es_ES',
  type: 'website',
  url: SITE.url,
  title: `${SITE.title} | Reparación y Automatización de Maquinaria`,
  description:
    'Fills de Rocha i López, líderes en reparación y automatización de generadores y maquinaria en Hospitalet. Confianza y calidad desde 1966.',
  image: ogImageSrc,
};
