// src/app/contacto/page.js
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    RiMapPinLine,
    RiPhoneLine,
    RiMailLine,
    RiTimeLine,
    RiWhatsappLine,
    RiSendPlaneLine,
    RiUserLine,
    RiQuestionLine
} from 'react-icons/ri';

const faqs = [
    {
        question: "¿Cuál es el tiempo promedio de desarrollo?",
        answer: "El tiempo varía según la complejidad del proyecto. Típicamente, un sitio web puede tomar de 4-8 semanas, mientras que aplicaciones más complejas pueden requerir 3-6 meses."
    },
    {
        question: "¿Qué información necesitan para comenzar?",
        answer: "Necesitamos entender tus objetivos comerciales, público objetivo, preferencias de diseño y funcionalidades requeridas. Todo esto lo discutimos en la consulta inicial."
    },
    {
        question: "¿Ofrecen mantenimiento post-lanzamiento?",
        answer: "Sí, ofrecemos planes de mantenimiento que incluyen actualizaciones, seguridad, backups y soporte técnico continuo."
    },
    {
        question: "¿Cómo se gestiona la comunicación durante el proyecto?",
        answer: "Nos mantenemos en contacto a través de reuniones regulares por videollamadas, correos electrónicos y reportes de progreso."
    },
    {
        question: "¿Pueden integrar mi proyecto con otras plataformas o servicios?",
        answer: "Sí, podemos integrar servicios como pasarelas de pago, APIs de terceros y herramientas de análisis."
    }
];

export default function ContactPage() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de envío del formulario
        console.log(formData);
    };

    return (
        <div className="min-h-screen bg-[#0B0B2B] pt-32 pb-20">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Contáctanos
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Estamos aquí para ayudarte a hacer realidad tu próximo proyecto digital
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Formulario de contacto */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-[#161644]/40 p-8 rounded-2xl border-2 border-[#5865F2]/20"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <RiUserLine className="text-[#5865F2]" />
                                    <label className="text-white">Nombre completo</label>
                                </div>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-[#0B0B2B] border border-[#5865F2]/20 text-white focus:border-[#5865F2] focus:outline-none transition-colors"
                                    placeholder="Tu nombre"
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <RiMailLine className="text-[#5865F2]" />
                                    <label className="text-white">Email</label>
                                </div>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-[#0B0B2B] border border-[#5865F2]/20 text-white focus:border-[#5865F2] focus:outline-none transition-colors"
                                    placeholder="tu@email.com"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <RiPhoneLine className="text-[#5865F2]" />
                                    <label className="text-white">Teléfono</label>
                                </div>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 rounded-lg bg-[#0B0B2B] border border-[#5865F2]/20 text-white focus:border-[#5865F2] focus:outline-none transition-colors"
                                    placeholder="+51 999 999 999"
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <RiQuestionLine className="text-[#5865F2]" />
                                    <label className="text-white">Servicio de interés</label>
                                </div>
                                <select
                                    className="w-full px-4 py-3 rounded-lg bg-[#0B0B2B] border border-[#5865F2]/20 text-white focus:border-[#5865F2] focus:outline-none transition-colors"
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                >
                                    <option value="">Selecciona un servicio</option>
                                    <option value="web">Desarrollo Web</option>
                                    <option value="app">Aplicaciones Móviles</option>
                                    <option value="design">Diseño UX/UI</option>
                                    <option value="marketing">Marketing Digital</option>
                                </select>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <RiSendPlaneLine className="text-[#5865F2]" />
                                    <label className="text-white">Mensaje</label>
                                </div>
                                <textarea
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-[#0B0B2B] border border-[#5865F2]/20 text-white focus:border-[#5865F2] focus:outline-none transition-colors"
                                    placeholder="Cuéntanos sobre tu proyecto"
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-8 py-4 bg-[#5865F2] text-white rounded-lg font-medium hover:bg-[#4752C4] transition-colors"
                            >
                                Enviar mensaje
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Información de contacto y FAQs */}
                    <div className="space-y-8">
                        {/* Info de contacto */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-[#161644]/40 p-8 rounded-2xl border-2 border-[#5865F2]/20"
                        >
                            <h2 className="text-2xl font-bold text-white mb-6">
                                Información de contacto
                            </h2>
                            <div className="space-y-4">
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-gray-400 hover:text-[#5865F2] transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[#5865F2]/20 flex items-center justify-center">
                                        <RiMapPinLine className="text-[#5865F2]" />
                                    </div>
                                    <span>Lima, Perú</span>
                                </a>

                                <a
                                    href="tel:+51999999999"
                                    className="flex items-center gap-4 text-gray-400 hover:text-[#5865F2] transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[#5865F2]/20 flex items-center justify-center">
                                        <RiPhoneLine className="text-[#5865F2]" />
                                    </div>
                                    <span>+51 999 999 999</span>
                                </a>

                                <a
                                    href="mailto:contacto@tuempresa.com"
                                    className="flex items-center gap-4 text-gray-400 hover:text-[#5865F2] transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[#5865F2]/20 flex items-center justify-center">
                                        <RiMailLine className="text-[#5865F2]" />
                                    </div>
                                    <span>contacto@tuempresa.com</span>
                                </a>

                                <div className="flex items-center gap-4 text-gray-400">
                                    <div className="w-10 h-10 rounded-lg bg-[#5865F2]/20 flex items-center justify-center">
                                        <RiTimeLine className="text-[#5865F2]" />
                                    </div>
                                    <span>Lun - Vie: 9:00 AM - 6:00 PM</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* FAQs */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#161644]/40 p-8 rounded-2xl border-2 border-[#5865F2]/20"
                        >
                            <h2 className="text-2xl font-bold text-white mb-6">
                                Preguntas frecuentes
                            </h2>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-[#5865F2]/20 last:border-0 pb-4 last:pb-0">
                                        <button
                                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                            className="w-full text-left"
                                        >
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-white font-medium">{faq.question}</h3>
                                                <span className="text-[#5865F2] text-xl">
                                                    {activeIndex === index ? '−' : '+'}
                                                </span>
                                            </div>
                                        </button>
                                        {activeIndex === index && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="text-gray-400 mt-4"
                                            >
                                                {faq.answer}
                                            </motion.p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}