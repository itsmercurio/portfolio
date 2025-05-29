'use client';

export default function About() {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">Sobre mí</h2>
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-6 text-gray-200">
          <p className="text-lg">
            Soy un estudiante de FP de Grado Superior en Desarrollo de Aplicaciones Web (DAW) con una base sólida en Java, JavaScript, 
            y experiencia con entornos como NetBeans y Visual Studio Code. Me apasiona la tecnología, aprendo con rapidez y disfruto trabajar en equipo.
          </p>
          <p className="text-lg">
            Además de mi formación en desarrollo web, tengo una sólida formación musical como trompetista y director musical,
            con más de 10 años de experiencia en agrupaciones como bandas y charangas. Esto me ha enseñado a trabajar con disciplina, 
            creatividad y liderazgo.
          </p>
          <div className="grid-container">
            <div className="glass-card p-8 rounded-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Información Personal</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">🏠</span>
                  <span>Sariñena, Huesca</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">📱</span>
                  <span>+34 666 666 666</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">📧</span>
                  <span>ejemplo@email.com</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">🎓</span>
                  <span>22 años</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">💻</span>
                  <span>Desarrollador Web</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Disponibilidad</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">✅</span>
                  <span>Disponible para prácticas</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">💼</span>
                  <span>Jornada completa</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">🚗</span>
                  <span>Vehículo propio</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">📍</span>
                  <span>Disponibilidad para viajar</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
