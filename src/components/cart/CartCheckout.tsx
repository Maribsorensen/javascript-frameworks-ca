import { useCart } from "../../store/useCart";
import { useNavigate } from "react-router-dom";

export function CartCheckout() {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();

  const subtotal = items.reduce(
    (total, item) => total + (item.discountedPrice ?? item.price) * item.quantity,
    0
  );

  const handlePurchase = () => {
    clearCart();
    navigate("/success");
  };

  if (items.length === 0) return null;

  return (
    <div>
      <h2>Checkout</h2>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <button onClick={handlePurchase}>Purchase</button>
    </div>
  );
}