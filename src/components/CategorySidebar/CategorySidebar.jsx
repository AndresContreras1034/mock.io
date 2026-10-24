import { categories } from '../../data/products';
import './CategorySidebar.css';

function CategorySidebar({
  activeCategory,
  categoryCounts,
  onCategoryChange,
  translate,
}) {
  return (
    <nav
      className="category-filter"
      aria-label={translate('catalog.filter')}
    >
      <button
        type="button"
        className={`category-filter__option ${!activeCategory ? 'is-active' : ''}`}
        aria-pressed={!activeCategory}
        onClick={() => onCategoryChange?.(null)}
      >
        {translate('catalog.all')}
        <span>{Object.values(categoryCounts).reduce((total, count) => total + count, 0)}</span>
      </button>
      {categories.map((category) => (
        <button
          type="button"
          key={category.id}
          className={`category-filter__option ${activeCategory === category.id ? 'is-active' : ''}`}
          aria-pressed={activeCategory === category.id}
          onClick={() => onCategoryChange?.(category.id)}
        >
          {translate(category.translationKey)}
          <span>{categoryCounts[category.id]}</span>
        </button>
      ))}
    </nav>
  );
}

export default CategorySidebar;