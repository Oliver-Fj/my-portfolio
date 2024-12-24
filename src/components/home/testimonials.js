// src/components/home/testimonials.js
'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaTwitter, FaLinkedin, FaTimes } from 'react-icons/fa';

const testimonials = [
    {
      id: 1,
      name: 'María García',
      position: 'CEO de TechStart',
      image: '/my-portfolio/testimonials/maria.jpg',
      content: 'Exactamente lo que los fundadores necesitan. El curso más completo que existe, ¡me encantó! La mejor parte es que incluye marcos y plantillas.',
      socialLinks: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Carlos Ruiz',
      position: 'Fundador de EcoShop',
      image: '/my-portfolio/testimonials/carlos.webp',
      content: 'El equipo realmente sabe cómo ayudarte a enfocarte y actuar en tus principales prioridades. Son orientados a la acción y se basan en una experiencia empresarial muy diversa.',
      socialLinks: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'Ana Martínez',
      position: 'Directora de CreativeMinds',
      image: '/my-portfolio/testimonials/ana.webp',
      content: 'Su experiencia en dirección de empresas fue evidente desde los primeros minutos. En semanas me ayudaron a priorizar el enfoque en el trabajo más importante.',
      socialLinks: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 4,
      name: 'Juan López',
      position: 'Director de Marketing de BrightAds',
      image: '/my-portfolio/testimonials/juan.webp',
      content: 'Una experiencia transformadora. La metodología y el enfoque práctico han sido fundamentales para el crecimiento de nuestro proyecto.',
      socialLinks: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 5,
      name: 'Nefeli Morales',
      position: 'Gerente de Operaciones de EcoBuild',
      image: '/my-portfolio/testimonials/nefeli.webp',
      content: 'Una experiencia transformadora. La metodología y el enfoque práctico han sido fundamentales para el crecimiento de nuestro proyecto.',
      socialLinks: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 6,
      name: 'Angel Gabriel',
      position: 'CEO de FreshHarvest',
      image: '/my-portfolio/testimonials/angel.webp',
      content: 'Una experiencia transformadora. La metodología y el enfoque práctico han sido fundamentales para el crecimiento de nuestro proyecto.',
      socialLinks: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 7,
      name: 'Azucena Garcia',
      position: 'CFO de AquaPure',
      image: '/my-portfolio/testimonials/azucena.webp',
      content: 'Una experiencia transformadora. La metodología y el enfoque práctico han sido fundamentales para el crecimiento de nuestro proyecto.',
      socialLinks: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 8,
      name: 'Armando Paredes',
      position: 'Líder de Proyectos de HealthLink',
      image: '/my-portfolio/testimonials/armando.webp',
      content: 'Una experiencia transformadora. La metodología y el enfoque práctico han sido fundamentales para el crecimiento de nuestro proyecto.',
      socialLinks: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 9,
      name: 'Pedro Castillo',
      position: 'Director de Diseño de UrbanTrend',
      image: '/my-portfolio/testimonials/pedro.webp',
      content: 'Una experiencia transformadora. La metodología y el enfoque práctico han sido fundamentales para el crecimiento de nuestro proyecto.',
      socialLinks: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 10,
      name: 'ximena montalvo',
      position: 'Analista Senior de DataSolve',
      image: '/my-portfolio/testimonials/dina.webp',
      content: 'Una experiencia transformadora. La metodología y el enfoque práctico han sido fundamentales para el crecimiento de nuestro proyecto.',
      socialLinks: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 11,
      name: 'Pablo López',
      position: 'Gerente de Ventas de AutoMotion',
      image: '/my-portfolio/testimonials/pablo.webp',
      content: 'Una experiencia transformadora. La metodología y el enfoque práctico han sido fundamentales para el crecimiento de nuestro proyecto.',
      socialLinks: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 12,
      name: 'Ventura Garcia',
      position: 'Director de Desarrollo de GreenFuture ',
      image: '/my-portfolio/testimonials/ventura.webp',
      content: 'Una experiencia transformadora. La metodología y el enfoque práctico han sido fundamentales para el crecimiento de nuestro proyecto.',
      socialLinks: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 13,
      name: 'Oliver Perez',
      position: 'Líder de Producto de ByteWave',
      image: '/my-portfolio/testimonials/oliver.webp',
      content: 'Una experiencia transformadora. La metodología y el enfoque práctico han sido fundamentales para el crecimiento de nuestro proyecto.',
      socialLinks: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 14,
      name: 'Luciana Santosz',
      position: 'COO de SkyTravel',
      image: '/my-portfolio/testimonials/luciana.webp',
      content: 'Una experiencia transformadora. La metodología y el enfoque práctico han sido fundamentales para el crecimiento de nuestro proyecto.',
      socialLinks: {
        twitter: '#',
        linkedin: '#'
      }
    }
    
  ];

const TestimonialCard = ({ testimonial, onClick }) => (
  <motion.div 
    onClick={onClick}
    className="min-w-[300px] max-w-[300px] flex-shrink-0 bg-[#161644]/40 border border-[#5865F2]/20 hover:border-[#5865F2]/50 p-6 cursor-pointer hover:scale-105 transition-all duration-300 flex flex-col justify-between h-[200px] rounded-xl mx-2 backdrop-blur-sm"
    whileHover={{ y: -5 }}
  >
    <p className="text-gray-300 text-base mb-4 line-clamp-3">
      &quot;{testimonial.content}&quot;
    </p>
    <div className="flex items-center gap-3">
      <div className="relative w-10 h-10">
        <Image 
          src={testimonial.image} 
          alt={testimonial.name}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div>
        <h4 className="font-medium text-sm text-white">{testimonial.name}</h4>
        <p className="text-[#5865F2] text-xs">{testimonial.position}</p>
      </div>
    </div>
  </motion.div>
);

const Modal = ({ testimonial, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="bg-[#161644] rounded-xl p-8 max-w-2xl w-full shadow-2xl border border-[#5865F2]/20"
      onClick={e => e.stopPropagation()}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16">
            <Image 
              src={testimonial.image} 
              alt={testimonial.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">
              {testimonial.name}
            </h3>
            <p className="text-[#5865F2]">{testimonial.position}</p>
          </div>
        </div>
        <button 
          onClick={onClose} 
          className="text-gray-400 hover:text-white transition-colors"
        >
          <FaTimes size={24} />
        </button>
      </div>
      <p className="text-gray-300 text-lg mb-6">
        &quot;{testimonial.content}&quot;
      </p>
      <div className="flex gap-4">
        <a 
          href={testimonial.socialLinks.twitter} 
          className="text-[#5865F2] hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={24} />
        </a>
        <a 
          href={testimonial.socialLinks.linkedin}
          className="text-[#5865F2] hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </motion.div>
  </motion.div>
);

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-20 bg-[#0B0B2B] overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Historias de Éxito
        </h2>
        <p className="text-lg text-gray-400">
          Lo que dicen nuestros clientes sobre nosotros
        </p>
      </div>

      <div className="relative max-w-[100vw]">
        <div 
          ref={sliderRef}
          className="overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.id}-${index}`}
                testimonial={testimonial}
                onClick={() => !isDragging && setSelectedTestimonial(testimonial)}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedTestimonial && (
          <Modal 
            testimonial={selectedTestimonial} 
            onClose={() => setSelectedTestimonial(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;