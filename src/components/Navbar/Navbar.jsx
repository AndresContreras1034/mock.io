import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ChevronDown, Check, Languages } from 'lucide-react';
import { useLanguage } from '../../context/useLanguage';
import './Navbar.css';

const links = [
  { label: 'nav.catalog', href: '#catalogo' },
  { label: 'nav.customization', href: '#personalizacion' },
  { label: 'nav.about', href: '#nosotros' },
  { label: 'nav.contact', href: '#contacto' },
];

const languagesList = [
  { code: 'ES', label: 'Español' },
  { code: 'EN', label: 'English' },
];

export function LanguageSwitcher({ variant = 'desktop' }) {
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className={`navbar__lang navbar__lang--${variant}`}>
      <button
        type="button"
        className="navbar__lang-btn"
        onClick={() => setLangOpen((value) => !value)}
        aria-expanded={langOpen}
        aria-label={t('language.change')}
      >
        <Languages size={18} className="navbar__lang-icon" aria-hidden="true" />

        <span>{language}</span>

        <motion.span
          animate={{ rotate: langOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="navbar__lang-chevron"
        >
          <ChevronDown size={14} />
        </motion.span>
      </button>

      <AnimatePresence>
        {langOpen && (
          <motion.ul
            className="navbar__lang-menu"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{
              duration: 0.16,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {languagesList.map((item) => (
              <li key={item.code}>
                <button
                  type="button"
                  onClick={() => {
                    setLanguage(item.code);
                    setLangOpen(false);
                  }}
                  className={language === item.code ? 'is-active' : ''}
                >
                  {item.label}

                  {language === item.code && (
                    <Check size={14} />
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const isProductPage = new URLSearchParams(window.location.search).has('producto');
  const getLinkHref = (href) =>
    isProductPage ? `${window.location.pathname}${href}` : href;

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? t('menu.close') : t('menu.open')}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <ul className="navbar__links navbar__links--desktop">
          {links.map((link) => (
            <li key={link.label}>
              <a href={getLinkHref(link.href)}>{t(link.label)}</a>
            </li>
          ))}
        </ul>

        <LanguageSwitcher variant="desktop" />
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="navbar__backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />

            <motion.ul
              className="navbar__links navbar__links--mobile"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                stiffness: 320,
                damping: 34,
              }}
            >
              {links.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <a
                    href={getLinkHref(link.href)}
                    onClick={() => setOpen(false)}
                  >
                    {t(link.label)}
                  </a>
                </motion.li>
              ))}

              <motion.li
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.05 + links.length * 0.04,
                }}
                className="navbar__lang-mobile-wrap"
              >
                <LanguageSwitcher variant="mobile" />
              </motion.li>
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
