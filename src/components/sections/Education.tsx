'use client';

export default function Education() {
  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Formación y Habilidades</h2>
      <div className="max-w-4xl mx-auto w-full">
        <div className="grid-container">
          {/* Formación Académica */}
          <div className="glass-card p-8 rounded-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6">🎓 Formación Académica</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white">Desarrollo de Aplicaciones Web</h4>
                <p className="text-gray-400">CPIFP Montearagón (2023-2025)</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Bachillerato de Ciencias</h4>
                <p className="text-gray-400">IES Monegros Gaspar-Lax (2021-2023)</p>
              </div>
            </div>
          </div>

          {/* Competencias y Habilidades */}
          <div className="glass-card p-8 rounded-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6">🧠 Competencias</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Lenguajes de Programación</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Java</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">HTML</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">CSS</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Frameworks y Herramientas</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Git</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Bases de Datos</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">MySQL</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
