import { useEffect, useState } from 'react';
import { HomeHero } from '../components/common/HomeHero';
import { ProductCard } from '../components/common/ProductCard';
import { SearchBar } from '../components/common/SearchBar';
import type { TProduct } from '../types/product';

/**
 * HomePage component serves as the main landing page of the application.
 * It fetches and displays a list of products with a search bar for filtering.
 * @returns {JSX.Element} The HomePage component.
 */

export function HomePage() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<TProduct[]>([]);

  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://v2.api.noroff.dev/online-shop');
        const json = await res.json();
        setProducts(json.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <HomeHero />
      <SearchBar value={search} onChange={setSearch} />
      <section>
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
