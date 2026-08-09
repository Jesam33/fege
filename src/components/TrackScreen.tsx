"use client";
import { useEffect, useRef } from "react";

interface TrackScreenProps {
  screen: number;
  poster: string;
}

export default function TrackScreen({ screen, poster }: TrackScreenProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-neutral-950 border border-white/10 group hover:border-primary/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(217,4,41,0.2)]">
      <video
        ref={videoRef}
        src="/images/fege-track-video.mp4"
        poster={poster}
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10 pointer-events-none"></div>

      {/* Cinema top bar */}
      <div className="absolute top-0 inset-x-0 flex items-center justify-between px-3 py-2 bg-black/70 backdrop-blur-sm border-b border-white/10 z-20">
        <span className="font-mono text-[8px] tracking-widest text-white/70 uppercase">FEGE Pictures</span>
        <span className="font-mono text-[8px] tracking-widest text-primary font-bold uppercase flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block"></span>
          REC
        </span>
      </div>

      {/* Screen bottom label */}
      <div className="absolute inset-x-0 bottom-0 p-4 z-20">
        <span className="font-mono text-[9px] text-primary tracking-[0.2em] uppercase font-bold block mb-1">Screen 0{screen}</span>
        <h4 className="font-syne font-extrabold text-white text-sm uppercase leading-tight tracking-tight">
          The Camo Track
        </h4>
        <span className="font-mono text-[8px] text-muted uppercase tracking-widest">V.02 / PH</span>
      </div>
    </div>
  );
}