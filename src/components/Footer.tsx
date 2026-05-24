import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-card border-t border-border py-16 mt-auto">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-left">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-black tracking-tighter uppercase text-white font-syne">FEGE</span>
          <span className="text-xs text-muted leading-relaxed font-sans max-w-xs">
            Authentic street expression turned wearable culture. Born in Port Harcourt, crafted for those who carry calm confidence.
          </span>
          <span className="font-mono text-[9px] text-primary tracking-[0.25em] uppercase font-bold">
            PH // 4.8156° N, 7.0498° E
          </span>
        </div>

        {/* Links Column */}
        <div className="flex flex-col gap-4 md:items-center">
          <div>
            <h4 className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-white mb-4">// NAVIGATION</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/" className="text-xs text-muted hover:text-primary transition-colors font-mono tracking-widest uppercase">HOME</Link>
              <Link href="/collection" className="text-xs text-muted hover:text-primary transition-colors font-mono tracking-widest uppercase">SHOP</Link>
              <Link href="/gallery" className="text-xs text-muted hover:text-primary transition-colors font-mono tracking-widest uppercase">GALLERY</Link>
              <Link href="/about" className="text-xs text-muted hover:text-primary transition-colors font-mono tracking-widest uppercase">ABOUT US</Link>
            </div>
          </div>
        </div>

        {/* Newsletter Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-white">// JOIN THE DROP LIST</h4>
          <p className="text-xs text-muted leading-relaxed max-w-xs">Subscribe to receive exclusive access to drops, notifications, and culture archives.</p>
          <div className="flex border border-white/10 rounded-lg overflow-hidden focus-within:border-primary transition-colors max-w-xs bg-neutral-950/40">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL..." 
              className="bg-transparent px-3 py-2.5 text-[10px] text-white placeholder:text-muted/30 outline-none w-full font-mono uppercase"
            />
            <button className="bg-primary hover:bg-primary-hover text-white text-[9px] font-mono font-bold tracking-[0.2em] px-4 transition-colors shrink-0">
              JOIN
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-center font-mono text-[9px] text-muted/50 uppercase tracking-widest">
        <span>&copy; {new Date().getFullYear()} FEGE. All rights reserved.</span>
        <span>DESIGNED BY THE CULTURE</span>
      </div>
    </footer>
  );
}
