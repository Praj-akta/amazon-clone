import React from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.scss";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          alt="header-logo"
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option" onClick={handleAuthentication}>
          <span className="header_option_LineOne">
            Hello, {user ? user.email : "Guest"}
          </span>
          <Link to={!user && "/login"}>
            <span className="header_option_LineTwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </Link>
        </div>
        <Link to="/orders">
          <div className="header_option">
            <span className="header_option_LineOne">Returns</span>
            <span className="header_option_LineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_option_LineOne">Your</span>
          <span className="header_option_LineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="cart">
            <ShoppingBasketIcon />
            <span className="cartCount"> {basket.length} </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
