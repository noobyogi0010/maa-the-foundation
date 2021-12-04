import React from 'react';
import './navbar.css';

function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);  
    return (
        <nav className="relative flex flex-wrap items-center justify-between bg-yellow-100">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start px-4 md:px-10">
              <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
                href="#home"
              >
                MAA The Foundation
              </a>
              <button
                className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {
                  navbarOpen ?
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                }
              </button>
            </div>
            <div
              className={
                "lg:flex items-center bg-yellow-300 px-4 md:px-10 py-4  w-2/4" + 
                (navbarOpen ? " flex flex-grow justify-center " : " hidden justify-end")
              }
              id="navbar-danger"
            >
              <ul className="flex items-center flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <a 
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    href="#share"
                  >
                    <span className="ml-2">About Us</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    href="#tweet"
                  >
                    <span className="ml-2">Contact Us</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black"
                    href="#pin"
                  >
                    <span className="ml-2">
                    <button className="bg-green-500 hover:bg-green-700 text-white uppercase text-xs font-bold py-2 px-4 rounded">
                      Donate Now
                    </button>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
}

export default Navbar;