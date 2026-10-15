import { useEffect, useState } from 'react';

/**
 * Devuelve true una vez que el usuario ha hecho scroll más allá de `threshold`.
 * Usado por el Header para pasar de sólido a un fondo tipo "glass" (blur + transparencia).
 */
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}