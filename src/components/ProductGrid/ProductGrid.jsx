import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CategorySidebar from '../CategorySidebar/CategorySidebar';
import ProductCard from '../ProductCard/ProductCard';
import { products } from '../../data/products';
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

  const filteredProducts = useMemo(() => {
    if (!activeCategory) return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="product-grid" id="catalogo">
      <div className="product-grid__header">
        <h2>Catálogo</h2>
        <p>{filteredProducts.length} productos disponibles</p>
      </div>

      <div className="product-grid__layout">
        <CategorySidebar
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
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
      </div>
    </section>
  );
}

export default ProductGrid;