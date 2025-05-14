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
        <p>{price} NOK</p>
      )}
      <p>{discountPrice} NOK</p>
      {discounted && (  
        <p>
          {discount}% off
        </p>
      )}
    </div>
  );
}