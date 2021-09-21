import React from "react";
import "./Footer.styles.css";
import { ReactComponent as BehanceIcon } from "./behance.svg";
import { ReactComponent as InstagramIcon } from "./instagram.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterIcon FooterIconInstagram">
        <InstagramIcon title="instagram link" />
      </div>
      <div className="FooterIcon FooterIconBehance">
        <BehanceIcon title="behance link" />
      </div>
    </div>
  );
};
export default Footer;
