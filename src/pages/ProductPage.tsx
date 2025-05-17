import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { TProduct } from '../types/product';
import { ProductPrice } from '../components/common/ProductPrice';
import { useCart } from '../store/useCart';
import { Button } from '../components/common/Button';
import toast from 'react-hot-toast';

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<TProduct | null>(null);
  const [loading, setLoading] = useState(true);

  const addToCart = useCart((state) => state.addToCart);
  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success('Added to cart!');
    } else {
      toast.error('No product selected');
    }
  };

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        const json = await res.json();
        setProduct(json.data);
      } catch (error) {
        console.error('Error fetching product:', error);
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
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex justify-center items-center">
        <img
          src={product.image.url}
          alt={product.image.alt || product.title}
          className="w-full max-w-md rounded-xl shadow"
        />
      </div>
      <div className="flex flex-col justify-center space-y-6">
        <h1 className="text-2xl font-headings font-semibold">{product.title}</h1>
        <ProductPrice price={product.price} discountPrice={product.discountedPrice} />
        <p className="font-body text-gray-900 leading-relaxed">{product.description}</p>
        <Button onClick={handleAddToCart} className="w-fit">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
