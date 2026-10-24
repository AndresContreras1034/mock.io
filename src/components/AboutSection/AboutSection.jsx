import { motion } from 'framer-motion';
import { Award, HeartHandshake, MapPin, ShieldCheck, Users2 } from 'lucide-react';
import { useLanguage } from '../../context/useLanguage';
import './AboutSection.css';

const values = [
  { icon: ShieldCheck, label: 'about.quality' },
  { icon: HeartHandshake, label: 'about.commitment' },
  { icon: Award, label: 'about.trust' },
  { icon: Users2, label: 'about.service' },
];

const locations = [
  'Aurora, Colorado',
  'La Plaza Colorado',
  'Mile High Flea Market',
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="about" id="nosotros">
      <motion.div
        className="about__intro"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
      >
        <h2>{t('about.title')}</h2>
        <p>{t('about.description')}</p>
      </motion.div>

      <motion.div
        className="about__values"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        transition={{ staggerChildren: 0.08 }}
      >
        {values.map(({ icon: Icon, label }) => (
          <motion.div
            className="about__value"
            key={label}
            variants={fadeUp}
          >
            <Icon size={22} />
            <span>{t(label)}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="about__locations"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
      >
        <h3>{t('about.locations')}</h3>

        <ul>
          {locations.map((location) => (
            <li key={location}>
              <MapPin size={16} />
              {location}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

export default AboutSection;