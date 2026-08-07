"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const ALL_PRODUCTS = [
  { id: "f1", name: "FEGE Premium Sweatshirt", price: 30, imageUrl: "/images/sweatshirt.png", category: "Tops", href: "/collection" },
  { id: "f2", name: "\u201cFEGE JUST DEY\u201d Tee", price: 45, imageUrl: "/images/round_neck.png", category: "Tops", href: "/collection" },
  { id: "f3", name: "PH Rhythm Windbreaker", price: 130, imageUrl: "", category: "Outerwear", href: "/collection" },
  { id: "f4", name: "Onyx Calm Confidence Cargo", price: 110, imageUrl: "", category: "Bottoms", href: "/collection" },
  { id: "f5", name: "Phantom Technical Zip-Up", price: 95, imageUrl: "", category: "Outerwear", href: "/collection" },
  { id: "f6", name: "Classic Culture Cap", price: 35, imageUrl: "", category: "Accessories", href: "/collection" },
  { id: "f7", name: "Identity Street Socks", price: 15, imageUrl: "", category: "Accessories", href: "/collection" },
  { id: "f8", name: "FEGE Heritage Varsity Jacket", price: 180, imageUrl: "", category: "Outerwear", href: "/collection" },
];

const QUICK_LINKS = [
  { label: "New Drop Collection", href: "/collection" },
  { label: "Visual Lookbook", href: "/gallery" },
  { label: "Our Story", href: "/about" },
];

interface SearchDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchDropdown({ isOpen, onClose }: SearchDropdownProps) {
  const [query, setQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.trim().length > 0
    ? ALL_PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, onClose]);

  // Close on ESC key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      ref={dropdownRef}
      className="absolute top-24 right-6 left-6 md:left-auto md:w-[480px] bg-neutral-950/95 border border-white/10 rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.9)] z-[100] backdrop-blur-md transition-all duration-300"
    >
      {/* Search Input */}
      <div className="flex items-center border-b border-border focus-within:border-primary pb-3 gap-3">
        <svg className="text-muted shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="SEARCH THE DROPS..."
          className="flex-1 bg-transparent text-white text-sm font-mono placeholder:text-muted/30 outline-none uppercase"
        />
        {query && (
          <button onClick={() => setQuery("")} className="text-muted hover:text-white shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        )}
        <button onClick={onClose} className="text-muted hover:text-white ml-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div className="flex flex-col gap-1 mt-4 max-h-[300px] overflow-y-auto pr-1">
          <p className="font-mono text-[8px] text-muted/60 uppercase tracking-[0.2em] mb-1">
            {results.length} RESULT{results.length !== 1 ? "S" : ""} FOUND
          </p>
          {results.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              onClick={onClose}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group"
            >
              <div className="relative w-10 h-12 shrink-0 rounded bg-neutral-900 overflow-hidden">
                {product.imageUrl ? (
                  <Image src={product.imageUrl} alt={product.name} fill sizes="40px" className="object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-[6px] text-neutral-600 uppercase">FG</span>
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-sans font-bold text-white text-xs uppercase tracking-tight group-hover:text-primary transition-colors truncate">{product.name}</p>
                <p className="font-mono text-[9px] text-muted uppercase tracking-widest">{product.category}</p>
              </div>
              <span className="font-mono font-bold text-primary text-xs shrink-0">${product.price}</span>
            </Link>
          ))}
        </div>
      )}

      {/* No results */}
      {query.trim().length > 0 && results.length === 0 && (
        <div className="text-center py-6 mt-4">
          <p className="font-mono text-xs text-white uppercase tracking-tight">No drops found</p>
          <p className="font-mono text-[9px] text-muted uppercase tracking-widest mt-1">Try searching &quot;sweatshirt&quot; or &quot;tee&quot;</p>
        </div>
      )}

      {/* Quick links */}
      {query.trim().length === 0 && (
        <div className="mt-4">
          <p className="font-mono text-[8px] text-muted/60 uppercase tracking-[0.2em] mb-2">QUICK LINKS</p>
          <div className="flex flex-col gap-1">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors group"
              >
                <svg className="text-primary shrink-0" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                <span className="font-mono text-xs text-white uppercase tracking-tight group-hover:text-primary transition-colors">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
