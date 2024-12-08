import React from "react";
import "./header.scss";
import nikeLogo from "../../img/logo/nikeLogo.svg";
import cartIcon from "../../img/icons/cartIcon.svg";
import profileIcon from "../../img/icons/profileIcon.svg";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={nikeLogo} alt="Nike logo" />
        </div>
        <div className="tabs">
          <nav>
            <ul>
              <li>
                <a href="#!">New releases</a>
              </li>
              <li>
                <a href="#!">Men</a>
              </li>
              <li>
                <a href="#!">Women</a>
              </li>
              <li>
                <a href="#!">Kids</a>
              </li>
              <li>
                <a href="#!">Customize</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="profile">
          <nav>
            <ul>
              <li>
                <a href="#!">
                  <img src={profileIcon} alt="profile" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <img src={cartIcon} alt="cart" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
