type ProductPriceProps = {
  price: number;
  discountPrice: number;
};

export function ProductPrice({ price, discountPrice }: ProductPriceProps) {
  const discounted = discountPrice < price;
  const discount = discounted
    ? Math.round(((price - discountPrice) / price) * 100)
    : 0;

  return (
    <div>
      {discounted && (
        <p className="text-gray-500 line-through font-body">{price} NOK</p>
      )}
      <p className="font-body">{discountPrice} NOK</p>
      {discounted && (
        <p className="text-primary text-sm font-body">{discount}% off</p>
      )}
    </div>
  );
}