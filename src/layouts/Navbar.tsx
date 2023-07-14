import { Link } from "react-router-dom";
import logo from "../assets/logo-no-bg.svg";

function Navbar() {
  return (
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 
          md:mb-0">
           <Link to="/">
                <img className="h-10" src={logo} alt="log" />
            </Link>
          </div>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
            <div className="nav-link px-2">
              <Link to="/">Home</Link>
            </div>
            <div className="nav-link px-2">
              <Link to="/books">All Books</Link>
            </div>
            <div className="nav-link px-2">
              <Link to="/book-details">Book Details</Link>
            </div>
            <div className="nav-link px-2">
              <Link to="/books-edit">Book Edit</Link>
            </div>
          </nav>
          <div className="space-x-4">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              <Link to="/login">Login</Link>
            </button>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              <Link to="/signup">Signup</Link>
            </button>
          </div>
        </div>
      </header>
  );
}

export default Navbar;
