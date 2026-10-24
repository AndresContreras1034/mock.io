import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/useLanguage';
import './ProductCard.css';

const categoryTranslations = {
  cascos: 'category.helmets',
  chaquetas: 'category.jackets',
  chalecos: 'category.vests',
  camisetas: 'category.shirts',
  gorros: 'category.hats',
  guantes: 'category.gloves',
};

function ProductCard({ product }) {
  const { language, t } = useLanguage();
  const productName = language === 'EN' ? product.nameEn : product.name;

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
          alt={productName}
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
        <span className="product-card__category">
          {t(categoryTranslations[product.category])}
        </span>
        <h3 className="product-card__name">{productName}</h3>
      </div>

      <motion.a
        href={`?producto=${encodeURIComponent(product.id)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t('product.view')}: ${productName}`}
        className="product-card__cta"
        whileHover={{ gap: '10px' }}
      >
        {t('product.view')}
        <ArrowRight size={16} />
      </motion.a>
    </motion.article>
  );
}

export default ProductCard;