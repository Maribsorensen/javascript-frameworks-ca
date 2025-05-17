import { CartSummary } from '../components/cart/CartSummary';
import { CartCheckout } from '../components/cart/CartCheckout';

/**
 * CartPage component that displays the cart summary and checkout options.
 * It uses the CartSummary and CartCheckout components to show the cart details
 * @returns {JSX.Element} The CartPage component.
 */

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
