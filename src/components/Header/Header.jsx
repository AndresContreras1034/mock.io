
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Phone,
  Truck,
  Headset,
  Users,
  Mail,
} from 'lucide-react';
import { useScrolled } from '../../hooks/useScrolled';
import { useLanguage } from '../../context/useLanguage';
import './Header.css';

function Header() {
  const [query, setQuery] = useState('');
  const scrolled = useScrolled(40);
  const { t } = useLanguage();

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__topbar">
        <div className="header__topbar-inner">
          <ul className="header__topbar-links">
            <li>
              <Truck size={14} />
              {t('header.shipping')}
            </li>

            <li>
              <Headset size={14} />
              {t('header.support')}
            </li>

            <li>
              <Users size={14} />
              {t('header.distributors')}
            </li>
          </ul>

          <ul className="header__topbar-links header__topbar-links--right">
            <li>
              <Mail size={14} />
              r.mendoza508585@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <motion.div
        className="header__main"
        initial={{ backgroundColor: 'rgba(255,255,255,1)' }}
        animate={{
          backgroundColor: scrolled
            ? 'rgba(255,255,255,0.72)'
            : 'rgba(255,255,255,1)',
        }}
        transition={{
          duration: 0.35,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <a href={import.meta.env.BASE_URL} className="header__logo">
          J&R <span>Safety Wear</span>
        </a>

        <motion.form
          className="header__search"
          onSubmit={(e) => e.preventDefault()}
          whileFocus={{ scale: 1.01 }}
        >
          <Search
            size={18}
            className="header__search-icon"
          />

          <input
            type="text"
            placeholder={t('header.search')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </motion.form>

        <div className="header__actions">
          <div className="header__phone">
            <Phone size={18} />

            <span className="header__phone-text">
              <span className="header__phone-label">
                {t('header.sales')}
              </span>

              <span className="header__phone-number">
                <a href="tel:+17209803492">
                  (720) 980-3492
                </a>

                <a href="tel:+17025422728">
                  [702] 542-2728
                </a>
              </span>
            </span>
          </div>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
