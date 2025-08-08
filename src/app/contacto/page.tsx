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
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Hablemos</h1>
        <p className="text-lg text-gray-600">Cuéntanos tu reto y te proponemos un enfoque concreto en menos de 48h.</p>
      </div>
      
      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
        <form onSubmit={submit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
            <input 
              required 
              name="name" 
              placeholder="Tu nombre completo" 
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <input 
              required 
              name="email" 
              type="email" 
              placeholder="tu@empresa.com" 
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
            <input 
              name="company" 
              placeholder="Nombre de tu empresa" 
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" 
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
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {status === "sending" ? "Enviando…" : "Enviar mensaje"}
          </button>
          
          {status === "ok" && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-medium">✅ Gracias, te contactamos muy pronto.</p>
            </div>
          )}
          
          {status === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 font-medium">❌ Hubo un error. Inténtalo de nuevo.</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}


