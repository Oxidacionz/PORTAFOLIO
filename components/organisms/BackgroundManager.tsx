import React from 'react';

export const BackgroundManager: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden font-sans">
      
      {/* 
        =======================================================================
        CAPA MODO OSCURO (FONDO ESTRELLADO + NAVE ROJA) - CAPA BASE
        Esta capa siempre está visible al fondo.
        =======================================================================
      */}
      <div className="absolute inset-0 bg-[#0f172a] flex items-center justify-center">
        {/* Generador de estrellas estilo Pixel Art */}
        <div className="absolute inset-0 opacity-80" style={{
          backgroundImage: `
            radial-gradient(1px 1px at 10% 10%, white 100%, transparent),
            radial-gradient(1px 1px at 20% 30%, white 100%, transparent),
            radial-gradient(2px 2px at 40% 70%, white 100%, transparent),
            radial-gradient(1px 1px at 60% 20%, white 100%, transparent),
            radial-gradient(2px 2px at 80% 50%, white 100%, transparent),
            radial-gradient(1px 1px at 90% 90%, white 100%, transparent),
            radial-gradient(1px 1px at 30% 80%, white 100%, transparent),
            radial-gradient(2px 2px at 70% 10%, #a855f7 100%, transparent),
            radial-gradient(2px 2px at 15% 60%, #3b82f6 100%, transparent)
          `,
          backgroundSize: '500px 500px'
        }}></div>

        {/* Planeta Pixel Art Decorativo (Fijo/Pulsando) */}
        <div className="absolute top-[20%] left-[10%] opacity-20 animate-pulse">
           <svg width="60" height="60" viewBox="0 0 10 10" className="pixelated w-16 h-16 md:w-32 md:h-32" shapeRendering="crispEdges">
              <path d="M3,0 h4 v1 h-4 z M2,1 h1 v1 h-1 z M7,1 h1 v1 h-1 z M1,2 h1 v1 h-1 z M8,2 h1 v1 h-1 z M0,3 h1 v4 h-1 z M9,3 h1 v4 h-1 z M1,7 h1 v1 h-1 z M8,7 h1 v1 h-1 z M2,8 h1 v1 h-1 z M7,8 h1 v1 h-1 z M3,9 h4 v1 h-4 z" fill="#4f46e5"/>
              <rect x="2" y="3" width="6" height="1" fill="#818cf8"/>
              <rect x="1" y="4" width="2" height="1" fill="#818cf8"/>
           </svg>
        </div>

        {/* NAVE ESPACIAL ROJA Pixel Art (Diagonal) */}
        <div className="absolute w-20 h-20 animate-fly-diagonal z-0">
          <svg viewBox="0 0 16 16" className="pixelated w-full h-full transform rotate-45" shapeRendering="crispEdges">
             {/* Red Ship Structure based on request */}
             {/* Central Body - Dark Red Base */}
             <path d="M6,4 h4 v6 h-4 z" fill="#be123c" />
             
             {/* Wings - Red */}
             <path d="M3,8 h3 v4 h-3 z" fill="#e11d48" />
             <path d="M10,8 h3 v4 h-3 z" fill="#e11d48" />
             
             {/* Nose - Red */}
             <path d="M7,1 h2 v3 h-2 z" fill="#e11d48" />
             <rect x="7.5" y="0" width="1" height="1" fill="#e11d48" />

             {/* Core - Yellow Bright */}
             <rect x="7" y="5" width="2" height="3" fill="#fbbf24" />
             <rect x="7.5" y="6" width="1" height="1" fill="#fff" opacity="0.5" />

             {/* Guns/Details - Cyan */}
             <rect x="2" y="7" width="1" height="2" fill="#06b6d4" />
             <rect x="13" y="7" width="1" height="2" fill="#06b6d4" />

             {/* Thrusters - Blue/Animated */}
             <rect x="4" y="12" width="1" height="3" fill="#3b82f6" className="animate-pulse" />
             <rect x="7" y="10" width="2" height="4" fill="#60a5fa" className="animate-pulse" />
             <rect x="11" y="12" width="1" height="3" fill="#3b82f6" className="animate-pulse" />
          </svg>
        </div>

        {/* Gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-blue-900/10"></div>
      </div>

      {/* 
        =======================================================================
        CAPA MODO CLARO (CIELO CON NUBES + AVIÓN) - CAPA SUPERIOR
        =======================================================================
      */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-200 to-white transition-[clip-path] duration-[1500ms] ease-in-out"
        id="light-layer"
      >
        <style dangerouslySetInnerHTML={{__html: `
          #light-layer {
            clip-path: circle(150% at 100% 0%);
          }
          html.dark #light-layer {
            clip-path: circle(0% at calc(100% - 3.5rem) 3.5rem);
          }
          @media (max-width: 768px) {
            html.dark #light-layer {
              clip-path: circle(0% at calc(100% - 3.25rem) 3.25rem);
            }
          }
        `}} />

        <div className="relative w-full h-full">
          
          {/* Nube 1 */}
          <div className="absolute top-[15%] left-[10%] animate-pixel-float opacity-90">
            <svg width="100" height="60" viewBox="0 0 20 12" className="pixelated w-32 h-20 md:w-48 md:h-32 text-white fill-current" shapeRendering="crispEdges">
              <path d="M4,4 h4 v-2 h6 v2 h2 v2 h2 v4 h-16 v-4 h2 z" />
              <path d="M5,5 h12 v4 h-12 z" fill="#e0f2fe" opacity="0.5"/>
            </svg>
          </div>

          {/* Nube 2 */}
          <div className="absolute top-[30%] right-[20%] animate-pixel-float opacity-80" style={{ animationDelay: '1.5s' }}>
             <svg width="80" height="50" viewBox="0 0 16 10" className="pixelated w-24 h-16 md:w-40 md:h-24 text-white fill-current" shapeRendering="crispEdges">
              <path d="M4,2 h4 v-2 h4 v2 h2 v2 h2 v4 h-14 v-4 h2 z" />
            </svg>
          </div>

          {/* Nube 3 */}
          <div className="absolute top-[60%] left-[25%] animate-pixel-float opacity-60" style={{ animationDelay: '3s' }}>
             <svg width="60" height="40" viewBox="0 0 12 8" className="pixelated w-20 h-12 md:w-28 md:h-20 text-white fill-current" shapeRendering="crispEdges">
              <path d="M2,2 h4 v-2 h4 v2 h2 v4 h-12 v-4 z" />
            </svg>
          </div>

          {/* AVIÓN BLANCO Pixel Art Volando (Horizontal) */}
          <div className="absolute top-[25%] -left-[10%] w-24 h-12 animate-fly-horizontal opacity-90 z-20">
            <svg viewBox="0 0 24 12" className="pixelated w-full h-full" shapeRendering="crispEdges">
              {/* Main Body - White */}
              <path d="M4,6 h3 v-1 h4 v-1 h6 v1 h3 v1 h-1 v1 h-1 v1 h-4 v1 h-1 v-1 h-3 v1 h-1 v-1 h-4 v-1 h-1 v-1 z" fill="white" />
              {/* Tail fin */}
              <path d="M2,3 h3 v3 h-3 z" fill="white" />
              {/* Windows - Light Blue */}
              <rect x="11" y="5" width="1" height="1" fill="#7dd3fc" />
              <rect x="13" y="5" width="1" height="1" fill="#7dd3fc" />
              <rect x="15" y="5" width="1" height="1" fill="#7dd3fc" />
              {/* Wing (Side view approximation) */}
              <rect x="9" y="7" width="4" height="1" fill="#e2e8f0" />
            </svg>
          </div>
          
          {/* Brillo solar decorativo */}
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-yellow-200/40 rounded-full blur-[100px] transform translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
        </div>
      </div>

    </div>
  );
};