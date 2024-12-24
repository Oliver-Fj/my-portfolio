// src/components/common/FloatingCTA.js
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiWhatsappLine, RiMailLine, RiCloseLine } from 'react-icons/ri';

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 mb-4"
          >
            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/997704395" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mb-3 px-4 py-2 bg-[#25D366] text-white rounded-full hover:bg-[#22BF5B] transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RiWhatsappLine className="text-xl" />
              <span className="text-sm font-medium">WhatsApp</span>
            </motion.a>

            {/* Email Button */}
            <motion.a
              href="mailto:contacto@tuempresa.com" // Reemplaza con tu email
              className="flex items-center gap-2 px-4 py-2 bg-[#5865F2] text-white rounded-full hover:bg-[#4752C4] transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RiMailLine className="text-xl" />
              <span className="text-sm font-medium">Email</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 ${
          isOpen 
            ? 'bg-[#4752C4] rotate-45 transform' 
            : 'bg-[#5865F2] hover:bg-[#4752C4]'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <RiCloseLine className="text-white text-2xl" />
        ) : (
          <RiWhatsappLine className="text-white text-2xl" />
        )}
      </motion.button>
    </div>
  );
}