import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../../store/useCart';
import LoopCartLogo from '../../assets/loopcart-high-resolution-logo.png';
import { FaShoppingBasket, FaBars, FaTimes } from 'react-icons/fa';

export function Header() {
  const { items } = useCart();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
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
        <ul className="hidden md:flex gap-8 items-center text-sm font-medium">
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
          className="hidden md:flex relative text-2xl hover:text-gray-600 transition cursor-pointer ml-4"
          aria-label="Go to cart"
        >
          <FaShoppingBasket />
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-3 rounded-full bg-primary text-white text-xs px-1.5 py-0.5">
              {totalQuantity}
            </span>
          )}
        </button>
        <button
          className="md:hidden text-2xl ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className="block hover:font-bold font-headings"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block hover:font-bold font-headings"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
          <button
            onClick={() => navigate('/cart')}
            className="md:hidden relative text-2xl hover:text-gray-600 transition cursor-pointer mt-4"
            aria-label="Go to cart"
          >
            <FaShoppingBasket />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-3 rounded-full bg-primary text-white text-xs px-1.5 py-0.5">
                {totalQuantity}
              </span>
            )}
          </button>
        </div>
      )}
    </header>
  );
}
