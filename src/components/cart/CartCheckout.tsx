import { useCart } from '../../store/useCart';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common/Button';

export function CartCheckout() {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();

  const subtotal = items.reduce(
    (total, item) => total + (item.discountedPrice ?? item.price) * item.quantity,
    0
  );

  const handlePurchase = () => {
    clearCart();
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
