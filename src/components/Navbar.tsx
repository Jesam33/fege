"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import SearchOverlay from "@/components/SearchOverlay";

const ALL_PRODUCTS = [
  { id: "f1", name: "FEGE Premium Sweatshirt", price: 75, category: "Tops", href: "/collection" },
  { id: "f2", name: "“FEGE JUST DEY” Tee", price: 45, category: "Tops", href: "/collection" },
  { id: "f3", name: "PH Rhythm Windbreaker", price: 130, category: "Outerwear", href: "/collection" },
  { id: "f4", name: "Onyx Calm Confidence Cargo", price: 110, category: "Bottoms", href: "/collection" },
  { id: "f5", name: "Phantom Technical Zip-Up", price: 95, category: "Outerwear", href: "/collection" },
  { id: "f6", name: "Classic Culture Cap", price: 35, category: "Accessories", href: "/collection" },
  { id: "f7", name: "Identity Street Socks", price: 15, category: "Accessories", href: "/collection" },
  { id: "f8", name: "FEGE Heritage Varsity Jacket", price: 180, category: "Outerwear", href: "/collection" },
];

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSearchQuery, setMobileSearchQuery] = useState("");

  // Close mobile menu on route change/click
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setMobileSearchQuery("");
  };

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  // Filter products for mobile search
  const mobileSearchResults = mobileSearchQuery.trim().length > 0
    ? ALL_PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(mobileSearchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(mobileSearchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      {/* Desktop Search Overlay (Dropdown) */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <nav className="w-full absolute top-0 z-50 bg-transparent">
        <div className="container mx-auto px-6 h-28 flex items-center justify-between lg:pl-32">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-3xl font-black tracking-tighter text-white hover:text-primary transition-colors flex items-center gap-1 font-syne z-50"
            onClick={handleMobileLinkClick}
          >
            FEGE<span className="w-2 h-2 rounded-full bg-primary inline-block mb-1"></span>
          </Link>
          
          {/* Nav Links (Desktop) */}
          <div className="hidden md:flex gap-12">
            <Link href="/" className="text-sm font-semibold text-white hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/collection" className="text-sm font-semibold text-white hover:text-primary transition-colors flex items-center gap-1">
              Shop<span className="w-1.5 h-1.5 rounded-full bg-primary inline-block mb-2"></span>
            </Link>
            <Link href="/gallery" className="text-sm font-semibold text-white hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="/about" className="text-sm font-semibold text-white hover:text-primary transition-colors">
              About us
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex gap-4 sm:gap-6 items-center text-white z-50">
            {/* Search (Desktop only) */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hidden md:block hover:text-primary transition-colors p-2"
              aria-label="Search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>

            {/* Cart */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsCartOpen(true);
              }}
              className="hover:text-primary transition-colors relative p-2"
              aria-label="Cart"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 min-w-[16px] h-[16px] bg-primary text-[8px] flex items-center justify-center rounded-full font-bold px-1">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button (Hamburger) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex md:hidden flex-col items-center justify-center w-10 h-10 gap-1.5 p-2 text-white hover:text-primary transition-colors"
              aria-label="Menu"
            >
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer Overlay */}
        <div 
          className={`fixed inset-0 bg-neutral-950/98 backdrop-blur-lg z-40 flex flex-col justify-center items-center transition-all duration-500 md:hidden ${
            isMobileMenuOpen 
              ? "opacity-100 pointer-events-auto translate-y-0" 
              : "opacity-0 pointer-events-none -translate-y-8"
          }`}
        >
          {/* Mobile Search inside mobile menu */}
          <div className="w-full max-w-xs px-6 mb-8 flex flex-col gap-3">
            <div className="flex items-center border-b border-white/20 focus-within:border-primary pb-2 gap-2">
              <svg className="text-muted shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input
                type="text"
                placeholder="SEARCH DROPS..."
                value={mobileSearchQuery}
                onChange={(e) => setMobileSearchQuery(e.target.value)}
                className="bg-transparent text-white text-xs font-mono placeholder:text-muted/30 outline-none uppercase w-full"
              />
              {mobileSearchQuery && (
                <button onClick={() => setMobileSearchQuery("")} className="text-muted hover:text-white shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              )}
            </div>

            {/* Mobile Search Results */}
            {mobileSearchResults.length > 0 && (
              <div className="flex flex-col gap-1 max-h-[140px] overflow-y-auto bg-neutral-900/50 p-2 rounded-lg border border-white/5">
                {mobileSearchResults.map((product) => (
                  <Link
                    key={product.id}
                    href={product.href}
                    onClick={handleMobileLinkClick}
                    className="flex items-center justify-between p-1.5 hover:bg-white/5 rounded transition-colors text-[10px]"
                  >
                    <span className="font-sans font-bold text-white uppercase truncate max-w-[150px]">{product.name}</span>
                    <span className="font-mono text-primary font-bold ml-2">${product.price}</span>
                  </Link>
                ))}
              </div>
            )}
            
            {mobileSearchQuery && mobileSearchResults.length === 0 && (
              <p className="text-[9px] font-mono text-muted text-center uppercase tracking-widest mt-1">NO DROPS FOUND</p>
            )}
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-6 font-syne text-2xl font-black uppercase tracking-tight text-white mb-8">
            <Link 
              href="/" 
              onClick={handleMobileLinkClick}
              className="hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/collection" 
              onClick={handleMobileLinkClick}
              className="hover:text-primary transition-colors"
            >
              Shop
            </Link>
            <Link 
              href="/gallery" 
              onClick={handleMobileLinkClick}
              className="hover:text-primary transition-colors"
            >
              Gallery
            </Link>
            <Link 
              href="/about" 
              onClick={handleMobileLinkClick}
              className="hover:text-primary transition-colors"
            >
              About us
            </Link>
          </div>

          <div className="flex flex-col items-center gap-1 font-mono text-[8px] text-muted/30 uppercase tracking-widest">
            <span>FEGE STREETWEAR // V.01 DROP</span>
            <span>PH // 4.8156° N, 7.0498° E</span>
          </div>
        </div>
      </nav>
    </>
  );
}
