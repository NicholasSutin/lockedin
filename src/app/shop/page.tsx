import { Footer } from "@/components/Footer";
import { ProductCardOne } from "@/components/commercn/product-cards/product-card-01";

const products = [
  {
    name: "NFC tag",
    description: "The simple technology behind our physical capabilities.",
    price: 0.50,
    image: "/NFC-tag.webp",
  },
  {
    name: "Phone Stand",
    description: "Holds your phone in the car, or locks it in at home. Crafted with U.S. Steel and fabricated to precision.",
    price: 79.99,
    image: "/StandProductFinal.webp",
  },
  {
    name: "App",
    description: "Free Forever, no freemium or ads. Enjoy the full experience without upgrades, trials, or locked features.",
    price: 0,
    image: "/Icon-Mobile.webp"
  },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-250">
      <div className="mt-20 mb-12">
        <h1 className="text-4xl font-bold text-center mb-4">Shop</h1>
        <p className="text-center text-muted-foreground">
          Discover our collection of focus-enhancing products
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {products.map((product, index) => (
          <ProductCardOne key={index} product={product} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
