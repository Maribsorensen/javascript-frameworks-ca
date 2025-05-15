import { useCart } from "../../store/useCart";
import { ProductPrice } from "../common/ProductPrice";

export function CartSummary() {
  const { items, removeFromCart } = useCart();

  if (items.length === 0) {
    return <p>Your cart is empty!</p>;
  }

  return (
    <div>
      <h2>Your Cart Summary</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img
              src={item.image.url}
              alt={item.image.alt || item.title}
              
            />
            <div>
              <h3>{item.title}</h3>
              <ProductPrice price={item.price} discountPrice={item.discountedPrice} />
              <p>Quantity: {item.quantity}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}