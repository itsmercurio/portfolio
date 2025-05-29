'use client';

export default function Music() {
  return (
    <section id="music" className="section-container">
      <h2 className="section-title">🎶 Trayectoria Musical</h2>
      <div className="max-w-4xl mx-auto w-full">
        <div className="grid-container">
          {/* Director Musical */}
          <div className="glass-card p-8 rounded-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">Director Musical</h3>
            <p className="text-gray-300">Asociación Vientos de Monegros</p>
            <p className="text-gray-400">Enero 2024 – Actualidad</p>
          </div>

          {/* Experiencia en Bandas */}
          <div className="glass-card p-8 rounded-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">Experiencia en Bandas</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-white">Charanga Guacamayos</h4>
                <p className="text-gray-400">Abril 2022 – Actualidad</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Banda Virgen del Pilar</h4>
                <p className="text-gray-400">Desde Enero 2025</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Banda de Sariñena</h4>
                <p className="text-gray-400">Desde 2021</p>
              </div>
            </div>
          </div>

          {/* Formación Musical */}
          <div className="glass-card p-8 rounded-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">Formación Musical</h3>
            <p className="text-gray-300 mb-4">Escuela Municipal de Música, Sariñena (2012–2022)</p>
            <h4 className="text-lg font-semibold text-white mb-2">Instrumentos</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Trompeta</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Guitarra Española</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Bandurria Aragonesa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
