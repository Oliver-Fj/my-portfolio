// src/app/servicios/page.js
'use client';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import {
    RiComputerLine, RiSmartphoneLine,
    RiBrushLine, RiRocketLine,
    RiCodeLine, RiLayoutLine, RiDatabaseLine,
    RiShieldLine, RiSpeedLine, RiSearchEyeLine
} from 'react-icons/ri';

const serviciosDetallados = [
    {
        slug: 'desarrollo-web',
        title: 'Desarrollo Web',
        icon: RiComputerLine,
        description: 'Creamos sitios web modernos y escalables que impulsan tu presencia digital.',
        caracteristicas: [
            {
                titulo: 'Desarrollo Frontend',
                icon: RiLayoutLine,
                descripcion: 'Interfaces modernas y responsivas con React, Next.js y tecnologías de vanguardia.'
            },
            {
                titulo: 'Desarrollo Backend',
                icon: RiCodeLine,
                descripcion: 'APIs robustas y escalables con Node.js, Python y bases de datos optimizadas.'
            },
            {
                titulo: 'Optimización',
                icon: RiSpeedLine,
                descripcion: 'Máximo rendimiento y velocidad de carga para mejor experiencia de usuario.'
            },
            {
                titulo: 'SEO Técnico',
                icon: RiSearchEyeLine,
                descripcion: 'Implementación de mejores prácticas para posicionamiento en buscadores.'
            }
        ]
    },
    {
        slug: 'aplicaciones-moviles',
        title: 'Aplicaciones Móviles',
        icon: RiSmartphoneLine,
        description: 'Desarrollamos aplicaciones nativas y multiplataforma de alto rendimiento.',
        caracteristicas: [
            {
                titulo: 'Apps Nativas',
                icon: RiCodeLine,
                descripcion: 'Desarrollo especializado para iOS y Android con Swift y Kotlin.'
            },
            {
                titulo: 'Apps Multiplataforma',
                icon: RiLayoutLine,
                descripcion: 'Soluciones eficientes con React Native y Flutter.'
            },
            {
                titulo: 'Experiencia de Usuario',
                icon: RiBrushLine,
                descripcion: 'Interfaces intuitivas y fluidas siguiendo las últimas tendencias.'
            },
            {
                titulo: 'Seguridad',
                icon: RiShieldLine,
                descripcion: 'Implementación de mejores prácticas de seguridad y protección de datos.'
            }
        ]
    },
    {
        slug: 'diseno-ux-ui',
        title: 'Diseño UX/UI',
        icon: RiBrushLine,
        description: 'Creamos experiencias digitales intuitivas y atractivas.',
        caracteristicas: [
            {
                titulo: 'Diseño de Interfaz',
                icon: RiLayoutLine,
                descripcion: 'Interfaces modernas y atractivas que reflejan la identidad de tu marca.'
            },
            {
                titulo: 'Experiencia de Usuario',
                icon: RiSpeedLine,
                descripcion: 'Flujos de usuario optimizados y pruebas de usabilidad.'
            },
            {
                titulo: 'Diseño Responsivo',
                icon: RiSmartphoneLine,
                descripcion: 'Adaptación perfecta a todos los dispositivos y tamaños de pantalla.'
            },
            {
                titulo: 'Prototipado',
                icon: RiCodeLine,
                descripcion: 'Prototipos interactivos para validar ideas antes del desarrollo.'
            }
        ]
    },
    {
        slug: 'marketing-digital',
        title: 'Marketing Digital',
        icon: RiRocketLine,
        description: 'Estrategias efectivas para aumentar tu presencia online.',
        caracteristicas: [
            {
                titulo: 'SEO',
                icon: RiSearchEyeLine,
                descripcion: 'Optimización para motores de búsqueda y posicionamiento orgánico.'
            },
            {
                titulo: 'Redes Sociales',
                icon: RiLayoutLine,
                descripcion: 'Gestión y estrategia de contenidos en redes sociales.'
            },
            {
                titulo: 'Email Marketing',
                icon: RiRocketLine,
                descripcion: 'Campañas efectivas de email marketing y automatización.'
            },
            {
                titulo: 'Analítica',
                icon: RiDatabaseLine,
                descripcion: 'Análisis de datos y métricas para optimizar resultados.'
            }
        ]
    }
];

export default function ServiciosPage() {
    useEffect(() => {
        if (window.location.hash) {
            const element = document.querySelector(window.location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);
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
                        Nuestros Servicios
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-400 max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Soluciones digitales completas y personalizadas para cada necesidad.
                    </motion.p>
                </div>
            </section>

            {/* Servicios Detallados */}
            {serviciosDetallados.map((servicio, index) => (
                <section
                    key={servicio.slug}
                    id={servicio.slug}
                    className="py-20 relative"
                >
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#161644]/40 rounded-2xl p-8 lg:p-12 border border-[#5865F2]/20"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 rounded-xl bg-[#5865F2]/20 flex items-center justify-center">
                                    <servicio.icon className="w-8 h-8 text-[#5865F2]" />
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                                    {servicio.title}
                                </h2>
                            </div>

                            <p className="text-xl text-gray-400 mb-12 max-w-3xl">
                                {servicio.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {servicio.caracteristicas.map((caracteristica, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-[#1A1A4B]/40 rounded-xl p-6 border border-[#5865F2]/10"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <caracteristica.icon className="w-6 h-6 text-[#5865F2]" />
                                            <h3 className="text-xl font-semibold text-white">
                                                {caracteristica.titulo}
                                            </h3>
                                        </div>
                                        <p className="text-gray-400">
                                            {caracteristica.descripcion}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            ))}
        </div>
    );
}