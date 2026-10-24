import { useEffect, useMemo, useState } from 'react';
import { LanguageContext } from './languageContext';

const translations = {
  ES: {
    'language.change': 'Cambiar idioma',
    'menu.open': 'Abrir menú',
    'menu.close': 'Cerrar menú',
    'nav.catalog': 'Catálogo',
    'nav.customization': 'Personalización',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'header.shipping': 'Envíos a todo Estados Unidos',
    'header.support': 'Atención al cliente',
    'header.distributors': 'Distribuidores',
    'header.search': 'Buscar botas, cascos, uniformes...',
    'header.sales': 'Ventas',
    'hero.title': 'Dotación, seguridad y vestuario para tu empresa',
    'hero.description':
      'Productos de protección, ropa de trabajo, prendas deportivas y personalización textil.',
    'hero.cta': 'Ver catálogo',
    'stats.experience': 'años de experiencia',
    'stats.businesses': 'empresas atendidas',
    'stats.coverage': 'estados con cobertura',
    'stats.delivery': 'pedidos entregados a tiempo',
    'catalog.title': 'Explora el catálogo',
    'catalog.description': 'Encuentra lo que necesitas por categoría',
    'catalog.products': 'productos',
    'catalog.filter': 'Filtrar productos por categoría',
    'catalog.all': 'Todas',
    'product.view': 'Ver producto',
    'product.back': 'Volver al catálogo',
    'product.description.title': 'Descripción',
    'product.description.helmets':
      'Este modelo forma parte de nuestra selección de cascos de seguridad. Consulta con nuestro equipo las opciones disponibles y cuál se adapta mejor a las necesidades de tu trabajo.',
    'product.description.jackets':
      'Esta prenda forma parte de nuestra selección de chaquetas y sudaderas para el trabajo. Contáctanos para conocer disponibilidad, tallas y opciones.',
    'product.description.vests':
      'Este modelo forma parte de nuestra selección de chalecos para el trabajo. Contáctanos para conocer disponibilidad, tallas y opciones.',
    'product.description.shirts':
      'Esta prenda forma parte de nuestra selección de camisetas y prendas de manga larga. Contáctanos para conocer disponibilidad, tallas y opciones.',
    'product.description.hats':
      'Este artículo forma parte de nuestra selección de gorros y accesorios para la cabeza. Contáctanos para conocer disponibilidad y opciones.',
    'product.description.gloves':
      'Este modelo forma parte de nuestra selección de guantes para el trabajo. Contáctanos para conocer disponibilidad y opciones.',
    'product.inquire': 'Consultar disponibilidad',
    'product.notFound': 'No encontramos este producto.',
    'category.helmets': 'Cascos',
    'category.jackets': 'Chaquetas y sudaderas',
    'category.vests': 'Chalecos',
    'category.shirts': 'Camisetas y manga larga',
    'category.hats': 'Gorros y sombreros',
    'category.gloves': 'Guantes',
    'coverage.title': 'Nuestra ubicación',
    'coverage.description':
      'J&R Safety Wear LLC está ubicada en Aurora, Colorado, donde ofrecemos productos de seguridad industrial y ropa de trabajo.',
    'coverage.main': 'Ubicación principal',
    'coverage.unknown': 'Sin información de cobertura',
    'about.title': 'Acerca de J&R Safety Wear',
    'about.description':
      'J&R Safety Wear LLC ofrece ropa de seguridad y prendas de trabajo a clientes en Aurora, Colorado. Estamos en La Plaza Colorado y también en Mile High Flea Market.',
    'about.quality': 'Calidad',
    'about.commitment': 'Compromiso',
    'about.trust': 'Confianza',
    'about.service': 'Servicio',
    'about.locations': 'Nuestras ubicaciones',
    'footer.description':
      'Seguridad industrial, ropa de trabajo y vestuario para empresas y organizaciones.',
    'footer.categories': 'Categorías',
    'footer.contact': 'Contacto',
    'footer.locations': 'Ubicaciones',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.terms': 'Términos y condiciones',
    'footer.privacy': 'Política de privacidad',
  },
  EN: {
    'language.change': 'Change language',
    'menu.open': 'Open menu',
    'menu.close': 'Close menu',
    'nav.catalog': 'Catalog',
    'nav.customization': 'Customization',
    'nav.about': 'About us',
    'nav.contact': 'Contact',
    'header.shipping': 'Shipping across the United States',
    'header.support': 'Customer support',
    'header.distributors': 'Distributors',
    'header.search': 'Search boots, helmets, uniforms...',
    'header.sales': 'Sales',
    'hero.title': 'Workwear, safety gear and uniforms for your business',
    'hero.description':
      'Protective gear, workwear, sportswear and custom apparel.',
    'hero.cta': 'Browse catalog',
    'stats.experience': 'years of experience',
    'stats.businesses': 'businesses served',
    'stats.coverage': 'states covered',
    'stats.delivery': 'on-time deliveries',
    'catalog.title': 'Explore the catalog',
    'catalog.description': 'Find what you need by category',
    'catalog.products': 'products',
    'catalog.filter': 'Filter products by category',
    'catalog.all': 'All',
    'product.view': 'View product',
    'product.back': 'Back to catalog',
    'product.description.title': 'Description',
    'product.description.helmets':
      'This model is part of our selection of safety helmets. Contact our team to check availability and find the right option for your work needs.',
    'product.description.jackets':
      'This item is part of our selection of work jackets and hoodies. Contact us for availability, sizing and options.',
    'product.description.vests':
      'This model is part of our selection of work vests. Contact us for availability, sizing and options.',
    'product.description.shirts':
      'This item is part of our selection of shirts and long-sleeve apparel. Contact us for availability, sizing and options.',
    'product.description.hats':
      'This item is part of our selection of hats and headwear accessories. Contact us for availability and options.',
    'product.description.gloves':
      'This model is part of our selection of work gloves. Contact us for availability and options.',
    'product.inquire': 'Ask about availability',
    'product.notFound': 'We could not find this product.',
    'category.helmets': 'Helmets',
    'category.jackets': 'Jackets & hoodies',
    'category.vests': 'Safety vests',
    'category.shirts': 'Shirts & long sleeves',
    'category.hats': 'Hats & headwear',
    'category.gloves': 'Gloves',
    'coverage.title': 'Our location',
    'coverage.description':
      'J&R Safety Wear LLC is based in Aurora, Colorado, where we offer industrial safety gear and workwear.',
    'coverage.main': 'Main location',
    'coverage.unknown': 'Coverage information unavailable',
    'about.title': 'About J&R Safety Wear',
    'about.description':
      'J&R Safety Wear LLC provides safety wear and work clothing for customers in Aurora, Colorado. We are located at La Plaza Colorado and also have a location at Mile High Flea Market.',
    'about.quality': 'Quality',
    'about.commitment': 'Commitment',
    'about.trust': 'Trust',
    'about.service': 'Service',
    'about.locations': 'Our locations',
    'footer.description':
      'Industrial safety gear and workwear for businesses and organizations.',
    'footer.categories': 'Categories',
    'footer.contact': 'Contact',
    'footer.locations': 'Locations',
    'footer.rights': 'All rights reserved.',
    'footer.terms': 'Terms and conditions',
    'footer.privacy': 'Privacy policy',
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    () => (window.localStorage.getItem('site-language') === 'EN' ? 'EN' : 'ES'),
  );

  useEffect(() => {
    window.localStorage.setItem('site-language', language);
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key) => translations[language][key] ?? key,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
