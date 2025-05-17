import { CartSummary } from '../components/cart/CartSummary';
import { CartCheckout } from '../components/cart/CartCheckout';

export function CartPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <CartSummary />
      <div className="md:ml-6 w-full">
        <CartCheckout />
      </div>
    </div>
  );
}
