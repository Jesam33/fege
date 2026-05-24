import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Gallery | FEGE",
  description: "Exclusive streetwear lookbook and visual archive of FEGE, born in Port Harcourt.",
};

export default function GalleryPage() {
  const galleryItems = [
    { id: 1, src: "/images/img_1.png", colSpan: "col-span-1 lg:col-span-1", height: "h-[450px]", code: "FG-GB-01", tag: "PH ORIGIN", coordinates: "4.8156° N, 7.0498° E" },
    { id: 2, src: "/images/img_2.png", colSpan: "col-span-1 lg:col-span-2", height: "h-[450px]", code: "FG-GB-02", tag: "MOVE DIFFERENT", coordinates: "PH STREET V.01" },
    { id: 3, src: "/images/img_3.png", colSpan: "col-span-1 lg:col-span-2", height: "h-[500px]", code: "FG-GB-03", tag: "STREET IDENTITY", coordinates: "IDENTITY V.01" },
    { id: 4, src: "/images/girls_top.png", colSpan: "col-span-1 lg:col-span-1", height: "h-[500px]", code: "FG-GB-04", tag: "CALM CONFIDENCE", coordinates: "CONFIDENCE SEED" },
    { id: 5, src: "/images/img_5.png", colSpan: "col-span-1 lg:col-span-1", height: "h-[450px]", code: "FG-GB-05", tag: "WEARABLE CULTURE", coordinates: "CULTURE ARCHIVE" },
    { id: 6, src: "/images/img_6.png", colSpan: "col-span-1 lg:col-span-2", height: "h-[450px]", code: "FG-GB-06", tag: "ENERGY. PRESENCE.", coordinates: "ENERGY V.01" },
    { id: 7, src: "/images/sweatshirt.png", colSpan: "col-span-1 lg:col-span-2", height: "h-[400px]", code: "FG-GB-07", tag: "SIGNATURE TEXTURE", coordinates: "SWEATSHIRT V.01" },
    { id: 8, src: "/images/hero_man_fege.png", colSpan: "col-span-1 lg:col-span-1", height: "h-[400px]", code: "FG-GB-08", tag: "ATTRACT ATTENTION", coordinates: "ATTRACT V.01" },
    { id: 9, src: "/images/cotton_shirt.png", colSpan: "col-span-1 lg:col-span-1", height: "h-[400px]", code: "FG-GB-09", tag: "STREET CASUAL", coordinates: "COTTON V.01" },
    { id: 10, src: "/images/two-piece.png", colSpan: "col-span-1 lg:col-span-2", height: "h-[400px]", code: "FG-GB-10", tag: "TWO PIECE ENERGY", coordinates: "SET V.01" }
  ];

  return (
    <div className="w-full bg-background min-h-[calc(100vh-80px)] py-36 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -top-20 -right-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24 gap-4">
          <span className="font-mono text-xs text-primary uppercase tracking-[0.3em] font-bold">[ VISUAL ARCHIVES ]</span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-syne tracking-tighter uppercase text-white">
            THE LOOKBOOK
          </h1>
          <p className="text-base text-muted max-w-2xl font-sans tracking-wide">
            A digital lookbook showcasing movement, energy, and presence. Confidence stitched into every detail, born in the streets of Port Harcourt.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className={`${item.colSpan} ${item.height} rounded-2xl bg-neutral-950 border border-white/5 overflow-hidden relative group cursor-crosshair transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(217,4,41,0.1)]`}
            >
              {/* Image with extreme smooth zoom */}
              <Image 
                src={item.src} 
                alt={item.tag} 
                fill 
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />

              {/* Technical street frame overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10"></div>
              
              {/* Neon red glow core inside card */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>

              {/* Top technical coordinates */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20 opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-500 font-mono text-[9px] text-white/50 tracking-widest uppercase">
                <span>[{item.code}]</span>
                <span className="text-primary font-bold">{item.coordinates}</span>
              </div>

              {/* Bottom text overlays (reveals on hover) */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col justify-end">
                <span className="font-mono text-[9px] text-primary tracking-[0.25em] block mb-1 uppercase font-bold transform translate-y-[10px] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  FEGE STREETWEAR
                </span>
                
                <div className="flex justify-between items-end">
                  <h4 className="font-syne font-black text-white text-lg md:text-xl tracking-tighter uppercase leading-none transform translate-y-[15px] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {item.tag}
                  </h4>
                  
                  <span className="font-mono text-[9px] text-neutral-500 tracking-[0.2em] transform translate-y-[15px] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                    [DROP 01]
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer statement */}
        <div className="flex flex-col items-center justify-center mt-32 border-t border-white/5 pt-16 font-mono text-xs text-muted/60 uppercase tracking-widest gap-2">
          <span>PORT HARCOURT STREET CULTURE IN EVERY DETAIL</span>
          <span className="text-[10px] text-primary">FEGE JUST DEY // ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </div>
  );
}
