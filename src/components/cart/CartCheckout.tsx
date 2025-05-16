import { useCart } from "../../store/useCart";
import { useNavigate } from "react-router-dom";
import { Button } from "../common/Button";

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
      <p>Subtotal: {subtotal.toFixed(2)} NOK</p>
      <Button onClick={handlePurchase}>Purchase</Button>
    </div>
  );
}