import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm font-headings">&copy; LoopCart {new Date().getFullYear()}</div>
        <div className="flex gap-4 text-xl">
          <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-400">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
}