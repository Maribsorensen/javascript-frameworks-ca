import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';
import { CheckoutSuccessPage } from './pages/CheckoutSuccessPage';
import { ContactPage } from './pages/ContactPage';

/**
 * App component that sets up the main routing for the application.
 * It includes routes for home, product details, cart, checkout success, and contact pages.
 * @returns {JSX.Element} The App component.
 */

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/success" element={<CheckoutSuccessPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<h1 className="font-headings">404 Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
