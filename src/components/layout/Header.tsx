import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "border-black border-b-2" : "hover:font-bold"}>HOME</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "border-black border-b-2" : "hover:font-bold"}>CONTACT</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}