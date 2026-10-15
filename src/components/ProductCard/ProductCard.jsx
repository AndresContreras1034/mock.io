import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './ProductCard.css';

const categoryLabels = {
  seguridad: 'Seguridad industrial',
  trabajo: 'Ropa de trabajo',
  deportiva: 'Ropa deportiva',
  personalizacion: 'Personalización',
};

function formatPrice(value) {
  return value.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  });
}

function ProductCard({ product }) {
  return (
    <motion.article
      className="product-card"
      layout
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      <div className="product-card__image-wrap">
        <motion.img
          src={product.image}
          alt={product.name}
          className="product-card__image"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
        {product.badge && (
          <motion.span
            className="product-card__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
          >
            {product.badge}
          </motion.span>
        )}
      </div>

      <div className="product-card__body">
        <span className="product-card__category">{categoryLabels[product.category]}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <span className="product-card__price">{formatPrice(product.price)}</span>
      </div>

      <motion.button
        type="button"
        className="product-card__cta"
        whileHover={{ gap: '10px' }}
      >
        Ver producto
        <ArrowRight size={16} />
      </motion.button>
    </motion.article>
  );
}

export default ProductCard;