
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo-no-bg.svg";
import '../customCss/custom.css'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-gray-600 body-font bg-[#dddcfb]">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-5">
        <div className="flex items-center flex-shrink-0 text-gray-800">
        <Link to="/">
                <img className="h-10" src={logo} alt="log" />
        </Link>
        </div>
        <div className="hidden md:block">
          <nav className="md:flex md:items-center md:space-x-4 justify-end">
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="/books" className="nav-link">
              All Books
            </a>
            <a href="/book-details" className="nav-link">
              Book Details
            </a>
            <a href="/books-edit" className="nav-link">
              Book Edit
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4 md:space-x-4">
          <button className="btn bg-[#dddcfb] shadow-sm p-2 transition-shadow hover:shadow-md">Sign up</button>
          <button className="btn bg-[#dddcfb] shadow-sm p-2 transition-shadow hover:shadow-md">Login</button>
        </div>
        <button
          className="inline-block md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${
              isOpen ? 'rotate-90' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="container mx-auto md:hidden">
          <nav className="flex flex-col items-end mt-4 space-y-4 custom_navbar_nav">
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="/books" className="nav-link">
              All Books
            </a>
            <a href="/book-details" className="nav-link">
              Book Details
            </a>
            <a href="/books-edit" className="nav-link">
              Book Edit
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;


