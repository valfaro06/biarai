"use client";
import { useState } from "react";

export default function CarrerasPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    cv: null as File | null
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      // Here you would implement the actual CV upload logic
      // For now, we'll simulate a successful upload
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        cv: null
      });
    } catch {
      setStatus("error");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, cv: file }));
  };

  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 pb-20 sm:pb-24 lg:pb-32">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#255465] leading-[1.1] sm:leading-tight mb-4 sm:mb-6 w-full break-words">
          Únete a <span className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light bg-clip-text text-transparent">Biarai</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
          Siempre estamos buscando talento excepcional que comparta nuestra pasión por transformar Pymes mexicanas
        </p>
      </div>

      <div className="grid gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-2 mb-12 sm:mb-16">
        {/* What We Look For - Young Executive */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 h-[500px] lg:h-[550px] group flex flex-col">
          {/* Top Image */}
          <div className="relative w-full h-48 lg:h-56 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop&crop=center"
              alt="Joven ejecutivo profesional"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-6 lg:p-8 xl:p-10 flex-1 flex flex-col justify-center">
            <div className="text-center space-y-4 lg:space-y-5">
              <div>
                <div className="text-sm text-brand-dark font-semibold mb-3">Perfil Profesional</div>
                <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-[#255465] mb-4">
                  ¿Qué <span className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light bg-clip-text text-transparent">buscamos?</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-tl from-brand-dark to-brand-medium mx-auto mb-5 rounded-full"></div>
                <ul className="space-y-2 text-gray-700 text-sm lg:text-base leading-relaxed font-medium max-w-md mx-auto text-left">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-medium rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Experiencia en consultoría, M&A, o expansión empresarial</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-medium rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Conocimiento del mercado mexicano</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-medium rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Mentalidad emprendedora y orientación a resultados</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* What We Offer - Senior Professional */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 h-[500px] lg:h-[550px] group flex flex-col">
          {/* Top Image */}
          <div className="relative w-full h-48 lg:h-56 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1594736797933-d0d9ac2b6709?w=800&h=600&fit=crop&crop=center"
              alt="Ejecutivo senior profesional"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-6 lg:p-8 xl:p-10 flex-1 flex flex-col justify-center">
            <div className="text-center space-y-4 lg:space-y-5">
              <div>
                <div className="text-sm text-brand-dark font-semibold mb-3">Beneficios</div>
                <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-[#255465] mb-4">
                  ¿Qué <span className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light bg-clip-text text-transparent">ofrecemos?</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-tl from-brand-dark to-brand-medium mx-auto mb-5 rounded-full"></div>
                <ul className="space-y-2 text-gray-700 text-sm lg:text-base leading-relaxed font-medium max-w-md mx-auto text-left">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-medium rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Trabajo directo con senior partners</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-medium rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Crecimiento acelerado y desarrollo profesional</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-medium rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Compensación competitiva y participación en éxitos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="bg-gradient-to-tl from-white via-brand-pale to-brand-light rounded-2xl p-8 sm:p-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#255465] mb-4">
            Envía tu <span className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light bg-clip-text text-transparent">candidatura</span>
          </h2>
          <p className="text-gray-600">
            Siempre evaluamos talento excepcional, aunque no tengamos posiciones abiertas en este momento
          </p>
        </div>

        {status === "success" ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#255465] mb-2">¡Candidatura recibida!</h3>
            <p className="text-gray-600 mb-6">
              Gracias por tu interés en Biarai. Revisaremos tu perfil y nos pondremos en contacto contigo pronto.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light text-white px-6 py-3 rounded-lg font-semibold hover:from-brand-dark-hover hover:via-brand-medium-hover hover:to-brand-medium transition-all duration-300"
            >
              Enviar otra candidatura
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-medium focus:border-brand-medium outline-none transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-medium focus:border-brand-medium outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-medium focus:border-brand-medium outline-none transition-colors"
                  placeholder="+52 55 1234 5678"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Posición de interés
                </label>
                <select
                  value={formData.position}
                  onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-medium focus:border-brand-medium outline-none transition-colors"
                >
                  <option value="">Selecciona una posición</option>
                  <option value="senior-consultant">Senior Consultant</option>
                  <option value="business-analyst">Business Analyst</option>
                  <option value="deal-advisory">Deal Advisory Specialist</option>
                  <option value="market-expansion">Market Expansion Lead</option>
                  <option value="operations-it">Operations & IT Consultant</option>
                  <option value="other">Otra posición</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Experiencia relevante
              </label>
              <textarea
                value={formData.experience}
                onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-medium focus:border-brand-medium outline-none transition-colors resize-none"
                placeholder="Cuéntanos brevemente sobre tu experiencia relevante en consultoría, M&A, expansión empresarial, o sectores específicos..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                CV / Resume *
              </label>
              <div className="relative">
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-medium focus:border-brand-medium outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-brand-pale file:text-brand-dark hover:file:bg-brand-light"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Formatos aceptados: PDF, DOC, DOCX (máx. 5MB)
              </p>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light text-white px-8 py-4 rounded-lg font-semibold hover:from-brand-dark-hover hover:via-brand-medium-hover hover:to-brand-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 min-h-[56px] min-w-[200px]"
              >
                {status === "sending" ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Enviando...
                  </div>
                ) : (
                  "Enviar candidatura"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}