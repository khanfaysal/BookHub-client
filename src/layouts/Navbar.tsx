
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from "../assets/logo-no-bg.svg";
// import '../customCss/custom.css'; 

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="text-gray-600 body-font bg-[#dddcfb]">
//       <div className="container mx-auto flex flex-wrap items-center justify-between py-5">
//         <div className="flex items-center flex-shrink-0 text-gray-800">
//         <Link to="/">
//                 <img className="h-10" src={logo} alt="log" />
//         </Link>
//         </div>
//         <div className="hidden md:block">
//           <nav className="md:flex md:items-center md:space-x-4 justify-end">
//             <a href="/" className="nav-link">
//               Home
//             </a>
//             <a href="/books" className="nav-link">
//               All Books
//             </a>
//             <a href="/book-details" className="nav-link">
//               Book Details
//             </a>
//             <a href="/books-edit" className="nav-link">
//               Book Edit
//             </a>
//           </nav>
//         </div>
//         <div className="flex items-center space-x-4 md:space-x-4">
//           <button className="btn bg-[#dddcfb] shadow-sm p-2 transition-shadow hover:shadow-md">Sign up</button>
//           <button className="btn bg-[#dddcfb] shadow-sm p-2 transition-shadow hover:shadow-md">Login</button>
//         </div>
//         <button
//           className="inline-block md:hidden text-gray-800 focus:outline-none"
//           onClick={toggleMenu}
//         >
//           <svg
//             className={`w-6 h-6 transition-transform duration-300 ${
//               isOpen ? 'rotate-90' : 'rotate-0'
//             }`}
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>
//       </div>
//       {isOpen && (
//         <div className="container mx-auto md:hidden">
//           <nav className="flex flex-col items-end mt-4 space-y-4 custom_navbar_nav">
//             <a href="/" className="nav-link">
//               Home
//             </a>
//             <a href="/books" className="nav-link">
//               All Books
//             </a>
//             <a href="/book-details" className="nav-link">
//               Book Details
//             </a>
//             <a href="/books-edit" className="nav-link">
//               Book Edit
//             </a>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Navbar;

// test

import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo-no-bg.svg";
import avatarIcon from "../assets/man.png";
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { getAuth, signOut } from 'firebase/auth';
import { setUser } from '../redux/features/user/userSlice';

function Navbar() {

  const {user} = useAppSelector((state) => state.user);
  console.log(user, "user");

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
    .then(()=> {
      dispatch(setUser(null));
      localStorage.removeItem('email')
    })
    .catch((error) => {
      console.log('logout error', error)
    })
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
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
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/books" className="nav-link">
              All Books
            </Link>
            <Link to="/book-details" className="nav-link">
              Book Details
            </Link>
            <Link to="/books-edit" className="nav-link">
              Book Edit
            </Link>
          </nav>
        </div>
        <div className="relative flex items-center space-x-4 md:space-x-4">
          <button
            className="btn bg-[#dddcfb] shadow-sm p-2 transition-shadow hover:shadow-md"
            onClick={toggleMenu}
          >
            <img className="h-8 w-8 rounded-full" src={avatarIcon} alt="avatar" />
          </button>
          {isOpen && (
            <ul className="absolute text-center right-0 mt-64 w-40 bg-white rounded-md shadow-lg py-2 z-10">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/" className="nav-link" onClick={closeMenu}>
                  Profile
                </Link>
              </li>
              {!user?.email && (
                <>
                <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/login" className="nav-link" onClick={closeMenu}>
                  Login
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/signup" className="nav-link" onClick={closeMenu}>
                  Signup
                </Link>
              </li>
                </>
              )}
              {user?.email && (
                <li className="px-4 py-2 hover:bg-gray-100">
                <button className="nav-link" onClick={handleLogout}>
                  Logout
                </button>
              </li>
              )}
            </ul>
          )}
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
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/books" className="nav-link" onClick={closeMenu}>
              All Books
            </Link>
            <Link to="/book-details" className="nav-link" onClick={closeMenu}>
              Book Details
            </Link>
            <Link to="/books-edit" className="nav-link" onClick={closeMenu}>
              Book Edit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;

