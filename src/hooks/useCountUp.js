import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * Anima un número entero de 0 -> target cuando el elemento asociado entra en el viewport.
 * ref: ref del elemento que dispara la animación (useRef).
 */
export function useCountUp(ref, target, duration = 1200) {
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = null;
    let frameId;

    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, target, duration]);

  return value;
}