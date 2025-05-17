import { FaTrash } from "react-icons/fa";
import { useCart } from "../../store/useCart";
import { ProductPrice } from "../common/ProductPrice";

export function CartSummary() {
  const { items, removeFromCart } = useCart();

  if (items.length === 0) {
    return <p>Your cart is empty!</p>;
  }

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-headings mb-4 text-center">Your Cart Summary</h2>
      <ul className="space-y-6">
        {items.map((item) => (
          <li key={item.id} className="flex flex-col md:flex-row gap-4 items-center">
            <img
              src={item.image.url}
              alt={item.image.alt || item.title}
              className="w-40 h-40 object-cover rounded-lg"
            />
            <div className="flex-1 space-y-2">
              <h3 className="text-lg font-body">{item.title}</h3>
              <ProductPrice price={item.price} discountPrice={item.discountedPrice} />
              <p className="font-body">Quantity: {item.quantity}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-700 hover:text-red-900 text-sm font-body cursor-pointer"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}