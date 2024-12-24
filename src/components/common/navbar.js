// src/components/common/navbar.js
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '/my-portfolio/' },
    { name: 'Servicios', href: '/my-portfolio/servicios', scrollTo: 'servicios' },
    { name: 'Nosotros', href: '/my-portfolio/nosotros' },
    { name: 'Proceso', href: '/my-portfolio/proceso' },
  ];

  const handleNavClick = (e, item) => {
    if (item.scrollTo && pathname === '/') {
      e.preventDefault();
      document.getElementById(item.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-[#0B0B2B]/80 backdrop-blur-md' : 'py-6'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/"
            className="text-2xl lg:text-3xl font-bold text-[#5865F2] hover:text-shadow-sm hover:text-opacity-90 transition-all"
          >
            TechWizard
          </Link>

          {/* Menú escritorio */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-base lg:text-lg font-medium text-white hover:text-[#5865F2] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.a>
            ))}
            <Link href="/contacto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-[#5865F2] text-white text-base lg:text-lg rounded-full font-medium hover:bg-[#4752C4] transition-all duration-300"
              >
                Contactar
              </motion.button>
            </Link>
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 border-2 border-[#5865F2] text-white text-base lg:text-lg rounded-full font-medium hover:border-[#4752C4] hover:text-[#5865F2] transition-all duration-300"
              >
                Portfolio
              </motion.button>
            </Link>
          </div>

          {/* Botón menú móvil */}
          <motion.button
            className="md:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ?
              <RiCloseLine className="text-[#5865F2]" /> :
              <RiMenu4Line className="text-[#5865F2]" />
            }
          </motion.button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0B0B2B]/95 backdrop-blur-md border-t border-[#5865F2]/20"
          >
            <div className="container mx-auto px-6 py-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-lg text-white hover:text-[#5865F2] transition-all duration-300"
                  onClick={(e) => {
                    handleNavClick(e, item);
                    setIsOpen(false);
                  }}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="space-y-4 mt-6">
                <motion.button
                  whileHover={{ x: 10 }}
                  className="w-full px-6 py-3 bg-[#5865F2] text-white text-lg rounded-full font-medium hover:bg-[#4752C4] transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Contactar
                </motion.button>
                <Link href="/portfolio">
                  <motion.button
                    whileHover={{ x: 10 }}
                    className="w-full px-6 py-3 border-2 border-[#5865F2] text-white text-lg rounded-full font-medium hover:border-[#4752C4] hover:text-[#5865F2] transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Portfolio
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}