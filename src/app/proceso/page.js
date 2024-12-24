// src/app/proceso/page.js
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    RiTeamLine,
    RiSearchEyeLine,
    RiCodeBoxLine,
    RiBarChartBoxLine,
    RiPresentationLine,
    RiAddLine,
    RiCheckboxCircleLine,
    RiCustomerServiceLine,
    RiSettings3Line,
    RiSubtractLine,
    RiTimer2Line
} from 'react-icons/ri';

const processSteps = [
    {
        number: "01",
        title: "Consultoría",
        icon: RiTeamLine,
        description: "Durante la consultoría inicial, analizamos tus objetivos comerciales, audiencia objetivo y estrategia actual. Esto nos permite entender tus necesidades y adaptar nuestros servicios a tus requerimientos específicos."
    },
    {
        number: "02",
        title: "Investigación y Desarrollo de Estrategia",
        icon: RiSearchEyeLine,
        description: "Realizamos una investigación exhaustiva del mercado y tu competencia. Desarrollamos una estrategia personalizada que alinea tus objetivos comerciales con soluciones tecnológicas innovadoras."
    },
    {
        number: "03",
        title: "Implementación",
        icon: RiCodeBoxLine,
        description: "Ejecutamos la estrategia utilizando las últimas tecnologías y mejores prácticas de desarrollo. Mantenemos una comunicación constante durante todo el proceso de implementación."
    },
    {
        number: "04",
        title: "Monitoreo y Optimización",
        icon: RiBarChartBoxLine,
        description: "Realizamos un seguimiento continuo del rendimiento, implementamos mejoras y optimizamos todos los aspectos del proyecto para garantizar resultados óptimos."
    },
    {
        number: "05",
        title: "Reportes y Comunicación",
        icon: RiPresentationLine,
        description: "Proporcionamos informes detallados y mantenemos una comunicación transparente sobre el progreso y los resultados del proyecto."
    }
];

export default function ProcessPage() {
    const [activeStep, setActiveStep] = useState(null);

    useEffect(() => {
        setActiveStep(0);
    }, []);

    return (
        <div className="min-h-screen bg-[#0B0B2B] pt-32 pb-20">
            <div className="container mx-auto px-6">
                {/* Encabezado */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Nuestro Proceso de Trabajo
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Guía paso a paso para alcanzar tus objetivos empresariales
                    </p>
                </motion.div>

                {/* Acordeón */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div
                                onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                                className={`
                  p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300
                  ${activeStep === index
                                        ? 'bg-[#161644] border-[#5865F2] border-b-4'
                                        : 'bg-[#161644]/50 border-[#5865F2]/20 hover:border-[#5865F2]/50 border-b-4'
                                    }
                `}
                            >
                                {/* Encabezado del paso */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-[#5865F2]/20 flex items-center justify-center">
                                            <step.icon className="w-6 h-6 text-[#5865F2]" />
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-2xl font-bold text-[#5865F2]">
                                                {step.number}
                                            </span>
                                            <h3 className="text-xl font-bold text-white">
                                                {step.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-white border-2 border-black flex items-center justify-center">
                                        {activeStep === index ? (
                                            <RiSubtractLine className="w-5 h-5 text-black" />
                                        ) : (
                                            <RiAddLine className="w-5 h-5 text-black" />
                                        )}
                                    </div>
                                </div>

                                {/* Contenido expandible */}
                                <AnimatePresence>
                                    {activeStep === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            {/* Línea divisoria */}
                                            <div className="h-px bg-[#5865F2]/20 my-6" />

                                            <p className="text-gray-400 leading-relaxed pl-24">
                                                {step.description}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                    {/* Sección Por Qué Elegirnos */}
                    <motion.section
                        className="mt-32"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-6">
                                ¿Por Qué Elegirnos?
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Combinamos experiencia, innovación y dedicación para entregar resultados excepcionales
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Experiencia */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#161644]/40 p-8 rounded-2xl border-2 border-[#5865F2]/20 hover:border-[#5865F2]/50 transition-all"
                            >
                                <div className="w-14 h-14 rounded-xl bg-[#5865F2]/20 flex items-center justify-center mb-6">
                                    <RiTimer2Line className="w-8 h-8 text-[#5865F2]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    +5 Años de Experiencia
                                </h3>
                                <p className="text-gray-400">
                                    Amplia experiencia en desarrollo de soluciones digitales para diversos sectores.
                                </p>
                            </motion.div>

                            {/* Proyectos Exitosos */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-[#161644]/40 p-8 rounded-2xl border-2 border-[#5865F2]/20 hover:border-[#5865F2]/50 transition-all"
                            >
                                <div className="w-14 h-14 rounded-xl bg-[#5865F2]/20 flex items-center justify-center mb-6">
                                    <RiCheckboxCircleLine className="w-8 h-8 text-[#5865F2]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    +100 Proyectos Exitosos
                                </h3>
                                <p className="text-gray-400">
                                    Hemos ayudado a numerosas empresas a alcanzar sus objetivos digitales.
                                </p>
                            </motion.div>

                            {/* Soporte 24/7 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-[#161644]/40 p-8 rounded-2xl border-2 border-[#5865F2]/20 hover:border-[#5865F2]/50 transition-all"
                            >
                                <div className="w-14 h-14 rounded-xl bg-[#5865F2]/20 flex items-center justify-center mb-6">
                                    <RiCustomerServiceLine className="w-8 h-8 text-[#5865F2]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    Soporte Continuo
                                </h3>
                                <p className="text-gray-400">
                                    Asistencia técnica y mantenimiento para garantizar el éxito a largo plazo.
                                </p>
                            </motion.div>

                            {/* Tecnologías Modernas */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-[#161644]/40 p-8 rounded-2xl border-2 border-[#5865F2]/20 hover:border-[#5865F2]/50 transition-all"
                            >
                                <div className="w-14 h-14 rounded-xl bg-[#5865F2]/20 flex items-center justify-center mb-6">
                                    <RiCodeBoxLine className="w-8 h-8 text-[#5865F2]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    Tecnologías Modernas
                                </h3>
                                <p className="text-gray-400">
                                    Utilizamos las últimas tecnologías para crear soluciones innovadoras y escalables.
                                </p>
                            </motion.div>

                            {/* Equipo Experto */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="bg-[#161644]/40 p-8 rounded-2xl border-2 border-[#5865F2]/20 hover:border-[#5865F2]/50 transition-all"
                            >
                                <div className="w-14 h-14 rounded-xl bg-[#5865F2]/20 flex items-center justify-center mb-6">
                                    <RiTeamLine className="w-8 h-8 text-[#5865F2]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    Equipo Experto
                                </h3>
                                <p className="text-gray-400">
                                    Profesionales especializados comprometidos con la excelencia.
                                </p>
                            </motion.div>

                            {/* Enfoque Personalizado */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="bg-[#161644]/40 p-8 rounded-2xl border-2 border-[#5865F2]/20 hover:border-[#5865F2]/50 transition-all"
                            >
                                <div className="w-14 h-14 rounded-xl bg-[#5865F2]/20 flex items-center justify-center mb-6">
                                    <RiSettings3Line className="w-8 h-8 text-[#5865F2]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    Enfoque Personalizado
                                </h3>
                                <p className="text-gray-400">
                                    Soluciones adaptadas a tus necesidades específicas y objetivos únicos.
                                </p>
                            </motion.div>
                        </div>
                    </motion.section>

                </div>
            </div>
        </div>
    );
}