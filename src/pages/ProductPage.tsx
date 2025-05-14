import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { TProduct } from "../types/product";

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { product, setProduct } = useState<TProduct | null>(null);
  const [loading, setLoading] = useState(true);

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
        
  return (
    <div>
    <img src="" alt="" />
    <div>
      <div>
        <h2>Title</h2>
        <p>price</p>
      </div>
      <p>Description</p>
    </div>
    <button>Add to cart</button>
    </div>
  );
}