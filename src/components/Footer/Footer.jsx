import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import './Footer.css';

const categories = [
  'Seguridad industrial',
  'Ropa de trabajo',
  'Ropa deportiva',
  'Personalización',
];

function Footer() {
  return (
    <motion.footer
      className="footer"
      id="contacto"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="footer__top">
        <div className="footer__brand">
          <span className="footer__logo">
            J&R <span>Safety Wear</span>
          </span>

          <p>
            Seguridad industrial, ropa de trabajo y vestuario para empresas
            y organizaciones.
          </p>
        </div>

        <div className="footer__column">
          <h4>Categorías</h4>

          <ul>
            {categories.map((category) => (
              <li key={category}>
                <a href="#catalogo">{category}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h4>Contacto</h4>

          <ul>
            <li>
              <Phone size={14} />
              <a href="tel:+17209803492">(720) 980-3492</a>
            </li>

            <li>
              <Mail size={14} />
              <a href="mailto:r.mendoza508585@gmail.com">
                r.mendoza508585@gmail.com
              </a>
            </li>

            <li>
              <MapPin size={14} />
              <span>Aurora, Colorado</span>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h4>Ubicaciones</h4>

          <ul>
            <li>
              <span>
                La Plaza Colorado
                <br />
                15200 E Colfax Ave
                <br />
                Aurora, CO 80011
                <br />
                Unidad A-36, 37, 38
              </span>
            </li>

            <li>
              <span>
                Mile High Flea Market
                <br />
                Espacio 0-85 y 87
              </span>
            </li>

            <li>
              <a href="tel:+17025422728">[702] 542-2728</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>
          © 2026 J&R Safety Wear LLC. Todos los derechos reservados.
        </span>

        <div className="footer__legal">
          <a href="#">Términos y condiciones</a>
          <a href="#">Política de privacidad</a>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;