import botasSeguridad from '../assets/Botas de seguridad negras con punta reforzada.png';
import camisaMangaCorta from '../assets/Camisa industrial manga corta.png';
import camisaMangaLarga from '../assets/Camisa industrial manga larga.png';
import camisetaDry from '../assets/Camiseta deportiva dry.png';
import camisetaDeportivaNegra from '../assets/Camiseta deportiva negra.png';
import camisetaPersonalizada from '../assets/Camiseta personalizada con logo empresarial.png';
import cascoAmarillo from '../assets/Casco de seguridad amarillo.png';
import cascoBlanco from '../assets/Casco de seguridad blanco.png';
import chalecoAmarillo from '../assets/Chaleco reflectivo amarillo.png';
import chalecoNaranja from '../assets/Chaleco reflectivo naranja.png';
import chaquetaImpermeable from '../assets/Chaqueta impermeable de trabajo.png';
import conjuntoDeportivo from '../assets/Conjunto deportivo camiseta + short.png';
import gafasOscuras from '../assets/Gafas de seguridad oscuras.png';
import gafasTransparentes from '../assets/Gafas de seguridad transparentes.png';
import guantesAnticorte from '../assets/Guantes anticorte industriales.png';
import guantesCarnaza from '../assets/Guantes de carnaza.png';
import guantesNitrilo from '../assets/Guantes de nitrilo negros.png';
import overolIndustrial from '../assets/Overol industrial.png';
import pantalonIndustrial from '../assets/Pantalón de trabajo industrial.png';
import shortDeportivo from '../assets/Short deportivo.png';

export const categories = [
  { id: 'seguridad', label: 'Seguridad industrial' },
  { id: 'trabajo', label: 'Ropa de trabajo' },
  { id: 'deportiva', label: 'Ropa deportiva' },
  { id: 'personalizacion', label: 'Personalización' },
];

export const products = [
  {
    id: 1,
    name: 'Botas de seguridad con puntera reforzada',
    category: 'seguridad',
    price: 189000,
    image: botasSeguridad,
    badge: 'Más vendido',
  },
  {
    id: 2,
    name: 'Casco de seguridad amarillo',
    category: 'seguridad',
    price: 45000,
    image: cascoAmarillo,
  },
  {
    id: 3,
    name: 'Casco de seguridad blanco',
    category: 'seguridad',
    price: 45000,
    image: cascoBlanco,
  },
  {
    id: 4,
    name: 'Chaleco reflectivo amarillo',
    category: 'seguridad',
    price: 38000,
    image: chalecoAmarillo,
  },
  {
    id: 5,
    name: 'Chaleco reflectivo naranja',
    category: 'seguridad',
    price: 38000,
    image: chalecoNaranja,
  },
  {
    id: 6,
    name: 'Gafas de seguridad oscuras',
    category: 'seguridad',
    price: 22000,
    image: gafasOscuras,
  },
  {
    id: 7,
    name: 'Gafas de seguridad transparentes',
    category: 'seguridad',
    price: 22000,
    image: gafasTransparentes,
  },
  {
    id: 8,
    name: 'Guantes anticorte industriales',
    category: 'seguridad',
    price: 32000,
    image: guantesAnticorte,
    badge: 'Nuevo',
  },
  {
    id: 9,
    name: 'Guantes de carnaza',
    category: 'seguridad',
    price: 25000,
    image: guantesCarnaza,
  },
  {
    id: 10,
    name: 'Guantes de nitrilo negros',
    category: 'seguridad',
    price: 18000,
    image: guantesNitrilo,
  },
  {
    id: 11,
    name: 'Camisa industrial manga corta',
    category: 'trabajo',
    price: 65000,
    image: camisaMangaCorta,
  },
  {
    id: 12,
    name: 'Camisa industrial manga larga',
    category: 'trabajo',
    price: 72000,
    image: camisaMangaLarga,
  },
  {
    id: 13,
    name: 'Pantalón de trabajo industrial',
    category: 'trabajo',
    price: 89000,
    image: pantalonIndustrial,
  },
  {
    id: 14,
    name: 'Overol industrial',
    category: 'trabajo',
    price: 135000,
    image: overolIndustrial,
  },
  {
    id: 15,
    name: 'Chaqueta impermeable de trabajo',
    category: 'trabajo',
    price: 158000,
    image: chaquetaImpermeable,
    badge: 'Más vendido',
  },
  {
    id: 16,
    name: 'Camiseta deportiva dry',
    category: 'deportiva',
    price: 42000,
    image: camisetaDry,
  },
  {
    id: 17,
    name: 'Camiseta deportiva negra',
    category: 'deportiva',
    price: 38000,
    image: camisetaDeportivaNegra,
  },
  {
    id: 18,
    name: 'Short deportivo',
    category: 'deportiva',
    price: 35000,
    image: shortDeportivo,
  },
  {
    id: 19,
    name: 'Conjunto deportivo camiseta + short',
    category: 'deportiva',
    price: 68000,
    image: conjuntoDeportivo,
    badge: 'Nuevo',
  },
  {
    id: 20,
    name: 'Camiseta personalizada con logo empresarial',
    category: 'personalizacion',
    price: 32000,
    image: camisetaPersonalizada,
  },
];