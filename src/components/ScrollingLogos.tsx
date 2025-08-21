'use client';

import { useEffect } from 'react';

export default function ScrollingLogos() {
  const logos = ["Logo 1", "Logo 2", "Logo 3", "Logo 4", "Logo 5", "Logo 6", "Logo 7", "Logo 8", "Logo 9", "Logo 10", "Logo 11", "Logo 12"];

  useEffect(() => {
    // Agregar estilos CSS dinámicamente
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scrollLogos {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
      .animate-scroll-logos {
        animation: scrollLogos 30s linear infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="pt-6 sm:pt-8 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll-logos">
          {/* Primera iteración */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-3 sm:mx-6 flex items-center justify-center"
            >
              <div className="w-28 sm:w-32 md:w-40 h-12 sm:h-14 md:h-16 bg-white/60 backdrop-blur-sm rounded-lg flex items-center justify-center border border-gray-200/50 hover:bg-white/80 transition-colors">
                <span className="text-gray-500 text-xs sm:text-sm font-medium">{logo}</span>
              </div>
            </div>
          ))}
          
          {/* Segunda iteración para loop continuo */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-3 sm:mx-6 flex items-center justify-center"
            >
              <div className="w-28 sm:w-32 md:w-40 h-12 sm:h-14 md:h-16 bg-white/60 backdrop-blur-sm rounded-lg flex items-center justify-center border border-gray-200/50 hover:bg-white/80 transition-colors">
                <span className="text-gray-500 text-xs sm:text-sm font-medium">{logo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}