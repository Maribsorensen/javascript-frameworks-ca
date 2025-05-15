import { useEffect, useState } from "react";
import { HomeHero } from "../components/common/HomeHero";
import { ProductCard } from "../components/common/ProductCard";
import { SearchBar } from "../components/common/SearchBar";
import type { TProduct } from "../types/product";

export function HomePage() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<TProduct[]>([]);
  
  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://v2.api.noroff.dev/online-shop");
        const json = await res.json();
        setProducts(json.data);
      } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);


  return(
    <div>
      <HomeHero />
      <SearchBar value={search} onChange={setSearch} />
      <section>
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <ul>
            {searchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}