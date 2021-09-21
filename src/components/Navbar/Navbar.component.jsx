import React from "react";
import "./Navbar.styles.css";
import { ReactComponent as BehanceIcon } from "./behance.svg";
import { ReactComponent as InstagramIcon } from "./instagram.svg";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="NavbarTitle">Алексей Апарин</div>
      <div className="NavbarIconsContainer">
        <div className="NavbarIcon NavbarIconInstagram">
          <InstagramIcon title="instagram link" />
        </div>
        <div className="NavbarIcon NavbarIconBehance">
          <BehanceIcon title="behance link" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
