import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../../store/useCart';
import LoopCartLogo from '../../assets/loopcart-high-resolution-logo.png';
import { FaShoppingBasket } from 'react-icons/fa';

export function Header() {
  const { items } = useCart();
  const navigate = useNavigate();

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div>
          <NavLink to="/">
            <img
              src={LoopCartLogo}
              alt="LoopCart logo"
              className="h-10 w-auto object-contain"
              style={{ marginRight: '-12px' }}
            />
          </NavLink>
        </div>
        <ul className="flex gap-8 items-center text-sm font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'border-black border-b-2 pb-1 font-headings'
                  : 'hover:font-bold transition font-headings'
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'border-black border-b-2 pb-1 font-headings'
                  : 'hover:font-bold transition font-headings'
              }
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
        <button
          onClick={() => navigate('/cart')}
          className="relative text-2xl hover:text-gray-600 transition cursor-pointer"
          aria-label="Go to cart"
        >
          <FaShoppingBasket />
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-3 rounded-full bg-primary text-white text-xs px-1.5 py-0.5">
              {totalQuantity}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}
