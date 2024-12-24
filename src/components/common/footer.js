// src/components/common/footer.js
'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
  RiWhatsappFill,
  RiInstagramLine,
  RiFacebookBoxFill,
  RiTiktokFill,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine
} from 'react-icons/ri';

const FooterLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-400 hover:text-[#5865F2] transition-colors duration-300"
  >
    {children}
  </Link>
);

const SocialIcon = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-[#5865F2] transition-colors duration-300"
  >
    <Icon className="w-6 h-6" />
  </a>
);

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0B2B] mt-auto overflow-visible">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 overflow-visible pointer-events-none">
        <Image
          src="/footer-bg.png"
          alt="Footer Background"
          fill
          className="object-cover opacity-60"
          quality={100}
          priority
        />
        {/* Overlay gradiente para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B2B] via-[#0B0B2B]/80 to-transparent" />
      </div>

      {/* Contenido del Footer */}
      <div className="relative z-10">
        {/* Sección principal del footer */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo y descripción */}
            <div className="space-y-4">
              <Link href="/" className="text-2xl font-bold text-[#5865F2]">
                TechWizard
              </Link>
              <p className="text-gray-400 mt-4">
                Transformamos ideas en experiencias digitales excepcionales.
                Construimos el futuro digital, un proyecto a la vez.
              </p>
              <div className="flex gap-4 mt-6">
                <SocialIcon
                  href="https://www.facebook.com/profile.php?id=61570616997842"
                  icon={RiFacebookBoxFill}
                />
                <SocialIcon
                  href="https://www.instagram.com/tech_wizard_2025/"
                  icon={RiInstagramLine}
                />
                <SocialIcon
                  href="https://www.tiktok.com/@tech_wizard_2025"
                  icon={RiTiktokFill}
                />
                <SocialIcon
                  href="https://wa.me/997704395"
                  icon={RiWhatsappFill}
                />
              </div>
            </div>

            {/* Links Servicios */}
            <div className="backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-4">Servicios</h3>
              <ul className="space-y-3">
                <li><FooterLink href="/servicios#desarrollo-web">Desarrollo Web</FooterLink></li>
                <li><FooterLink href="/servicios#aplicaciones-moviles">Apps Móviles</FooterLink></li>
                <li><FooterLink href="/servicios#diseno-ux-ui">Diseño UX/UI</FooterLink></li>
                <li><FooterLink href="/servicios#marketing-digital">Marketing Digital</FooterLink></li>
              </ul>
            </div>

            {/* Links Compañía */}
            <div className="backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-4">Compañía</h3>
              <ul className="space-y-3">
                <li><FooterLink href="/nosotros">Sobre Nosotros</FooterLink></li>
                <li><FooterLink href="/portfolio">Portfolio</FooterLink></li>
                <li><FooterLink href="/blog">Blog</FooterLink></li>
                <li><FooterLink href="/contacto">Contacto</FooterLink></li>
              </ul>
            </div>

            {/* Información de contacto */}
            <div className="backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-4">Contacto</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-400">
                  <RiMapPinLine className="flex-shrink-0" />
                  <span>Lima, Perú</span>
                </li>
                <li>
                  <a
                    href="tel:+51997704395"
                    className="flex items-center gap-2 text-gray-400 hover:text-[#5865F2] transition-colors duration-300"
                  >
                    <RiPhoneLine className="flex-shrink-0" />
                    <span>+51 997704395</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contacto@techwizard.com"
                    className="flex items-center gap-2 text-gray-400 hover:text-[#5865F2] transition-colors duration-300"
                  >
                    <RiMailLine className="flex-shrink-0" />
                    <span>contacto@techwizard.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Barra inferior de derechos */}
        <div className="border-t border-[#5865F2]/20">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} TechWizard. Todos los derechos reservados.
              </p>
              <div className="flex gap-6 text-sm">
                <FooterLink href="/privacidad">Política de Privacidad</FooterLink>
                <FooterLink href="/terminos">Términos y Condiciones</FooterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}