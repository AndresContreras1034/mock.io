import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { categories } from '../../data/products';
import './CategorySidebar.css';

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const priceRanges = [
  { id: 'r1', label: 'Menos de $50.000' },
  { id: 'r2', label: '$50.000 - $100.000' },
  { id: 'r3', label: '$100.000 - $200.000' },
  { id: 'r4', label: 'Más de $200.000' },
];

function AccordionSection({ title, id, openSection, onToggle, children }) {
  const isOpen = openSection === id;

  return (
    <div className="category-sidebar__section">
      <button
        type="button"
        className="category-sidebar__heading"
        onClick={() => onToggle(id)}
      >
        {title}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="category-sidebar__chevron"
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CategorySidebar({ activeCategory, onCategoryChange }) {
  const [openSection, setOpenSection] = useState('categorias');

  const toggleSection = (section) =>
    setOpenSection((current) => (current === section ? null : section));

  return (
    <aside className="category-sidebar">
      <AccordionSection
        title="Categorías"
        id="categorias"
        openSection={openSection}
        onToggle={toggleSection}
      >
        <ul className="category-sidebar__list">
          <li>
            <button
              type="button"
              className={!activeCategory ? 'is-active' : ''}
              onClick={() => onCategoryChange?.(null)}
            >
              Todas
            </button>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <button
                type="button"
                className={activeCategory === category.id ? 'is-active' : ''}
                onClick={() => onCategoryChange?.(category.id)}
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>
      </AccordionSection>

      <AccordionSection
        title="Talla"
        id="talla"
        openSection={openSection}
        onToggle={toggleSection}
      >
        <div className="category-sidebar__sizes">
          {sizes.map((size) => (
            <motion.button
              type="button"
              key={size}
              className="category-sidebar__size"
              whileTap={{ scale: 0.9 }}
            >
              {size}
            </motion.button>
          ))}
        </div>
      </AccordionSection>

      <AccordionSection
        title="Rango de precio"
        id="precio"
        openSection={openSection}
        onToggle={toggleSection}
      >
        <ul className="category-sidebar__list category-sidebar__list--checkbox">
          {priceRanges.map((range) => (
            <li key={range.id}>
              <label>
                <input type="checkbox" />
                {range.label}
              </label>
            </li>
          ))}
        </ul>
      </AccordionSection>
    </aside>
  );
}

export default CategorySidebar;