// src/components/home/hero.js
'use client';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B0B2B]">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/my-portfolio/hero-3d.svg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Overlay gradiente para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B2B]/90 via-[#0B0B2B]/70 to-transparent" />
      </div>

      {/* Efectos adicionales */}
      <div className="absolute inset-0 z-10">
        {/* Efecto de partículas/cubos */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(88,101,242,0.3) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-20 container mx-auto px-6 min-h-screen flex items-center">
        <div className="max-w-2xl pt-20">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight" 
          >
            <span className="text-[#5865F2] inline-block"> 
              Experiencias
            </span>
            <br />
            <span className="text-white inline-block"> 
              Digitales
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg mb-8 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Creamos soluciones web innovadoras que impulsan el éxito de tu negocio en el mundo digital.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg font-medium inline-flex items-center gap-2 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Comienza tu proyecto
            <BsArrowRight className="group-hover:translate-x-1" />
          </motion.button>
        </div>
      </div>

      {/* Transición suave al siguiente componente */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0B2B] to-transparent z-20" />
    </div>
  );
}