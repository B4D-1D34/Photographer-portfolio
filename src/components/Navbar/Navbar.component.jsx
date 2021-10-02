import React from "react";
import "./Navbar.styles.css";
import { ReactComponent as BehanceIcon } from "./behance.svg";
import { ReactComponent as InstagramIcon } from "./instagram.svg";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="NavbarTitle">
        Алексей Апарин → <span className="titleThin">фотограф</span>
      </div>
      <div className="NavbarIconsContainer">
        <div className="NavbarIcon NavbarIconBehance">
          <a
            href="https://www.behance.net/aleksap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BehanceIcon title="behance link" />
          </a>
        </div>
        <div className="NavbarIcon NavbarIconInstagram">
          <a
            href="https://www.instagram.com/aleks_ap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon title="instagram link" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
