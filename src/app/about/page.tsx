import Link from "next/link";

export const metadata = {
  title: "About Us | FEGE",
  description: "Learn about the heritage, philosophy, and origins of FEGE, born in the streets of Port Harcourt.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-background min-h-[calc(100vh-80px)] py-36 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-20 z-0"></div>
      <div className="absolute w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px] top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24 gap-4">
          <span className="font-mono text-xs text-primary uppercase tracking-[0.3em] font-bold">[ BRAND MANIFESTO ]</span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black font-syne tracking-tighter uppercase text-white">
            WELCOME TO THE CULTURE
          </h1>
          <p className="text-base text-muted max-w-xl font-sans tracking-wide">
            FEGE is not just a brand name. It is a presence. Stitched with Port Harcourt heritage, elevated for the world.
          </p>
        </div>

        {/* Section 1: The Sound Origin */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-4">[ THE ORIGINS ]</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-syne uppercase text-white tracking-tight leading-none">
                BORN FROM <br/>
                <span className="text-stroke-white text-3xl sm:text-4xl">A SOUND.</span>
              </h2>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-6 font-sans text-muted text-base md:text-lg leading-relaxed">
              <p>
                Born in the streets of Port Harcourt, <strong className="text-white font-semibold">FEGE</strong> started from a sound people used when they were called out sharp, bold, unforgettable. That instant reaction became more than slang. It became identity. Energy. Presence.
              </p>
              <p>
                At FEGE, we turn everyday street expression into wearable culture. Inspired by the rhythm of Port Harcourt street culture and elevated with modern luxury streetwear aesthetics, we blend authenticity with simplicity. Every drop tells a story of self expression, movement, and identity.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Interactive Bento Philosophy Callout */}
        <section className="mb-32 bg-neutral-950 border border-white/5 p-8 md:p-16 rounded-3xl relative overflow-hidden group hover:border-primary/20 transition-all duration-500">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="flex flex-col gap-8 relative z-10">
            <span className="font-mono text-xs text-primary uppercase tracking-widest font-bold block">[ THE CORE PHILOSOPHY ]</span>
            
            <h3 className="text-lg sm:text-2xl md:text-4xl font-black font-syne uppercase text-white tracking-tight leading-normal max-w-3xl">
              FEGE IS FOR THE ONES WHO CARRY CALM CONFIDENCE. <br/>
              <span className="text-stroke-white text-xl sm:text-3xl md:text-5xl">THE ONES WHO DON&apos;T FORCE ATTENTION—THEY ATTRACT IT.</span>
            </h3>
            
            <div className="h-[1px] w-full bg-white/10 my-4"></div>
            
            <div className="flex flex-col md:flex-row justify-between gap-6 font-mono text-xs text-muted/60 uppercase tracking-widest">
              <span>LOC: PORT HARCOURT // 4.8156° N, 7.0498° E</span>
              <span className="text-primary font-bold">STREETWEAR FOR THE UNFORGETTABLE</span>
            </div>
          </div>
        </section>

        {/* Section 3: The 3 Design Pillars */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-primary uppercase tracking-widest font-bold block mb-2">[ CRAFTSMANSHIP ]</span>
            <h2 className="text-3xl md:text-4xl font-black font-syne uppercase text-white">THE 3 DETAILS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-neutral-950/40 border border-white/5 p-8 rounded-2xl flex flex-col gap-4 hover:border-primary/30 transition-colors duration-300">
              <span className="font-mono text-2xl text-primary font-bold">01</span>
              <h4 className="font-syne font-extrabold text-white text-lg uppercase tracking-tight">CLEAN CUTS</h4>
              <p className="text-sm text-muted font-sans leading-relaxed">
                Precision lines and structural heavy-weight silhouettes. Every drop is crafted to present an unforgettable shape before you say a single word.
              </p>
            </div>
            
            {/* Pillar 2 */}
            <div className="bg-neutral-950/40 border border-white/5 p-8 rounded-2xl flex flex-col gap-4 hover:border-primary/30 transition-colors duration-300">
              <span className="font-mono text-2xl text-primary font-bold">02</span>
              <h4 className="font-syne font-extrabold text-white text-lg uppercase tracking-tight">DEEP TONES</h4>
              <p className="text-sm text-muted font-sans leading-relaxed">
                A sleek, harmonized color palette of deep obsidian blacks, stark whites, and active brand crimson red. Sleek simplicity with a striking attitude.
              </p>
            </div>
            
            {/* Pillar 3 */}
            <div className="bg-neutral-950/40 border border-white/5 p-8 rounded-2xl flex flex-col gap-4 hover:border-primary/30 transition-colors duration-300">
              <span className="font-mono text-2xl text-primary font-bold">03</span>
              <h4 className="font-syne font-extrabold text-white text-lg uppercase tracking-tight">STITCHED CONFIDENCE</h4>
              <p className="text-sm text-muted font-sans leading-relaxed">
                Premium materials stitched with the authentic heritage of the streets. Moving different, thinking different, standing out naturally.
              </p>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="text-center border-t border-white/5 pt-16 flex flex-col items-center gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl md:text-2xl font-black font-syne uppercase text-white">PUT ON THE FITTING SHIRT.</h3>
            <h2 className="text-3xl md:text-5xl font-black font-syne uppercase text-primary">PUT ON FEGE.</h2>
          </div>
          
          <Link href="/collection" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 text-sm font-bold uppercase tracking-widest inline-flex items-center gap-3 transition-colors shadow-lg shadow-primary/20">
            DISCOVER THE CATALOGUE
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </Link>
        </section>
      </div>
    </div>
  );
}
