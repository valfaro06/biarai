"use client";
import { useState } from "react";

export default function ContactoPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Bad response");
      setStatus("ok");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 pb-20 sm:pb-24 lg:pb-32">
      <div className="text-center mb-12 lg:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 w-full">
          <span className="bg-gradient-to-r from-[#68AEC8] to-[#255465] bg-clip-text text-transparent drop-shadow-lg">Hablemos</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto opacity-90">
          Cuéntanos tu reto y te proponemos un enfoque concreto en menos de 48h.
        </p>
      </div>
      
      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 lg:p-10 shadow-lg w-full">
        <form onSubmit={submit} className="space-y-6 lg:space-y-8">
          <div>
            <label className="block text-base lg:text-lg font-medium text-gray-700 mb-3">Nombre *</label>
            <input 
              required 
              name="name" 
              placeholder="Tu nombre completo" 
              className="w-full border border-gray-300 rounded-lg px-4 py-4 lg:py-5 text-base lg:text-lg focus:ring-2 focus:ring-brand-medium focus:border-brand-medium outline-none" 
            />
          </div>
          
          <div>
            <label className="block text-base lg:text-lg font-medium text-gray-700 mb-3">Email *</label>
            <input 
              required 
              name="email" 
              type="email" 
              placeholder="tu@empresa.com" 
              className="w-full border border-gray-300 rounded-lg px-4 py-4 lg:py-5 text-base lg:text-lg focus:ring-2 focus:ring-brand-medium focus:border-brand-medium outline-none" 
            />
          </div>
          
          <div>
            <label className="block text-base lg:text-lg font-medium text-gray-700 mb-3">Empresa</label>
            <input 
              name="company" 
              placeholder="Nombre de tu empresa" 
              className="w-full border border-gray-300 rounded-lg px-4 py-4 lg:py-5 text-base lg:text-lg focus:ring-2 focus:ring-brand-medium focus:border-brand-medium outline-none" 
            />
          </div>
          
          <div>
            <label className="block text-base lg:text-lg font-medium text-gray-700 mb-3">Mensaje</label>
            <textarea 
              name="message" 
              placeholder="¿En qué podemos ayudarte? Comparte detalles sobre tu proyecto o reto..." 
              rows={6} 
              className="w-full border border-gray-300 rounded-lg px-4 py-4 lg:py-5 text-base lg:text-lg focus:ring-2 focus:ring-brand-medium focus:border-brand-medium outline-none resize-none" 
            />
          </div>
          
          <button 
            disabled={status === "sending"} 
            className="w-full bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light text-white px-8 py-5 lg:py-6 rounded-lg font-semibold hover:from-brand-dark-hover hover:via-brand-medium-hover hover:to-brand-light disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 min-h-[60px] text-lg lg:text-xl"
          >
            {status === "sending" ? "Enviando…" : "Enviar mensaje"}
          </button>
          
          {status === "ok" && (
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 font-medium">✅ Gracias, te contactamos muy pronto.</p>
            </div>
          )}
          
          {status === "error" && (
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <p className="text-indigo-800 font-medium">❌ Hubo un error. Inténtalo de nuevo.</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}


