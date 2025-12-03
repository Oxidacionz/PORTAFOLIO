
import { BackgroundManager } from './components/organisms/BackgroundManager';
import { ThemeToggle } from './components/organisms/ThemeToggle';
import { Hero } from './components/organisms/Hero';

function App() {
  return (
    <div className="relative min-h-screen font-sans">
      <BackgroundManager />
      <ThemeToggle />

      <main className="relative z-10">
        <Hero />

        {/* About / Philosophy Section */}
        {/* Increased transparency for better background visibility */}
        <section className="py-20 px-6 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md transition-colors duration-300">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-sky-800 dark:text-sky-400 mb-12 drop-shadow-sm">Mi Enfoque de Desarrollo</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/70 dark:bg-gray-800/70 p-8 rounded-2xl shadow-lg border-l-4 border-sky-500 hover:transform hover:-translate-y-1 transition-all backdrop-blur-sm">
                <h3 className="text-xl font-bold text-sky-700 dark:text-sky-300 mb-4 flex items-center gap-2">
                  <span>💡</span> Filosofía de Trabajo
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  Creo en la combinación de arquitectura limpia, buenas prácticas y estética moderna.
                  Cada proyecto debe transmitir claridad, eficiencia y una experiencia de usuario excepcional.
                </p>
              </div>
              <div className="bg-white/70 dark:bg-gray-800/70 p-8 rounded-2xl shadow-lg border-l-4 border-indigo-500 hover:transform hover:-translate-y-1 transition-all backdrop-blur-sm">
                <h3 className="text-xl font-bold text-sky-700 dark:text-sky-300 mb-4 flex items-center gap-2">
                  <span>🚀</span> Especialidades
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  Desarrollo full stack con Python y JavaScript, APIs RESTful, aplicaciones escalables
                  y soluciones cloud-ready. Enfocado en crear productos que marquen la diferencia.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-8 text-center text-gray-500 dark:text-gray-400 bg-white/20 dark:bg-black/20 backdrop-blur text-sm">
        <p>© 2025 Joseph Bracho — Portafolio Full Stack</p>
      </footer>
    </div>
  );
}

export default App;