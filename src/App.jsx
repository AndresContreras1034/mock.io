import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Truck, Users } from 'lucide-react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProductGrid from './components/ProductGrid/ProductGrid';
import CoverageMap from './components/CoverageMap/CoverageMap';
import AboutSection from './components/AboutSection/AboutSection';
import Footer from './components/Footer/Footer';
import { useCountUp } from './hooks/useCountUp';
import './App.css';

const stats = [
  { icon: Calendar, value: 15, suffix: '+', label: 'años de experiencia' },
  { icon: Users, value: 1000, suffix: '+', label: 'empresas atendidas' },
  { icon: MapPin, value: 20, suffix: '', label: 'departamentos con cobertura' },
  { icon: Truck, value: 98, suffix: '%', label: 'pedidos entregados a tiempo' },
];

function StatItem({ icon: Icon, value, suffix, label }) {
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
        <span className="trust-bar__label">{label}</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <section className="hero">
        <h1>Dotación, seguridad y vestuario para tu empresa</h1>
        <p>
          Productos de protección, ropa de trabajo, prendas deportivas y
          personalización textil.
        </p>
        <a href="#catalogo" className="hero__cta">
          Ver catálogo
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
          <StatItem key={stat.label} {...stat} />
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