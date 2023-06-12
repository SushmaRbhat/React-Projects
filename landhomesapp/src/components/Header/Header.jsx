import React, { useState } from "react";
import "./Header.css";
import logo from "../../static/Landhomes.png";
import Button from "@mui/material/Button";
import { CustomSelect } from "../Select/Select";

export const Header = () => {
  const [showmenu, setShowMenu] = useState(false);

  return (
    <header className="sticky">
      <nav className="main-header">
        <div className="logo-link">
          <img src={logo} />{" "}
          <div className="hambergurmenu">
            <button
              onClick={() => {
                setShowMenu(!showmenu);
                console.log(showmenu);
              }}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>{" "}
        </div>
        <div className="nav-action-container">
          <div className="select-city">
            <CustomSelect />
          </div>
          <ul
            className={setShowMenu ? "menu-link mobile-menu-link" : "menu-link"}
          >
            <li className="nav-item">
              <a
                className="nav-link"
                id="nav_links"
                href="https://landsandhomes.com/compare"
              >
                <i className="fas fa-arrows-alt-h"> </i>
                Compare
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="nav_links"
                href="https://landsandhomes.com/wishlist_shortlist"
              >
                <i className="fa-regular fa-heart"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="nav_links"
                href="https://landsandhomes.com/wishlist_shortlist"
              >
                <i className="fa-regular fa-rectangle-list"></i> Shortlist
              </a>
            </li>
            <li className="nav-item me-3">
              <a
                className="nav-link add_property_btn text-light"
                id="nav_links"
                href="https://landsandhomes.com/account/properties/create"
              >
                <button className="menu-btn">
                  <i className="fa-regular fa-plus"></i> Add Property
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link login_btn text-light"
                id="nav_links"
                href="https://landsandhomes.com/login"
              >
                <button className="menu-btn">Login</button>
              </a>
            </li>
          </ul>{" "}
        </div>
      </nav>
    </header>
  );
};
