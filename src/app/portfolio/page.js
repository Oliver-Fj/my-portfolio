// src/app/portfolio/page.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
    SiReact, SiNextdotjs, SiNodedotjs, SiMongodb,
    SiFirebase, SiTailwindcss, SiStripe,
    SiGooglecloud, SiTypescript, SiFigma
} from 'react-icons/si';

// Mapa de iconos para tecnologías
const techIcons = {
    'React': SiReact,
    'Next.js': SiNextdotjs,
    'Node.js': SiNodedotjs,
    'MongoDB': SiMongodb,
    'Firebase': SiFirebase,
    'Tailwind CSS': SiTailwindcss,
    'Stripe': SiStripe,
    'Google Cloud': SiGooglecloud,
    'TypeScript': SiTypescript,
    'Figma': SiFigma
};

const categorias = ['Todos', 'Desarrollo Web', 'Aplicaciones Móviles', 'Diseño UX/UI'];

const proyectos = [
    {
        id: 1,
        titulo: 'E-commerce Premium',
        categoria: 'Desarrollo Web',
        descripcion: 'Plataforma de comercio electrónico con integración de pagos y gestión de inventario.',
        tecnologias: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
        imagen: '/proyecto1.webp',
        enlace: '#'
    },
    {
        id: 2,
        titulo: 'Gestión de Reservas',
        categoria: 'Aplicaciones Web',
        descripcion: 'Sistema de gestión de reservas para hoteles con soporte multilenguaje y notificaciones automáticas.',
        tecnologias: ['React', 'Firebase', 'Tailwind CSS'],
        imagen: '/proyecto2.webp',
        enlace: '#'
    },
    {
        id: 3,
        titulo: 'Dashboard Analítico',
        categoria: 'Desarrollo Web',
        descripcion: 'Panel de control para análisis de datos con gráficos interactivos y reportes exportables.',
        tecnologias: ['React', 'TypeScript', 'Google Cloud'],
        imagen: '/proyecto3.webp',
        enlace: '#'
    },
    {
        id: 4,
        titulo: 'Portafolio Personal',
        categoria: 'Diseño Web',
        descripcion: 'Portafolio profesional con diseño responsivo y experiencia de usuario optimizada.',
        tecnologias: ['Next.js', 'Tailwind CSS', 'Figma'],
        imagen: '/proyecto4.webp',
        enlace: '#'
    },
    {
        id: 5,
        titulo: 'Gestión Escolar',
        categoria: 'Aplicaciones Web',
        descripcion: 'Aplicación web para gestión escolar, incluyendo registro de estudiantes, notas y asistencia.',
        tecnologias: ['Node.js', 'MongoDB', 'React'],
        imagen: '/proyecto5.webp',
        enlace: '#'
    },
    {
        id: 6,
        titulo: 'Tienda de Ropa Virtual',
        categoria: 'Desarrollo Web',
        descripcion: 'Tienda de ropa online con filtros avanzados y pasarela de pagos segura.',
        tecnologias: ['Next.js', 'Stripe', 'TypeScript'],
        imagen: '/proyecto6.webp',
        enlace: '#'
    },
    {
        id: 7,
        titulo: 'Gestión de Proyectos',
        categoria: 'Aplicaciones Web',
        descripcion: 'Herramienta de colaboración en equipo para la gestión de tareas y seguimiento de proyectos.',
        tecnologias: ['React', 'Firebase', 'Google Cloud'],
        imagen: '/proyecto7.webp',
        enlace: '#'
    },
    {
        id: 8,
        titulo: 'Sistema de Inventarios',
        categoria: 'Desarrollo Web',
        descripcion: 'Sistema web para control y gestión de inventarios en tiempo real.',
        tecnologias: ['Node.js', 'MongoDB', 'React', 'Tailwind CSS'],
        imagen: '/proyecto8.webp',
        enlace: '#'
    }
];

export default function PortfolioPage() {
    const [categoriaActiva, setCategoriaActiva] = useState('Todos');

    const proyectosFiltrados = categoriaActiva === 'Todos'
        ? proyectos
        : proyectos.filter(p => p.categoria === categoriaActiva);

    return (
        <div className="min-h-screen bg-[#0B0B2B]">
            {/* Hero Section */}
            <section className="pt-32 pb-20 relative">
                <div className="container mx-auto px-6">
                    <motion.h1
                        className="text-5xl lg:text-6xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Nuestro Portfolio
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-400 max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Descubre algunos de nuestros mejores proyectos y casos de éxito.
                    </motion.p>
                </div>
            </section>

            {/* Filtro de Categorías */}
            <section className="py-10 border-t border-b border-[#5865F2]/20">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="flex flex-wrap justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {categorias.map((categoria) => (
                            <motion.button
                                key={categoria}
                                onClick={() => setCategoriaActiva(categoria)}
                                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                  ${categoriaActiva === categoria
                                        ? 'bg-[#5865F2] text-white'
                                        : 'bg-[#161644]/40 text-gray-400 hover:text-white'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {categoria}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Grid de Proyectos */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {proyectosFiltrados.map((proyecto, index) => (
                            <motion.div
                                key={proyecto.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group"
                            >
                                <div className="bg-[#161644]/40 rounded-xl overflow-hidden border border-[#5865F2]/20 hover:border-[#5865F2]/50 transition-all duration-300">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={proyecto.imagen}
                                            alt={proyecto.titulo}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B2B] to-transparent opacity-50" />
                                    </div>

                                    <div className="p-6">
                                        <div className="mb-4">
                                            <span className="text-[#5865F2] text-sm font-medium">
                                                {proyecto.categoria}
                                            </span>
                                            <h3 className="text-xl font-bold text-white mt-2">
                                                {proyecto.titulo}
                                            </h3>
                                        </div>

                                        <p className="text-gray-400 text-sm mb-4">
                                            {proyecto.descripcion}
                                        </p>

                                        {/* Tecnologías con iconos */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {proyecto.tecnologias.map((tech) => {
                                                const Icon = techIcons[tech];
                                                return (
                                                    <div
                                                        key={tech}
                                                        className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#5865F2]/20 text-[#5865F2]"
                                                    >
                                                        {Icon && <Icon className="w-4 h-4" />}
                                                        <span className="text-xs">{tech}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <Link
                                            href={proyecto.enlace}
                                            className="inline-flex items-center text-[#5865F2] font-medium hover:text-[#4752C4] transition-all duration-300 group"
                                        >
                                            Ver proyecto
                                            <svg
                                                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
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
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}