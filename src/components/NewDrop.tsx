"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { useCart } from "@/context/CartContext";

const TRACK_COLOURWAYS = [
  {
    id: "n-track-pink",
    name: "FEGE Originals Track — Pink",
    colour: "PINK",
    label: "Colourway 02",
    tagline: "Women's / Unisex",
    price: 99,
    imageUrl: "/images/pink-track.png",
    accent: "#f472b6",
  },
  {
    id: "n-track-white",
    name: "FEGE Originals Track — White",
    colour: "WHITE",
    label: "Colourway 03",
    tagline: "White / Black",
    price: 99,
    imageUrl: "/images/track-white.png",
    accent: "#ffffff",
  },
];

const MORE_NEW = [
  { id: "n-sweat-jacket", name: "FEGE Sweat Jacket (Female)", price: 45, imageUrl: "/images/sweat-jacket.png" },
  { id: "n-pamutation-tee", name: "Pamutation “No Light Today” Tee", price: 40, imageUrl: "/images/permutation.png", imagePosition: "center top" },
  { id: "n-jesus-piece", name: "The Jesus Piece Tank", price: 60, imageUrl: "/images/jesus-tank.png", imagePosition: "left center" },
];

type Colourway = (typeof TRACK_COLOURWAYS)[number];

function TrackCard({ track }: { track: Colourway }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  // 3D tilt + spotlight that follows the cursor
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--rx", `${(0.5 - y) * 10}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 12}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };

  const handleLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  const handleAdd = () => {
    addToCart({ id: track.id, name: track.name, price: track.price, imageUrl: track.imageUrl }, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="tilt-wrap">
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ "--accent": track.accent } as React.CSSProperties}
        className="tilt-card spin-border group relative rounded-2xl p-[2px]"
      >
        <div className="relative rounded-2xl overflow-hidden bg-neutral-950">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={track.imageUrl}
              alt={track.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-110"
            />

            {/* Cursor spotlight */}
            <div className="spotlight absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Shine sweep */}
            <div className="shine absolute inset-0 z-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 pointer-events-none"></div>

            {/* Top bar */}
            <div className="absolute top-0 inset-x-0 flex items-center justify-between px-4 py-3 bg-black/60 backdrop-blur-sm border-b border-white/10 z-20">
              <span className="font-mono text-[9px] tracking-widest text-white/70 uppercase">{track.label} {"//"} {track.tagline}</span>
              <span className="font-mono text-[9px] tracking-widest font-bold uppercase flex items-center gap-1.5" style={{ color: track.accent }}>
                <span className="w-1.5 h-1.5 rounded-full animate-ping-slow inline-block" style={{ background: track.accent }}></span>
                JUST DROPPED
              </span>
            </div>

            {/* Rotating NEW sticker */}
            <div className="absolute top-16 right-4 z-20 w-20 h-20 animate-spin-slow">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path id={`circle-${track.id}`} d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                </defs>
                <circle cx="50" cy="50" r="48" fill="rgba(0,0,0,0.75)" stroke={track.accent} strokeWidth="1" />
                <text fill={track.accent} fontSize="11" fontFamily="monospace" fontWeight="700" letterSpacing="3">
                  <textPath href={`#circle-${track.id}`}>NEW COLOUR • NEW COLOUR • </textPath>
                </text>
                <text x="50" y="56" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="900">NEW</text>
              </svg>
            </div>

            {/* Huge colour word */}
            <div
              className="absolute -bottom-4 left-0 right-0 z-10 text-center font-syne font-black text-[7rem] sm:text-[9rem] leading-none tracking-tighter select-none pointer-events-none opacity-20 group-hover:opacity-40 transition-all duration-700 group-hover:-translate-y-4"
              style={{ WebkitTextStroke: `1.5px ${track.accent}`, color: "transparent" }}
            >
              {track.colour}
            </div>

            {/* Bottom info */}
            <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase font-bold block mb-2" style={{ color: track.accent }}>
                  FEGE Originals Tracksuit Set
                </span>
                <h3 className="font-syne font-black text-white text-3xl md:text-4xl uppercase leading-none tracking-tighter">
                  The {track.colour.toLowerCase()} track
                </h3>
                <span className="font-mono text-primary font-bold text-xl mt-2 inline-block">₦{track.price}K</span>
              </div>
              <button
                onClick={handleAdd}
                className={`btn font-mono text-xs tracking-widest font-bold shrink-0 transition-all duration-300 ${added ? "bg-green-600 text-white" : "btn-primary"}`}
              >
                {added ? "✓ ADDED TO BAG" : "ADD TO BAG"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NewDrop() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-black border-b border-white/5 overflow-hidden z-10">
      {/* Drifting glow blobs */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-[140px] animate-blob pointer-events-none"></div>
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] animate-blob [animation-delay:-6s] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

      {/* Reverse ticker */}
      <div className="relative w-full overflow-hidden py-4 mb-20 -rotate-1 bg-primary select-none">
        <div className="flex w-max animate-marquee-reverse">
          {[0, 1].map((track) => (
            <div key={track} className="flex gap-10 shrink-0 pr-10 text-xl sm:text-2xl font-black font-syne uppercase tracking-tight text-white items-center">
              <span>NEW LISTINGS</span><span>✦</span>
              <span>PINK TRACK</span><span>✦</span>
              <span>WHITE TRACK</span><span>✦</span>
              <span>SWEAT JACKET</span><span>✦</span>
              <span>PAMUTATION TEE</span><span>✦</span>
              <span>THE JESUS PIECE</span><span>✦</span>
              <span>FEGE JUST DEY</span><span>✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <Reveal>
            <span className="font-mono text-xs text-primary uppercase tracking-[0.3em] font-bold bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 w-max mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping-slow inline-block"></span>
              [ NEW LISTINGS // V.03 DROP ]
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black font-syne tracking-tighter uppercase text-white leading-[0.9]">
              <span className="glitch" data-text="THE TRACK.">THE TRACK.</span>
              <br />
              <span className="text-gradient-shift">NEW COLOURS.</span>
            </h2>
            <p className="text-muted max-w-xl mt-6 text-sm md:text-base leading-relaxed font-sans tracking-wide">
              You already know the green camo track. Same cut, same culture, same Port Harcourt energy — now running in two fresh colourways.
            </p>
          </Reveal>

          {/* Colourway chips */}
          <Reveal delay={150}>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] text-muted uppercase tracking-[0.25em]">Available colourways</span>
              <div className="flex flex-wrap gap-3">
                <Link href="/collection" className="flex items-center gap-2 border border-white/10 hover:border-emerald-500/60 rounded-full px-4 py-2 transition-colors">
                  <span className="w-3 h-3 rounded-full bg-emerald-700 ring-2 ring-emerald-700/30"></span>
                  <span className="font-mono text-[10px] text-white uppercase tracking-widest">Camo Green · OG</span>
                </Link>
                <span className="flex items-center gap-2 border border-pink-400/40 rounded-full px-4 py-2 animate-chip-glow">
                  <span className="w-3 h-3 rounded-full bg-pink-400 ring-2 ring-pink-400/30"></span>
                  <span className="font-mono text-[10px] text-white uppercase tracking-widest">Pink · New</span>
                </span>
                <span className="flex items-center gap-2 border border-white/40 rounded-full px-4 py-2 animate-chip-glow [animation-delay:-1.5s]">
                  <span className="w-3 h-3 rounded-full bg-white ring-2 ring-white/30"></span>
                  <span className="font-mono text-[10px] text-white uppercase tracking-widest">White · New</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Track colourways */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-28">
          {TRACK_COLOURWAYS.map((track, i) => (
            <Reveal key={track.id} delay={i * 180} className={i === 1 ? "lg:mt-12" : ""}>
              <TrackCard track={track} />
            </Reveal>
          ))}
        </div>

        {/* More new heat */}
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
            <div>
              <span className="font-mono text-xs text-primary uppercase tracking-[0.3em] font-bold block mb-3">[ ALSO JUST LANDED ]</span>
              <h3 className="text-4xl sm:text-5xl font-black font-syne tracking-tighter uppercase text-white leading-none">
                More <span className="text-stroke-primary">new heat</span>
              </h3>
            </div>
            <Link href="/collection" className="text-sm font-bold uppercase tracking-widest text-white hover:text-primary transition-colors border-b border-white hover:border-primary pb-1 w-max">
              Shop all new
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MORE_NEW.map((product, i) => (
            <Reveal key={product.id} delay={i * 150}>
              <ProductCard {...product} isNew />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
