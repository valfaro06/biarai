"use client";
import { useState } from "react";

type LeaderSpotlightProps = {
  name: string;
  role: string;
  bio: string;
  videoUrl?: string; // full URL or YouTube embed URL
  youtubeId?: string; // if provided, will build embed url
  thumbnailSrc?: string; // public path
};

export default function LeaderSpotlight({ name, role, bio, videoUrl, youtubeId, thumbnailSrc = "/leader-placeholder.svg" }: LeaderSpotlightProps) {
  const [open, setOpen] = useState(false);

  const embedSrc = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}`
    : videoUrl || "";

  return (
    <div className="rounded-xl border border-slate-200 p-6 bg-slate-50">
      <div className="grid gap-6 md:grid-cols-2 items-start">
        <div>
          <div className="text-sm text-slate-500 font-medium">Liderazgo</div>
          <div className="text-lg font-bold text-slate-900">{name}</div>
          <div className="text-slate-600 text-sm mb-3">{role}</div>
          <p className="text-slate-600 text-sm leading-relaxed">{bio}</p>
          {embedSrc && (
            <button onClick={() => setOpen(true)} className="mt-4 inline-flex items-center rounded-lg bg-blue-600 text-white px-4 py-2.5 text-sm font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg">
              Ver video
            </button>
          )}
        </div>
        <button onClick={() => embedSrc && setOpen(true)} className="group relative aspect-video w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg hover:shadow-xl transition-all">
          {/* Thumbnail */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={thumbnailSrc} alt={`Thumbnail de ${name}`} className="h-full w-full object-cover" />
          {embedSrc && (
            <div className="absolute inset-0 grid place-items-center bg-black/0 group-hover:bg-black/10 transition-colors">
              <div className="h-14 w-14 rounded-full bg-blue-600/90 text-white grid place-items-center shadow-xl group-hover:scale-110 transition-transform">▶</div>
            </div>
          )}
        </button>
      </div>

      {open && embedSrc && (
        <div className="fixed inset-0 z-[60] bg-black/50 grid place-items-center p-4" onClick={() => setOpen(false)}>
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-2xl">
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                src={embedSrc}
                title={`Video de ${name}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="mt-4 text-right">
              <button onClick={() => setOpen(false)} className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50 transition-colors">Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


