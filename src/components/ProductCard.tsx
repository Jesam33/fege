"use client";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  isSoldOut?: boolean;
}

export default function ProductCard({ id, name, price, imageUrl, isSoldOut = false }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart, setIsCartOpen } = useCart();

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    addToCart({ id, name, price, imageUrl }, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleRestockRequest = () => {
    const phoneNumber = "2348146969660";
    const message = `Hello FEGE, I want to request a restock for this sold-out item:\n\nItem: ${name}\n\nPlease add me to the waiting list and notify me as soon as it drops! Let's lock this in.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className={`group flex flex-col bg-card border overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(217,4,41,0.08)] ${isSoldOut ? 'border-border/60 opacity-60 hover:opacity-100 hover:border-neutral-700' : 'border-border hover:border-primary'}`}>
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-950">
        {/* Sold Out Overlay Tag */}
        {isSoldOut && (
          <div className="absolute top-4 right-4 z-20 bg-black/90 border border-primary/30 px-3 py-1 font-mono text-[9px] text-primary tracking-[0.2em] font-bold uppercase rounded-full">
            SOLD OUT
          </div>
        )}

        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={name} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-neutral-950 flex flex-col justify-between p-6 overflow-hidden select-none">
            <div className="flex justify-between items-center text-[10px] text-muted font-mono tracking-widest">
              <span>[ FEGE DROP 01 ]</span>
              <span className="text-primary font-bold">{isSoldOut ? "ARCHIVED" : "V.01 PENDING"}</span>
            </div>
            <div className="my-auto flex flex-col items-center gap-3">
              <svg className="w-10 h-10 text-neutral-800" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" /></svg>
              <span className="font-mono text-[10px] text-neutral-600 tracking-[0.2em] font-bold">{isSoldOut ? "ARCHIVE COLLECTION" : "IMAGE ARCHIVE IN PROCESS"}</span>
            </div>
            <div className="flex justify-between items-end font-mono text-[9px] text-neutral-700">
              <span>LOC: PH // 4.8156° N, 7.0498° E</span>
              <span>CODE: FG-DS-01</span>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col gap-4">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-lg font-bold tracking-tight text-white uppercase font-sans group-hover:text-primary transition-colors">{name}</h3>
          <span className="text-base font-bold text-primary font-mono shrink-0">₦{price}K</span>
        </div>
        
        {!isSoldOut ? (
          <>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted uppercase tracking-wider font-bold font-mono">QTY:</span>
              <div className="flex items-center border border-border">
                <button onClick={decrease} className="px-3 py-1 hover:bg-border transition-colors text-white font-bold">-</button>
                <span className="px-4 py-1 font-mono text-white min-w-[3ch] text-center font-bold text-xs">{quantity}</span>
                <button onClick={increase} className="px-3 py-1 hover:bg-border transition-colors text-white font-bold">+</button>
              </div>
            </div>
            <button 
              onClick={handleAddToCart}
              className={`btn w-full font-mono text-xs tracking-widest font-bold transition-all duration-300 ${added ? 'bg-green-600 text-white' : 'btn-primary'}`}
            >
              {added ? "✓ ADDED TO BAG" : "ADD TO BAG"}
            </button>
          </>
        ) : (
          <>
            <div className="h-[26px] flex items-center">
              <span className="text-[10px] text-primary/70 uppercase font-mono tracking-widest font-bold">// ARCHIVE DROPPED</span>
            </div>
            <button 
              onClick={handleRestockRequest}
              className="btn w-full font-mono text-xs tracking-widest font-bold bg-transparent text-white border border-border hover:border-primary hover:text-primary hover:-translate-y-0.5"
            >
              REQUEST RESTOCK
            </button>
          </>
        )}
      </div>
    </div>
  );
}
