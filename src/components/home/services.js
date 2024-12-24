// src/components/home/services.js
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  RiComputerLine,
  RiSmartphoneLine, 
  RiBrushLine,
  RiRocketLine 
} from 'react-icons/ri';

const services = [
  {
    title: 'Desarrollo Web',
    description: 'Creamos sitios web modernos, rápidos y totalmente responsivos que destacan tu marca.',
    icon: RiComputerLine,
    slug: 'desarrollo-web'
  },
  {
    title: 'Aplicaciones Móviles',
    description: 'Desarrollamos apps nativas y multiplataforma con las últimas tecnologías.',
    icon: RiSmartphoneLine,
    slug: 'aplicaciones-moviles'
  },
  {
    title: 'Diseño UX/UI',
    description: 'Diseñamos interfaces intuitivas y experiencias de usuario excepcionales.',
    icon: RiBrushLine,
    slug: 'diseno-ux-ui'
  },
  {
    title: 'Marketing Digital',
    description: 'Estrategias personalizadas para aumentar tu presencia online y conseguir más clientes.',
    icon: RiRocketLine,
    slug: 'marketing-digital'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-20 bg-[#0B0B2B] overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(88,101,242,0.3) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}
        />
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(88,101,242,0.1) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Encabezado de sección */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold mb-6 text-white">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ofrecemos soluciones digitales completas para hacer crecer tu negocio en el mundo digital.
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="p-8 rounded-xl bg-[#161644]/40 backdrop-blur-sm border border-[#5865F2]/20 hover:border-[#5865F2]/50 transition-all duration-300">
                {/* Icono y título */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5865F2]/20 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-[#5865F2]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <Link 
                  href={`/servicios#${service.slug}`}
                  className="inline-flex items-center text-[#5865F2] font-medium hover:text-[#4752C4] transition-all duration-300 group"
                >
                  Saber más
                  <svg 
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}