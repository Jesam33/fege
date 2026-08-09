import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import TrackScreen from "@/components/TrackScreen";

export default function Home() {
  const featuredProducts = [
    { id: "f8", name: "FEGE Indigenous Camo Track", price: 60, imageUrl: "/images/fege-track-1.jpg" },
    { id: "f1", name: "FEGE Premium Sweatshirt", price: 30, imageUrl: "/images/sweatshirt.png" },
    { id: "f2", name: "“FEGE JUST DEY” Tee", price: 45, imageUrl: "/images/round_neck.png" },
    { id: "f7", name: "FEGE Girls Crop Top", price: 20, imageUrl: "/images/girls_top.png" },

    { id: "f5", name: "FEGE Street Casual Cotton Shirt", price: 40, imageUrl: "/images/cotton_shirt.png" },
    { id: "f6", name: "FEGE Street Casual Pants", price: 45, imageUrl: "/images/two-piece.png" },
  ];

  return (
    <div className="w-full bg-background overflow-hidden">
      {/* Exact Hero Section */}
      <section className="relative w-full min-h-screen flex bg-background overflow-hidden">
        
        {/* Left Sidebar Fixed for Hero */}
        <div className="hidden lg:flex absolute left-0 top-0 h-full w-24 flex-col items-center justify-center gap-8 border-r border-border/20 z-30 bg-background/50 backdrop-blur-sm">
          {/* Facebook */}
          <Link href="#" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-md">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </Link>
          {/* Instagram */}
          <Link href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-muted hover:text-white transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </Link>
          {/* Twitter */}
          <Link href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-muted hover:text-white transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </Link>
        </div> 

        {/* Content Container */}
        <div className="container mx-auto px-6 lg:pl-32 lg:pr-12 flex flex-col lg:flex-row items-center pt-32 lg:pt-24 z-20 lg:gap-16">
          
          {/* Left Text */}
          <div className="flex-1 flex flex-col justify-center pt-12 lg:pt-0">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.3em] bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full inline-block w-max mb-6">
              V.01 DROP // ORIGINALS
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white/80 font-syne tracking-[0.15em] uppercase">
              SHOP WITH
            </h2>
            
            <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-black tracking-tighter text-primary font-syne leading-none uppercase">
              FEGE
            </h1>
            
            
            <p className="text-muted max-w-md text-sm lg:text-base mb-8 leading-relaxed font-sans tracking-wide">
              FEGE isn&apos;t just a word. It&apos;s a feeling. Inspired by the rhythm of Port Harcourt street culture and elevated with luxury streetwear aesthetics.
            </p>

            <div className="flex flex-col gap-1.5 mb-10 border-l-2 border-primary pl-4">
              <span className="text-white font-mono text-xs uppercase tracking-widest font-bold">PUT ON THE FITTING SHIRT.</span>
              <span className="text-muted font-mono text-[10px] uppercase tracking-widest">PUT ON FEGE. WELCOME TO THE CULTURE.</span>
            </div>

            <div>
              <Link href="/collection" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 text-sm font-bold uppercase tracking-widest inline-flex items-center gap-3 transition-all hover:-translate-y-1 shadow-lg shadow-primary/20">
                Shop now 
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              </Link>
            </div>
          </div>

          {/* Right Visuals - Masonry Layout */}
          <div className="flex-1 w-full relative flex items-center justify-center mt-16 lg:mt-0 min-h-[600px] lg:pl-10">
            
            {/* The Glory (Glow) */}
            <div className="absolute w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-primary/10 rounded-full blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"></div>

            {/* Faint Text Background */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[12rem] lg:text-[16rem] font-black text-white/[0.02] select-none -rotate-90 origin-right translate-x-1/4 tracking-tighter pointer-events-none">
              FEGE
            </div>

            {/* Masonry Grid Container */}
            <div className="relative z-10 w-full max-w-2xl grid grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:p-0">
              {/* Column 1 */}
              <div className="flex flex-col gap-4">
                {/* Block 1 */}
                <div className="w-full h-48 md:h-64 rounded-xl bg-neutral-900/40 border border-white/5 overflow-hidden relative group backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(217,4,41,0.15)] flex flex-col justify-end p-6 cursor-pointer">
                  <Image src="/images/img_1.png" alt="FEGE Lookbook 01" fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-750 group-hover:scale-105 z-0" />
                  <div className="absolute top-4 left-4 font-mono text-[9px] text-white/40 tracking-widest uppercase z-10">
                    [01 // ORIGIN]
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity z-10"></div>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="relative z-20">
                    <span className="font-mono text-[9px] text-primary tracking-widest block mb-1 uppercase font-bold">PORT HARCOURT</span>
                    <h4 className="font-syne font-extrabold text-white text-sm md:text-base tracking-tighter uppercase leading-none">BORN IN THE STREETS</h4>
                  </div>
                </div>
                
                {/* Block 2 */}
                <div className="w-full h-32 md:h-48 rounded-xl bg-neutral-900/40 border border-white/5 overflow-hidden relative group backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(217,4,41,0.15)] flex flex-col justify-end p-6 cursor-pointer">
                  <Image src="/images/Skimask.png" alt="FEGE Lookbook 02" fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-750 group-hover:scale-105 z-0" />
                  <div className="absolute top-4 left-4 font-mono text-[9px] text-white/40 tracking-widest uppercase z-10">
                    [02 // SOUND]
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity z-10"></div>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="relative z-20">
                    <span className="font-mono text-[9px] text-primary tracking-widest block mb-1 uppercase font-bold">THE SLANG</span>
                    <h4 className="font-syne font-extrabold text-white text-sm md:text-base tracking-tighter uppercase leading-none">SHARP & BOLD</h4>
                  </div>
                </div>
              </div>
              
              {/* Column 2 (Staggered) */}
              <div className="flex flex-col gap-4 pt-8 md:pt-12">
                {/* Block 3 */}
                <div className="w-full h-40 md:h-56 rounded-xl bg-neutral-900/40 border border-white/5 overflow-hidden relative group backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(217,4,41,0.15)] flex flex-col justify-end p-6 cursor-pointer">
                  <Image src="/images/hero_man.png" alt="FEGE Lookbook 03" fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-750 group-hover:scale-105 z-0" />
                  <div className="absolute top-4 left-4 font-mono text-[9px] text-white/40 tracking-widest uppercase z-10">
                    [03 // ACTION]
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity z-10"></div>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="relative z-20">
                    <span className="font-mono text-[9px] text-primary tracking-widest block mb-1 uppercase font-bold">WEARABLE CULTURE</span>
                    <h4 className="font-syne font-extrabold text-white text-sm md:text-base tracking-tighter uppercase leading-none">FEGE JUST DEY</h4>
                  </div>
                </div>
                
                {/* Block 4 */}
                <div className="w-full h-48 md:h-64 rounded-xl bg-neutral-900/40 border border-white/5 overflow-hidden relative group backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(217,4,41,0.15)] flex flex-col justify-end p-6 cursor-pointer">
                  <Image src="/images/round_neck.png" alt="FEGE Lookbook 04" fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-750 group-hover:scale-105 z-0" />
                  <div className="absolute top-4 left-4 font-mono text-[9px] text-white/40 tracking-widest uppercase z-10">
                    [04 // PRESENCE]
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity z-10"></div>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="relative z-20">
                    <span className="font-mono text-[9px] text-primary tracking-widest block mb-1 uppercase font-bold">THE ENERGY</span>
                    <h4 className="font-syne font-extrabold text-white text-sm md:text-base tracking-tighter uppercase leading-none">CALM CONFIDENCE</h4>
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="hidden lg:flex flex-col gap-4 pt-4">
                {/* Block 5 */}
                <div className="w-full h-56 rounded-xl bg-neutral-900/40 border border-white/5 overflow-hidden relative group backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(217,4,41,0.15)] flex flex-col justify-end p-6 cursor-pointer">
                  <Image src="/images/cotton_shirt.png" alt="FEGE Lookbook 05" fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-750 group-hover:scale-105 z-0" />
                  <div className="absolute top-4 left-4 font-mono text-[9px] text-white/40 tracking-widest uppercase z-10">
                    [05 // BRAND]
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity z-10"></div>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="relative z-20">
                    <span className="font-mono text-[9px] text-primary tracking-widest block mb-1 uppercase font-bold">IDENTITY</span>
                    <h4 className="font-syne font-extrabold text-white text-sm md:text-base tracking-tighter uppercase leading-none">MOVE DIFFERENT</h4>
                  </div>
                </div>
                
                {/* Block 6 */}
                <div className="w-full h-56 rounded-xl bg-neutral-900/40 border border-white/5 overflow-hidden relative group backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(217,4,41,0.15)] flex flex-col justify-end p-6 cursor-pointer">
                  <Image src="/images/img_6.png" alt="FEGE Lookbook 06" fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-750 group-hover:scale-105 z-0" />
                  <div className="absolute top-4 left-4 font-mono text-[9px] text-white/40 tracking-widest uppercase z-10">
                    [06 // VISION]
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity z-10"></div>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="relative z-20">
                    <span className="font-mono text-[9px] text-primary tracking-widest block mb-1 uppercase font-bold">LIFESTYLE</span>
                    <h4 className="font-syne font-extrabold text-white text-sm md:text-base tracking-tighter uppercase leading-none">ATTRACT ATTENTION</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white z-20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce text-muted"><polyline points="6 9 12 15 18 9"></polyline></svg>
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-muted">Scroll down</span>
        </div>
      </section>

      {/* Street Code Infinite Marquee */}
      <section className="relative w-full overflow-hidden py-10 bg-black border-y border-white/5 select-none z-20">
        <div className="flex w-max animate-marquee">
          {/* Track 1 */}
          <div className="flex gap-16 shrink-0 pr-16 text-4xl sm:text-6xl font-black font-syne uppercase tracking-tighter text-white/20 items-center">
            <span>FEGE JUST DEY</span>
            <span className="w-3 h-3 rounded-full bg-primary shrink-0"></span>
            <span className="text-stroke-white">BORN IN PORT HARCOURT</span>
            <span className="w-3 h-3 rounded-full bg-primary shrink-0"></span>
            <span>CALM CONFIDENCE</span>
            <span className="w-3 h-3 rounded-full bg-primary shrink-0"></span>
            <span className="text-stroke-primary">WEARABLE CULTURE</span>
            <span className="w-3 h-3 rounded-full bg-primary shrink-0"></span>
            <span>ENERGY. PRESENCE.</span>
            <span className="w-3 h-3 rounded-full bg-primary shrink-0"></span>
          </div>
          {/* Track 2 */}
          <div className="flex gap-16 shrink-0 pr-16 text-4xl sm:text-6xl font-black font-syne uppercase tracking-tighter text-white/20 items-center">
            <span>FEGE JUST DEY</span>
            <span className="w-3 h-3 rounded-full bg-primary shrink-0"></span>
            <span className="text-stroke-white">BORN IN PORT HARCOURT</span>
            <span className="w-3 h-3 rounded-full bg-primary shrink-0"></span>
            <span>CALM CONFIDENCE</span>
            <span className="w-3 h-3 rounded-full bg-primary shrink-0"></span>
            <span className="text-stroke-primary">WEARABLE CULTURE</span>
            <span className="w-3 h-3 rounded-full bg-primary shrink-0"></span>
            <span>ENERGY. PRESENCE.</span>
            <span className="w-3 h-3 rounded-full bg-primary shrink-0"></span>
          </div>
        </div>
      </section>

      {/* New Release Drop Banner */}
      <section className="relative w-full pt-16 md:pt-24 pb-14 md:pb-20 bg-black border-b border-white/5 overflow-hidden z-10">
        {/* faint camo glow backdrop */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="font-mono text-xs text-primary uppercase tracking-[0.3em] font-bold bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full inline-block w-max mb-6">
                [ NEW RELEASE // V.02 DROP ]
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black font-syne tracking-tighter uppercase text-white leading-none">
                FEGE Indigenous<br />
                <span className="text-primary">Camo Track</span>
              </h2>
              <p className="text-muted max-w-xl mt-6 text-sm md:text-base leading-relaxed font-sans tracking-wide">
                The drop is here. Indigenous camo engineered for the streets — every screen, every frame, running the same wave. This is the blockbuster debut of the track.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/collection" className="btn btn-primary font-mono text-xs tracking-widest font-bold uppercase px-8 py-4 shrink-0">
                Shop the drop
              </Link>
            </div>
          </div>

          {/* 5 Screens - Blockbuster Wall */}
          <div className="flex lg:grid lg:grid-cols-5 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth lg:overflow-visible px-6 lg:px-0 -mx-6 lg:mx-0 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[1, 2, 3, 4, 5].map((screen) => (
              <div key={screen} className={`w-[80vw] sm:w-[55vw] lg:w-auto shrink-0 snap-center lg:shrink ${screen === 3 ? "lg:-translate-y-6" : ""}`}>
                <TrackScreen screen={screen} poster={`/images/fege-track-${screen}.jpg`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Editorial Section */}
      <section className="py-32 bg-background border-b border-border/40 relative overflow-hidden z-10">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 z-0"></div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <span className="font-mono text-xs text-primary uppercase tracking-[0.3em] font-bold block">[ THE SOUND OF THE STREETS ]</span>
              <h2 className="text-xl sm:text-3xl md:text-6xl font-black font-syne uppercase tracking-tight text-white leading-tight">
                FEGE ISN&apos;T JUST A WORD. <br/>
                <span className="text-stroke-white text-2xl sm:text-4xl md:text-7xl">IT&apos;S A FEELING.</span>
              </h2>
              
              <div className="h-[1px] w-full bg-gradient-to-r from-primary to-transparent my-4"></div>
              
              <p className="text-lg md:text-xl text-muted leading-relaxed font-sans max-w-xl">
                Born in the streets of Port Harcourt, <strong className="text-white font-semibold">FEGE</strong> started from a sound people used when they were called out sharp, bold, unforgettable. That instant reaction became more than slang. It became identity. Energy. Presence.
              </p>
              
              <p className="text-base text-muted/80 leading-relaxed font-sans max-w-xl">
                At FEGE, we turn everyday street expression into wearable culture. Every piece is designed to speak before you even say a word—clean cuts, bold graphics, deep tones, and confidence stitched into every detail.
              </p>
            </div>

            {/* Right Philosophy Callout */}
            <div className="lg:col-span-5 bg-neutral-950 border border-white/5 p-8 md:p-12 rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
              
              <svg className="text-primary/20 mb-8 w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black font-syne uppercase text-white tracking-tight leading-normal mb-6">
                FEGE is for the ones who carry calm confidence. The ones who don&apos;t force attention—they attract it.
              </h3>
              
              <div className="flex flex-col gap-1 font-mono text-xs text-muted uppercase tracking-widest pt-6 border-t border-white/5">
                <span>[ CULTURE EMBODIMENT ]</span>
                <span className="text-[10px] text-primary">PH STREET CULTURE V.01</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Cinema Full-Bleed Video */}
      <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden border-b border-white/5 z-10">
        <video
          src="/images/fege-track-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 z-10"></div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          <span className="font-mono text-[10px] md:text-xs text-primary uppercase tracking-[0.3em] font-bold bg-black/60 border border-primary/30 px-4 py-2 rounded-full">
            [ FEGE PICTURES PRESENTS ]
          </span>
          <h3 className="text-5xl md:text-8xl font-black font-syne uppercase text-white tracking-tighter leading-none mt-6">
            The <span className="text-primary">Camo</span> Track
          </h3>
          <p className="text-muted text-sm md:text-base max-w-xl mt-6 leading-relaxed font-sans tracking-wide">
            One fabric. One fit. Indigenous camo straight from the culture. Watch the drop film, then lock your fit.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link href="/collection" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 text-sm font-bold uppercase tracking-widest inline-flex items-center gap-3 transition-all hover:-translate-y-1 shadow-lg shadow-primary/20">
              Shop the drop
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </Link>
            <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest">
              THE WALL OF SCREENS AWAITS ▲
            </span>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 bg-card relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black font-syne tracking-tighter uppercase text-white">Featured</h2>
              <p className="text-primary mt-2 tracking-widest uppercase text-sm font-bold font-mono">[ NEW ARRIVALS DROP ]</p>
            </div>
            <Link href="/collection" className="text-sm font-bold uppercase tracking-widest text-white hover:text-primary transition-colors border-b border-white hover:border-primary pb-1">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
