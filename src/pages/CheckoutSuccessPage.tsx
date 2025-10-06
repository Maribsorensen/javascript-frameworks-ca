import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

/**
 * CheckoutSuccessPage component that displays a confirmation message
 * after a successful checkout, along with a link back to the store.
 *
 * @returns {JSX.Element} The rendered CheckoutSuccessPage component.
 */

export function CheckoutSuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <FaCheck className="text-green-700 text-3xl" />
      <h1 className="font-headings text-3xl font-semibold mb-4">Thank you for your purchase!</h1>
      <p className="font-body text-lg mb-6">Your order has been successfully processed.</p>
      <Link
        to="/"
        className="bg-primary font-headings px-2 py-1 rounded-md text-white items-center hover:bg-hover cursor-pointer"
      >
        Back to Store
      </Link>
    </div>
  );
}
