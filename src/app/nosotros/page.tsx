export default function NosotrosPage() {
  const stats = [
    { value: "150+", label: "Proyectos exitosos" },
    { value: "8", label: "Años de experiencia" },
    { value: "95%", label: "Satisfacción del cliente" },
    { value: "$2.4B", label: "Valor en transacciones" }
  ];

  const values = [
    {
      title: "Excelencia técnica",
      description: "Combinamos rigor analítico con experiencia práctica para entregar soluciones de clase mundial."
    },
    {
      title: "Compromiso genuino", 
      description: "Tu éxito es nuestro éxito. Trabajamos hasta lograr resultados tangibles y sostenibles."
    },
    {
      title: "Conocimiento local",
      description: "Entendemos profundamente el mercado mexicano, sus regulaciones y oportunidades únicas."
    },
    {
      title: "Mentalidad emprendedora",
      description: "Pensamos como empresarios, actuamos como consultores, entregamos como partners."
    }
  ];

  const team = [
    {
      name: "María González",
      role: "Managing Partner",
      experience: "Ex-McKinsey, 12 años en M&A",
      specialty: "Estrategia y fusiones"
    },
    {
      name: "Carlos Mendoza", 
      role: "Senior Partner",
      experience: "Ex-Bain, especialista en México",
      specialty: "Expansión de mercados"
    },
    {
      name: "Ana Rodríguez",
      role: "Partner",
      experience: "Ex-BCG, experta en digital",
      specialty: "Transformación y TI"
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 pb-20 sm:pb-24 lg:pb-32">
      {/* Header */}
      <div className="text-center mb-16 lg:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 w-full">
          <span className="bg-gradient-to-r from-[#68AEC8] to-[#255465] bg-clip-text text-transparent drop-shadow-lg">Nosotros</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-5xl mx-auto mb-12">
          Somos el partner estratégico que acelera el crecimiento de empresas mexicanas con visión global
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 bg-gradient-to-tl from-white via-brand-pale to-brand-light rounded-2xl p-6 sm:p-8 lg:p-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-dark mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base lg:text-lg text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <div className="mb-16 lg:mb-20">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light bg-clip-text text-transparent">Historia</span>
            </h2>
            <div className="space-y-6 text-lg lg:text-xl text-gray-600 leading-relaxed">
              <p>
                Nacimos de una convicción profunda: las Pymes mexicanas tienen el potencial de competir globalmente, 
                pero necesitan el acompañamiento estratégico adecuado.
              </p>
              <p>
                Fundada por ex-consultores de firmas top-tier, Biarai combina la metodología de consultoría de 
                clase mundial con un entendimiento profundo del mercado mexicano y una mentalidad genuinamente emprendedora.
              </p>
              <p>
                No somos consultores tradicionales. Somos builders que trabajamos hombro a hombro contigo hasta 
                lograr resultados tangibles y sostenibles.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12 shadow-lg">
            <div className="text-center">
              <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light rounded-full flex items-center justify-center text-white text-4xl lg:text-5xl font-bold mb-6 mx-auto">
                8
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Años de experiencia</h3>
              <p className="text-gray-600 lg:text-lg leading-relaxed">transformando el panorama empresarial mexicano</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light bg-clip-text text-transparent">Valores</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Los principios que guían cada decisión y cada proyecto que emprendemos
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-medium rounded-full"></span>
                {value.title}
              </h3>
              <p className="text-gray-600 lg:text-lg leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light bg-clip-text text-transparent">Equipo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertos con experiencia en firmas top-tier y profundo conocimiento del mercado mexicano
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light rounded-full flex items-center justify-center text-white text-2xl lg:text-3xl font-bold mb-6 mx-auto">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-brand-medium font-semibold mb-3 lg:text-lg">{member.role}</p>
              <p className="text-gray-600 mb-2 lg:text-lg">{member.experience}</p>
              <p className="text-sm lg:text-base text-gray-500 font-medium">{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light rounded-2xl p-8 lg:p-12 text-center text-white">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
          ¿Listo para transformar tu empresa?
        </h2>
        <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Conversemos sobre cómo podemos acelerar el crecimiento de tu Pyme con estrategia, datos e IA
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/contacto" 
            className="bg-white text-brand-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Agendar consulta gratuita
          </a>
          <a 
            href="/proyectos" 
            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-dark transition-colors inline-block"
          >
            Ver nuestros proyectos
          </a>
        </div>
      </div>
    </section>
  );
}


