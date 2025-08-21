export default function LiderazgoPage() {
  const leaders = [
    {
      name: "Guillermo Bilbao",
      role: "Deal Advisory",
      bio: "+15 años en consultoría en México liderando M&A, project finance y análisis financiero.",
      thumbnailSrc: "/executive-1.jpeg",
    },
    {
      name: "Alejandro Araiza",
      role: "Nuevos Mercados",
      bio: "CPC con +20 años en Auditoría y Fiscal; socio en RSM México, experiencia en administración tercerizada e inicio de compañías.",
      thumbnailSrc: "/executive-2.jpeg",
    },
    {
      name: "Peter Kroll",
      role: "Operaciones y TI",
      bio: "+15 años liderando TI y transformación de negocios en Europa, Asia, EE. UU. y LatAm; relaciones con Fortune 500.",
      thumbnailSrc: "/executive-3.jpeg",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 pb-20 sm:pb-24 lg:pb-32">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] sm:leading-tight mb-4 sm:mb-6 w-full break-words">
          <span className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light bg-clip-text text-transparent">Liderazgo</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-5 sm:leading-relaxed max-w-3xl mx-auto opacity-90">
          Experiencia senior con trayectoria probada en transformación empresarial
        </p>
      </div>
      <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {leaders.map((l) => (
          <div key={l.name} className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 min-h-[450px] sm:min-h-[500px] md:min-h-[550px] group">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={l.thumbnailSrc}
                alt={`${l.name} profile`}
                className="w-full h-full object-cover object-center opacity-15 group-hover:opacity-25 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8 md:p-10 h-full flex flex-col justify-end">
              <div className="text-center space-y-3 sm:space-y-4">
                {/* Profile Image - Larger */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-tl from-brand-pale to-brand-light border-4 border-white shadow-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={l.thumbnailSrc}
                    alt={`${l.name} profile`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <div className="text-xs sm:text-sm text-brand-dark font-semibold mb-2">{l.role}</div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {l.name}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-tl from-brand-dark to-brand-medium mx-auto mb-4 rounded-full"></div>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-sm mx-auto">
                    {l.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


