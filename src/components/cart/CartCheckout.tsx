import { useCart } from '../../store/useCart';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common/Button';
import { toast } from 'react-hot-toast';

/**
 * CartCheckout component displays the checkout section of the cart.
 * It shows the subtotal of items in the cart and a button to proceed with the purchase.
 * @returns {JSX.Element | null} The CartCheckout component or null if there are no items in the cart.
 */

export function CartCheckout() {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();

  const subtotal = items.reduce(
    (total, item) => total + (item.discountedPrice ?? item.price) * item.quantity,
    0
  );

  const handlePurchase = () => {
    clearCart();
    toast.success('Purchase successful!');
    navigate('/success');
  };

  if (items.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between">
      <h2 className="text-xl font-headings mb-6 text-center">Checkout</h2>
      <div className="flex justify-between text-lg font-medium mb-4">
        <p className="font-body">Subtotal:</p>
        <p className="font-body">{subtotal.toFixed(2)} NOK</p>
      </div>
      <Button className="w-full" onClick={handlePurchase}>
        Purchase
      </Button>
    </div>
  );
}
