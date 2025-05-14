import { Link } from "react-router-dom";
import type { TProduct } from "../../types/product";
import { ProductPrice } from "./ProductPrice";

type ProductCardProps = {
  product: TProduct;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <li>
    <Link to={`/product/${product.id}`}>
      <img src={product.image.url} alt={product.image.alt || product.title} />
      <div>
        <h2>{product.title}</h2>
       <ProductPrice price={product.price} discountPrice={product.discountedPrice} />
      </div>
      </Link>
    </li>
  );
}