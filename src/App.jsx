import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Truck, Users } from 'lucide-react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProductGrid from './components/ProductGrid/ProductGrid';
import ProductDetail from './components/ProductDetail/ProductDetail';
import CoverageMap from './components/CoverageMap/CoverageMap';
import AboutSection from './components/AboutSection/AboutSection';
import Footer from './components/Footer/Footer';
import { products } from './data/products';
import { useCountUp } from './hooks/useCountUp';
import { useLanguage } from './context/useLanguage';
import './App.css';

const stats = [
  { icon: Calendar, value: 15, suffix: '+', label: 'stats.experience' },
  { icon: Users, value: 1000, suffix: '+', label: 'stats.businesses' },
  { icon: MapPin, value: 20, suffix: '', label: 'stats.coverage' },
  { icon: Truck, value: 98, suffix: '%', label: 'stats.delivery' },
];

function StatItem({ icon: Icon, value, suffix, label, translate }) {
  const ref = useRef(null);
  const count = useCountUp(ref, value);

  return (
    <div className="trust-bar__item" ref={ref}>
      <span className="trust-bar__icon">
        <Icon size={20} />
      </span>
      <div>
        <span className="trust-bar__number">
          {count}
          {suffix}
        </span>
        <span className="trust-bar__label">{translate(label)}</span>
      </div>
    </div>
  );
}

function App() {
  const { t } = useLanguage();
  const productId = new URLSearchParams(window.location.search).get('producto');

  if (productId) {
    const product = products.find((item) => item.id === productId);

    return (
      <>
        <Header />
        <Navbar />
        <ProductDetail product={product} />
        <AboutSection />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Navbar />

      <section className="hero">
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.description')}</p>
        <a href="#catalogo" className="hero__cta">
          {t('hero.cta')}
        </a>
      </section>

      <motion.section
        className="trust-bar"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} translate={t} />
        ))}
      </motion.section>

      <CoverageMap />

      <ProductGrid />
      <AboutSection />
      <Footer />
    </>
  );
}

export default App;