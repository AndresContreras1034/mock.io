import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CategorySidebar from '../CategorySidebar/CategorySidebar';
import ProductCard from '../ProductCard/ProductCard';
import { categories, products } from '../../data/products';
import { useLanguage } from '../../context/useLanguage';
import './ProductGrid.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState(null);
  const { t } = useLanguage();

  const filteredProducts = useMemo(() => {
    if (activeCategory) {
      return products.filter((product) => product.category === activeCategory);
    }

    const productsByCategory = categories.map((category) =>
      products.filter((product) => product.category === category.id),
    );
    const rounds = Math.max(...productsByCategory.map((items) => items.length));

    return Array.from({ length: rounds }, (_, index) =>
      productsByCategory.flatMap((items) => (items[index] ? [items[index]] : [])),
    ).flat();
  }, [activeCategory]);

  const categoryCounts = useMemo(
    () =>
      Object.fromEntries(
        categories.map((category) => [
          category.id,
          products.filter((product) => product.category === category.id).length,
        ]),
      ),
    [],
  );

  return (
    <section className="product-grid" id="catalogo">
      <div className="product-grid__header">
        <div>
          <h2>{t('catalog.title')}</h2>
          <p>{t('catalog.description')}</p>
        </div>
        <span className="product-grid__count">
          {filteredProducts.length} {t('catalog.products')}
        </span>
      </div>

      <CategorySidebar
        activeCategory={activeCategory}
        categoryCounts={categoryCounts}
        onCategoryChange={setActiveCategory}
        translate={t}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory ?? 'todas'}
          className="product-grid__items"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
        >
          {filteredProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default ProductGrid;