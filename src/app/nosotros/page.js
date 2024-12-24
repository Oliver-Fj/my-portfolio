// src/app/nosotros/page.js
'use client';
import { motion } from 'framer-motion';
import {
    RiTeamLine,
    RiAwardLine,
    RiHeartLine,
    RiLightbulbLine,
    RiGroupLine,
    RiEarthLine,
    RiTimer2Line,
    RiRocketLine,
    RiCodeBoxLine,
    RiBuilding4Line,
    RiStore2Line,
    RiShoppingBag3Line,
    RiRestaurant2Line,
    RiBriefcase4Line,
    RiHomeSmileLine
} from 'react-icons/ri';

// Arrays de datos
const values = [
    {
        icon: RiHeartLine,
        title: "Pasión",
        description: "Amamos lo que hacemos y eso se refleja en cada proyecto que emprendemos."
    },
    {
        icon: RiLightbulbLine,
        title: "Innovación",
        description: "Constantemente exploramos nuevas tecnologías y enfoques creativos."
    },
    {
        icon: RiGroupLine,
        title: "Colaboración",
        description: "Trabajamos estrechamente con nuestros clientes para garantizar resultados excepcionales."
    }
];

const brands = [
    {
        icon: RiBuilding4Line,
        name: 'Constructora AVM',
        industry: 'Construcción'
    },
    {
        icon: RiStore2Line,
        name: 'Minimarket La Esquina',
        industry: 'Retail'
    },
    {
        icon: RiShoppingBag3Line,
        name: 'Boutique Eleganza',
        industry: 'Moda'
    },
    {
        icon: RiRestaurant2Line,
        name: 'Restaurante El Sabor',
        industry: 'Gastronomía'
    },
    {
        icon: RiBriefcase4Line,
        name: 'Consultora ProGest',
        industry: 'Consultoría'
    },
    {
        icon: RiHomeSmileLine,
        name: 'Inmobiliaria Nueva Era',
        industry: 'Inmobiliaria'
    }
];

