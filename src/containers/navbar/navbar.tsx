import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo/MAA-logo.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Popup } from "../../components/popup/popup";

type NavbarProps = {
  props: {
    atPageTop: boolean;
  };
};

function Navbar(props: NavbarProps) {
  // const [atPageTop, setAtPageTop] = React.useState(props);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrollState, setScrollState] = useState("top");
  const [openPopup, setOpenPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupBody, setPopupBody] = useState("");
  let scrollListener: any = null;

  const DONATE_NOW_LABEL = "Donate Now";
  const DONATE_NOW_POPUP_TITLE = `Bank Details for MAA-The Foundation`;
  const DONATE_NOW_POPUP_MARKUP = ``;

  // generic click handler to open popup for both donate now and learn more
  const clickHandler = (event: React.MouseEvent) => {
    // get the label of button
    const btnText = (event?.target as HTMLElement)?.textContent;
    console.log(btnText);
    // use button label to differentiate between different buttons
    switch (btnText) {
      case DONATE_NOW_LABEL:
        setPopupTitle(DONATE_NOW_POPUP_TITLE);
        setPopupBody(DONATE_NOW_POPUP_MARKUP);
        setOpenPopup(true);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    scrollListener = document.addEventListener("scroll", (elem) => {
      let scrolled = document?.scrollingElement?.scrollTop;
      let navbar = document.querySelector("nav");
      if (scrolled && scrolled >= 140) {
        if (scrollState !== "scrolled") {
          navbar?.classList.add("shadow-lg");
          setScrollState("scrolled");
        }
      } else {
        if (scrollState !== "top") {
          navbar?.classList.remove("shadow-lg");
          setScrollState("top");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", scrollListener);
    };
  }, [scrollState]);
  return (
    <nav
      className={
        "sticky top-0 flex flex-wrap items-center justify-between bg-yellow-100 border-b-2 border-black lg:border-none lg:sticky lg:top-0 z-30 " +
        (!props.props.atPageTop ? "lg:border-b-2 lg:border-black" : "")
      }
    >
      { openPopup ? (<Popup title={popupTitle} body={popupBody} setIsOpen={setOpenPopup} />) : null}
      <div className="w-full mx-auto flex flex-wrap items-center justify-between">
        <div
          className={
            "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start px-4 md:px-14 md:py-8 lg:py-1" +
            (navbarOpen ? "border-b-2 border-black lg:border-none" : "")
          }
        >
          <a
            className="text-sm font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase text-black flex items-center"
            href="#home"
          >
            <img src={logo} alt="logo" className="hidden lg:block lg:w-20" />
            <span className="font-bold text-lg lg:text-2xl">
              MAA The Foundation
            </span>
          </a>
          <button
            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={
            "lg:flex items-center bg-yellow-300 px-4 md:px-14 w-2/4 md:py-10" +
            (navbarOpen
              ? " flex flex-grow justify-center "
              : " hidden justify-end")
          }
          id="navbar-danger"
        >
          <ul className="flex items-center flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link
                className="lg:pl-6 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                to="/gallery"
              >
                <span className="ml-2 lg:text-base relative link n-link">
                  Gallery
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#news"
                className="lg:pl-6 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
              >
                <span className="ml-2 lg:text-base relative link n-link">
                  News Feed
                </span>
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#about"
                className="lg:pl-6 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
              >
                <span className="ml-2 lg:text-base relative link n-link">
                  About Us
                </span>
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#contact"
                className="lg:pl-6 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
              >
                <span className="ml-2 lg:text-base relative link n-link">
                  Contact Us
                </span>
              </HashLink>
            </li>
            <li className="nav-item lg:pl-6 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black">
                <span className="ml-2 lg:text-base">
                  <button className="bg-green-500 hover:bg-green-700 text-white uppercase font-bold py-2 px-4 rounded" onClick={clickHandler}>
                    Donate Now
                  </button>
                </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
