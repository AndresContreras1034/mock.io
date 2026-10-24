import { ArrowLeft, Mail } from 'lucide-react';
import { categories } from '../../data/products';
import { useLanguage } from '../../context/useLanguage';
import './ProductDetail.css';

const descriptionKeys = {
  cascos: 'product.description.helmets',
  chaquetas: 'product.description.jackets',
  chalecos: 'product.description.vests',
  camisetas: 'product.description.shirts',
  gorros: 'product.description.hats',
  guantes: 'product.description.gloves',
};

function ProductDetail({ product }) {
  const { language, t } = useLanguage();
  const backToCatalog = `${window.location.pathname}#catalogo`;

  if (!product) {
    return (
      <main className="product-detail product-detail--not-found">
        <p>{t('product.notFound')}</p>
        <a className="product-detail__back" href={backToCatalog}>
          <ArrowLeft size={18} />
          {t('product.back')}
        </a>
      </main>
    );
  }

  const category = categories.find((item) => item.id === product.category);
  const productName = language === 'EN' ? product.nameEn : product.name;
  const subject = encodeURIComponent(productName);
  const body = encodeURIComponent(
    language === 'EN'
      ? `Hello, I would like to learn more about ${productName}.`
      : `Hola, quisiera recibir más información sobre ${productName}.`,
  );

  return (
    <main className="product-detail">
      <a className="product-detail__back" href={backToCatalog}>
        <ArrowLeft size={18} />
        {t('product.back')}
      </a>

      <article className="product-detail__content">
        <div className="product-detail__image-wrap">
          <img
            className="product-detail__image"
            src={product.image}
            alt={productName}
          />
        </div>

        <div className="product-detail__info">
          <span className="product-detail__category">
            {t(category?.translationKey)}
          </span>
          <h1>{productName}</h1>
          <div className="product-detail__description">
            <h2>{t('product.description.title')}</h2>
            <p>{t(descriptionKeys[product.category])}</p>
          </div>
          <a
            className="product-detail__inquire"
            href={`mailto:r.mendoza508585@gmail.com?subject=${subject}&body=${body}`}
          >
            <Mail size={18} />
            {t('product.inquire')}
          </a>
        </div>
      </article>
    </main>
  );
}

export default ProductDetail;
