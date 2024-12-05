// react state
import { useState } from "react";

// React icon
import { MdAccountCircle } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { CgMenu } from "react-icons/cg";

// Import Image
import Logo from "../../images/Logo.png";

// import Account component sing in or sing up perpas
import Account from "../account/account.jsx";
import SearchBar from "../searchResult/result.jsx";

import "./navbar.css";
const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown open/close state
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar-container">
        <div className="nav">
          
          <div className="input2">
            <SearchBar />
          </div>

          <div className="logo">
            <a href="#">
              <img src={Logo} alt="" />
            </a>
          </div>

          <ul className="ul-menu flex gap-10">
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>

            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Menu</a>
            </li>

            <li>
              <a href="#">Reservation</a>
            </li>

            <li>
              <a href="#">Blog</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <div className="car-or-account">
            
           <div className="input1">
              <SearchBar/>
            </div>
            
            <div className="input dropdown">
              <div className="flex gap-1" onClick={toggleDropdown}>
                <MdAccountCircle className="cart-icon-by-man" />
                <p> Account </p>
              </div>

              {isOpen && (
                <div className="dropdown-menu">
                  <Account />
                </div>
              )}
            </div>

            <div className="input">
              <div className="count">0</div>
              <MdShoppingCart className="cart-icon-by-man" />
            </div>

            <div className="responsive-nav">
              <CgMenu className="nav-menu-responsive" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
