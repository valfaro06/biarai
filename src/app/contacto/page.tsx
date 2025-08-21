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
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 pb-20 sm:pb-24 lg:pb-32">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] sm:leading-tight mb-4 sm:mb-6 w-full break-words">
          <span className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light bg-clip-text text-transparent">Hablemos</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-5 sm:leading-relaxed max-w-full opacity-90">
          Cuéntanos tu reto y te proponemos un enfoque concreto en menos de 48h.
        </p>
      </div>
      
      <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8 shadow-lg w-full">
        <form onSubmit={submit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
            <input 
              required 
              name="name" 
              placeholder="Tu nombre completo" 
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-medium focus:border-brand-medium outline-none" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <input 
              required 
              name="email" 
              type="email" 
              placeholder="tu@empresa.com" 
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-medium focus:border-brand-medium outline-none" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
            <input 
              name="company" 
              placeholder="Nombre de tu empresa" 
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-medium focus:border-brand-medium outline-none" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
            <textarea 
              name="message" 
              placeholder="¿En qué podemos ayudarte? Comparte detalles sobre tu proyecto o reto..." 
              rows={5} 
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none" 
            />
          </div>
          
          <button 
            disabled={status === "sending"} 
            className="w-full bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light text-white px-6 py-4 rounded-lg font-semibold hover:from-brand-dark-hover hover:via-brand-medium-hover hover:to-brand-light disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 min-h-[52px] text-base"
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


