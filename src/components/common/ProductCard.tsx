import { Link } from 'react-router-dom';
import type { TProduct } from '../../types/product';
import { ProductPrice } from './ProductPrice';

type ProductCardProps = {
  product: TProduct;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <li className="flex flex-col bg-white rounded-md shadow-md p-4 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
      <Link to={`/product/${product.id}`} className="flex flex-col flex-grow">
        <div className="aspect-square overflow-hidden rounded-md bg-gray-100">
          <img
            src={product.image.url}
            alt={product.image.alt || product.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-2 flex flex-col flex-grow justify-between">
          <h2 className="text-lg font-body font-semibold">{product.title}</h2>

          <div>
            <ProductPrice price={product.price} discountPrice={product.discountedPrice} />
          </div>
        </div>
      </Link>
    </li>
  );
}
