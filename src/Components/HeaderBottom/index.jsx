import React, { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function HeaderBottom() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="header__bottom">
      <div className="header__bottom__left">
        <img src="https://preview.colorlib.com/theme/woodrox/img/logo.png.webp" alt="" />
      </div>
      <div onClick={()=>setOpenMenu(!openMenu)} className="header__bottom__menu">
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </div>
      <div style={openMenu? {height: "290px"}: null} className="header__bottom__right">
        <nav>
          <ul className="header__bottom__right__nav">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="header__bottom__right__nav__pages">
              <span>PAGES</span>
              <ul className="header__bottom__right__nav__pages__menu">
                <li><Link to="/project">PROJECT</Link></li>
                <li><Link to="/project-details">PROJECT DETAIL</Link></li>
                <li>ELEMENTS</li>
              </ul>
            </li>
            <li className="header__bottom__right__nav__blog">
              <Link>BLOG</Link>
              <ul className="header__bottom__right__nav__blog__menu">
                <li>BLOG</li>
                <li>BLOG DETAIL</li>
              </ul>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HeaderBottom;
