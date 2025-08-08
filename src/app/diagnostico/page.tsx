"use client";
import { useState } from "react";

export default function DiagnosticoPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, source: "diagnostico" }),
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
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Diagnóstico</h1>
      <p className="text-foreground/70 mb-6">Cuestionario breve para recomendarte un enfoque. Te contactaremos con resultados.</p>
      <form onSubmit={submit} className="grid gap-4">
        <input required name="name" placeholder="Nombre" className="border rounded-md px-3 py-2 bg-transparent" />
        <input required name="email" type="email" placeholder="Email" className="border rounded-md px-3 py-2 bg-transparent" />
        <input name="company" placeholder="Empresa" className="border rounded-md px-3 py-2 bg-transparent" />
        <select name="focus" className="border rounded-md px-3 py-2 bg-transparent">
          <option value="deal">Deal Advisory</option>
          <option value="mercados">Nuevos Mercados</option>
          <option value="ops">Operaciones & TI</option>
        </select>
        <textarea name="notes" placeholder="Contexto / objetivo" rows={4} className="border rounded-md px-3 py-2 bg-transparent" />
        <button disabled={status === "sending"} className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 disabled:opacity-50">
          {status === "sending" ? "Enviando…" : "Enviar"}
        </button>
        {status === "ok" && <p className="text-green-600">Gracias, te escribimos con el resultado.</p>}
        {status === "error" && <p className="text-red-600">Hubo un error. Intenta de nuevo.</p>}
      </form>
    </section>
  );
}


