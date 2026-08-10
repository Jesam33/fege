import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Collection | FEGE",
  description: "Browse the full collection of FEGE premium streetwear and apparel inspired by Port Harcourt street culture.",
};

export default function CollectionPage() {
  const collectionProducts = [
    { id: "c12", name: "FEGE Indigenous Camo Track", price: 130, imageUrl: "/images/fege-track-1.jpg" },
    { id: "c1", name: "FEGE Premium Sweatshirt", price: 30, imageUrl: "/images/sweatshirt.png" },
    { id: "c2", name: "“FEGE JUST DEY” Tee", price: 45, imageUrl: "/images/round_neck.png" },
    { id: "c9", name: "FEGE Street Casual Cotton Shirt", price: 40, imageUrl: "/images/cotton_shirt.png" },
    { id: "c10", name: "FEGE Street Casual Pants", price: 45, imageUrl: "/images/two-piece.png" },
    { id: "c11", name: "FEGE Girls Crop Top", price: 30, imageUrl: "/images/girls_top.png" },
    { id: "c3", name: "FEGE Black Luxury Shirt", price: 40, imageUrl: "/images/fege-black-shirt.jpeg" },
    { id: "c4", name: "Onyx Calm Confidence Cargo", price: 110, imageUrl: "", isSoldOut: true },
    { id: "c5", name: "Phantom Technical Zip-Up", price: 95, imageUrl: "", isSoldOut: true },
    { id: "c6", name: "Classic Culture Cap", price: 35, imageUrl: "", isSoldOut: true },
    { id: "c7", name: "Identity Street Socks", price: 15, imageUrl: "", isSoldOut: true },
    { id: "c8", name: "FEGE Heritage Varsity Jacket", price: 180, imageUrl: "", isSoldOut: true },
  ];

  return (
    <div className="w-full bg-background min-h-[calc(100vh-80px)] py-36">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20 gap-4">
          <span className="font-mono text-xs text-primary uppercase tracking-[0.3em] font-bold">[ V.01 DROP CATALOGUE ]</span>
          <h1 className="text-5xl md:text-7xl font-black font-syne tracking-tighter uppercase text-white">
            THE CATALOGUE
          </h1>
          <p className="text-base text-muted max-w-2xl font-sans tracking-wide">
            Explore our signature drops. Active drops are available immediately via WhatsApp; sold-out pieces can be requested for restock lists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {collectionProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
