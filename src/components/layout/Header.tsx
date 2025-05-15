// components/Header.tsx
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../store/useCart";


export function Header() {
  const { items } = useCart();
  const navigate = useNavigate();

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-black border-b-2" : "hover:font-bold"
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "border-black border-b-2" : "hover:font-bold"
              }
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <button onClick={() => navigate("/cart")}>
              🛒{totalQuantity > 0 && `(${totalQuantity})`}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
