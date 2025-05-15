import { CartSummary } from "../components/cart/CartSummary";
import { CartCheckout } from "../components/cart/CartCheckout";

export function CartPage() {
  return (
    <div>
      <CartSummary />
      <CartCheckout />
    </div>
  );
}