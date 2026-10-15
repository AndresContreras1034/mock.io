import { motion } from 'framer-motion';
import { Award, HeartHandshake, MapPin, ShieldCheck, Users2 } from 'lucide-react';
import './AboutSection.css';

const values = [
  { icon: ShieldCheck, label: 'Quality' },
  { icon: HeartHandshake, label: 'Commitment' },
  { icon: Award, label: 'Trust' },
  { icon: Users2, label: 'Service' },
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
  return (
    <section className="about" id="nosotros">
      <motion.div
        className="about__intro"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
      >
        <h2>About J&R Safety Wear</h2>

        <p>
          J&R Safety Wear LLC provides safety wear and work clothing
          for customers in Aurora, Colorado. Our business is located
          at La Plaza Colorado and also has a location at Mile High
          Flea Market.
        </p>
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
            <span>{label}</span>
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
        <h3>Our Locations</h3>

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