'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed w-full z-50 bg-black/5 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-white font-bold text-2xl tracking-tight hover:text-white/80 transition-all"
          >
            AM
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link 
              href="#about" 
              className="text-white/90 hover:text-white transition-all duration-300"
            >
              Sobre mí
            </Link>
            <Link 
              href="#education" 
              className="text-white/90 hover:text-white transition-all duration-300"
            >
              Formación
            </Link>
            <Link 
              href="#music" 
              className="text-white/90 hover:text-white transition-all duration-300"
            >
              Música
            </Link>
            <Link 
              href="#contact" 
              className="text-white/90 hover:text-white transition-all duration-300"
            >
              Contacto
            </Link>
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white/90 hover:text-white transition-all"
            aria-label="Menú"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16m-7 6h7" 
              />
            </svg>
          </button>
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md py-4 md:hidden">
              <div className="container mx-auto px-6 space-y-4">
                <Link 
                  href="#about" 
                  className="block text-white/90 hover:text-white transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre mí
                </Link>
                <Link 
                  href="#education" 
                  className="block text-white/90 hover:text-white transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Formación
                </Link>
                <Link 
                  href="#music" 
                  className="block text-white/90 hover:text-white transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Música
                </Link>
                <Link 
                  href="#contact" 
                  className="block text-white/90 hover:text-white transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
              </div>
            </div>
          )}
          <Link
            href="#projects"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Proyectos
          </Link>
          <Link
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
}
