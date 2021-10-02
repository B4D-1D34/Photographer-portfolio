import React from "react";
import "./Footer.styles.css";
import { ReactComponent as BehanceIcon } from "./behance.svg";
import { ReactComponent as InstagramIcon } from "./instagram.svg";
import { ReactComponent as MailIcon } from "./mail.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterIcon FooterIconMail">
        <a
          href="mailto:alekseyap@icloud.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MailIcon title="mail link" />
        </a>
      </div>
      <div className="FooterIcon FooterIconBehance">
        <a
          href="https://www.behance.net/aleksap"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BehanceIcon title="behance link" />
        </a>
      </div>
      <div className="FooterIcon FooterIconInstagram">
        <a
          href="https://www.instagram.com/aleks_ap"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon title="instagram link" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
