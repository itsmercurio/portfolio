'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full Stack Developer';
  const typingSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black/5 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg tracking-tight">
          Alexis Mansilla
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 font-light tracking-wide">
          {typedText}
          <span className="animate-blink">|</span>
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
          <a
            href="#projects"
            className="w-48 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20
                     border border-white/20 backdrop-blur-sm hover:from-purple-500/30 hover:to-pink-500/30
                     transition-all duration-300 font-medium text-white/90 hover:text-white
                     hover:scale-105 hover:shadow-lg shadow-white/20 transform-gpu"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="w-48 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-teal-500/20
                     border border-white/20 backdrop-blur-sm hover:from-blue-500/30 hover:to-teal-500/30
                     transition-all duration-300 font-medium text-white/90 hover:text-white
                     hover:scale-105 hover:shadow-lg shadow-white/20 transform-gpu"
          >
            Contacto
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
