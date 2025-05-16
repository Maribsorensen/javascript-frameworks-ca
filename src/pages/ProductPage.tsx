import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { TProduct } from "../types/product";
import { ProductPrice } from "../components/common/ProductPrice";
import { useCart } from "../store/useCart";
import { Button } from "../components/common/Button";

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<TProduct | null>(null);
  const [loading, setLoading] = useState(true);

  const addToCart = useCart((state) => state.addToCart);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        const json = await res.json();
        setProduct(json.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct(); 
  }, [id]);
  if (loading) {
    return <p>Loading product...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }
        
  return (
    <div>
    <img src={product.image.url} alt={product.image.alt || product.title} />
    <div>
      <div>
        <h2>{product.title}</h2>
        <ProductPrice
          price={product.price}
          discountPrice={product.discountedPrice}
        />
      </div>
      <p>{product.description}</p>
    </div>
    <Button onClick={() => addToCart(product)}>Add to cart</Button>
    </div>
  );
}