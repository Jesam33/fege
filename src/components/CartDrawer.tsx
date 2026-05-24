"use client";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useEffect } from "react";

export default function CartDrawer() {
  const { cart, cartTotal, cartCount, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, clearCart } = useCart();

  // Close on ESC key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsCartOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [setIsCartOpen]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isCartOpen]);

  const handleWhatsAppCheckout = () => {
    const phoneNumber = "2348146969660"; // replace with real number
    const itemLines = cart
      .map((item) => `• ${item.name} x${item.quantity} — ₦${(item.price * item.quantity).toLocaleString()}K`)
      .join("\n");
    const message = `Hello FEGE, I'm ready to move different.\n\nHere's my order from the originals drop:\n\n${itemLines}\n\n─────────────────\nORDER TOTAL: ₦${cartTotal.toLocaleString()}K\n─────────────────\n\nLet's lock this in. Please let me know how to finalize checkout!`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[998] transition-opacity duration-500 ${isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border z-[999] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-border">
          <div>
            <h2 className="text-lg font-black font-syne uppercase text-white tracking-tight">Your Bag</h2>
            <p className="font-mono text-[10px] text-primary uppercase tracking-widest">{cartCount} {cartCount === 1 ? "ITEM" : "ITEMS"} IN DROP SELECTION</p>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-muted hover:text-white transition-colors rounded-full hover:bg-border"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {/* Empty state */}
        {cart.length === 0 && (
          <div className="flex-1 flex flex-col items-center justify-center gap-6 p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-neutral-900 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </div>
            <div>
              <p className="font-syne font-bold text-white text-lg uppercase tracking-tight">Your bag is empty</p>
              <p className="font-mono text-[10px] text-muted uppercase tracking-widest mt-1">Add a piece from the collection</p>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="btn btn-primary font-mono text-xs tracking-widest font-bold"
            >
              BROWSE THE DROP
            </button>
          </div>
        )}

        {/* Cart Items */}
        {cart.length > 0 && (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 px-6 py-4 border-b border-border/50 group">
                  {/* Image */}
                  <div className="relative w-20 h-24 shrink-0 bg-neutral-900 overflow-hidden rounded-lg">
                    {item.imageUrl ? (
                      <Image src={item.imageUrl} alt={item.name} fill sizes="80px" className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-mono text-[8px] text-neutral-600 tracking-widest text-center uppercase">FG DROP</span>
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div className="flex justify-between gap-2">
                      <h3 className="text-sm font-bold text-white uppercase font-sans tracking-tight leading-snug">{item.name}</h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted hover:text-primary transition-colors shrink-0"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Qty */}
                      <div className="flex items-center border border-border">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2.5 py-1 hover:bg-border transition-colors text-white text-xs font-bold">-</button>
                        <span className="px-3 py-1 font-mono text-white text-xs font-bold min-w-[2ch] text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2.5 py-1 hover:bg-border transition-colors text-white text-xs font-bold">+</button>
                      </div>
                      {/* Price */}
                      <span className="font-mono font-bold text-primary text-sm">₦{(item.price * item.quantity).toLocaleString()}K</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-6 border-t border-border bg-background/80 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="font-mono text-[10px] text-muted uppercase tracking-widest">ORDER TOTAL</p>
                  <p className="font-syne font-black text-white text-2xl">₦{cartTotal.toLocaleString()}K</p>
                </div>
                <button onClick={clearCart} className="text-[10px] font-mono text-muted/60 hover:text-primary uppercase tracking-widest transition-colors">
                  CLEAR BAG
                </button>
              </div>

              <button
                onClick={handleWhatsAppCheckout}
                className="w-full btn btn-primary font-mono text-xs tracking-widest font-bold flex items-center justify-center gap-3"
              >
                {/* WhatsApp icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                CHECKOUT VIA WHATSAPP
              </button>

              <p className="text-center font-mono text-[9px] text-muted/40 uppercase tracking-widest mt-4">
                FEGE // PH STREET CULTURE — V.01
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