const achievements = [
    {
        number: "5+",
        title: "Años de Experiencia",
        icon: RiTimer2Line
    },
    {
        number: "100+",
        title: "Proyectos Completados",
        icon: RiCodeBoxLine
    },
    {
        number: "50+",
        title: "Clientes Satisfechos",
        icon: RiGroupLine
    }
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#0B0B2B] pt-32 pb-20">
            <div className="container mx-auto px-6">
                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Impulsando la Transformación Digital
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Somos un equipo apasionado por la tecnología y la innovación, dedicados a crear soluciones digitales que marcan la diferencia.
                    </p>
                </motion.section>

                {/* Números clave */}
                <motion.section
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.title}
                            className="bg-[#161644]/40 p-8 rounded-2xl border-2 border-[#5865F2]/20 text-center"
                            whileHover={{ scale: 1.02 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <achievement.icon className="w-8 h-8 text-[#5865F2] mx-auto mb-4" />
                            <div className="text-4xl font-bold text-[#5865F2] mb-2">{achievement.number}</div>
                            <div className="text-white">{achievement.title}</div>
                        </motion.div>
                    ))}
                </motion.section>

                {/* Marcas */}
                <motion.section
                    className="mb-32 py-16 bg-[#161644]/40 rounded-2xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Nuestros Clientes Satisfechos
                        </h2>
                        <p className="text-gray-400">
                            Empresas que han confiado en nosotros para su transformación digital
                        </p>
                    </div>

                    <div className="relative overflow-hidden px-20">
                        <div className="flex animate-scroll">
                            {[...brands, ...brands].map((brand, index) => (
                                <motion.div
                                    key={`${brand.name}-${index}`}
                                    className="flex-none w-64 h-32 mx-8 flex flex-col items-center justify-center bg-[#1A1A4B]/30 rounded-xl hover:bg-[#1A1A4B]/50 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <brand.icon className="w-8 h-8 text-[#5865F2] mb-2" />
                                    <h3 className="text-white font-medium text-sm">{brand.name}</h3>
                                    <p className="text-gray-400 text-xs">{brand.industry}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#161644] to-transparent" />
                        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#161644] to-transparent" />
                    </div>
                </motion.section>

                {/* Nuestra Historia */}
                <motion.section
                    className="mb-32 bg-[#161644]/40 rounded-2xl p-8 md:p-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            {/* Contenido de texto */}
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">Nuestra Historia</h2>

                                {/* Logo y nombre */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 bg-[#5865F2]/20 rounded-xl flex items-center justify-center">
                                        <RiCodeBoxLine className="w-8 h-8 text-[#5865F2]" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#5865F2]">TechWizard</h3>
                                        <p className="text-gray-400">Est. 2019</p>
                                    </div>
                                </div>

                                {/* Timeline de historia */}
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 rounded-full bg-[#5865F2]/20 flex items-center justify-center">
                                                <RiLightbulbLine className="w-5 h-5 text-[#5865F2]" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-2">2019 - Los inicios</h4>
                                            <p className="text-gray-400">Comenzamos como un pequeño equipo de desarrolladores apasionados por la tecnología y la innovación.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 rounded-full bg-[#5865F2]/20 flex items-center justify-center">
                                                <RiTeamLine className="w-5 h-5 text-[#5865F2]" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-2">2020 - Crecimiento del equipo</h4>
                                            <p className="text-gray-400">Expandimos nuestro equipo y comenzamos a ofrecer servicios integrales de desarrollo web y marketing digital.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 rounded-full bg-[#5865F2]/20 flex items-center justify-center">
                                                <RiRocketLine className="w-5 h-5 text-[#5865F2]" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-2">2021 - Expansión de servicios</h4>
                                            <p className="text-gray-400">Incorporamos servicios de diseño UX/UI y desarrollo de aplicaciones móviles a nuestro portafolio.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 rounded-full bg-[#5865F2]/20 flex items-center justify-center">
                                                <RiAwardLine className="w-5 h-5 text-[#5865F2]" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-2">2023 - Reconocimiento</h4>
                                            <p className="text-gray-400">Alcanzamos el hito de más de 100 proyectos exitosos y expandimos nuestra presencia en el mercado digital.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Imagen o gráfico */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative h-full min-h-[400px] rounded-xl overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/20 to-transparent rounded-xl" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                                    <div className="w-24 h-24 bg-[#5865F2]/20 rounded-xl flex items-center justify-center mb-6">
                                        <RiCodeBoxLine className="w-12 h-12 text-[#5865F2]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        Transformando ideas en realidad digital
                                    </h3>
                                    <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-[#5865F2] mb-2">24/7</div>
                                            <div className="text-gray-400 text-sm">Soporte Técnico</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-[#5865F2] mb-2">98%</div>
                                            <div className="text-gray-400 text-sm">Satisfacción</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-[#5865F2] mb-2">4</div>
                                            <div className="text-gray-400 text-sm">Servicios Principales</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-[#5865F2] mb-2">6</div>
                                            <div className="text-gray-400 text-sm">Tecnologías Core</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Nuestros Valores */}
                <motion.section className="mb-32">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Nuestros Valores</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-[#161644]/40 p-8 rounded-2xl border-2 border-[#5865F2]/20 text-center"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="w-16 h-16 rounded-full bg-[#5865F2]/20 flex items-center justify-center mx-auto mb-6">
                                    <value.icon className="w-8 h-8 text-[#5865F2]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                                <p className="text-gray-400">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* CTA Final */}
                <motion.section
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-white mb-6">
                        ¿Listo para empezar tu próximo proyecto?
                    </h2>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-[#5865F2] text-white rounded-lg font-medium hover:bg-[#4752C4] transition-colors"
                        onClick={() => window.location.href = '/contacto'}
                    >
                        Conversemos
                    </motion.button>
                </motion.section>
            </div>
        </div>
    );
}