import * as React from 'react';
import { FaTwitter, FaFacebook, FaTelegram } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import './Footer.css';
export const Footer: React.FunctionComponent = () => (
  <footer className="footer">
    <div className="footer_social-wrapper">
      <a
        href="https://twitter.com/"
        target="_blank"
        className="footer_social-wrapper_twitter"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        className="footer_social-wrapper_instagram"
      >
        <RiInstagramFill />
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        className="footer_social-wrapper_facebook"
      >
        <FaFacebook />
      </a>
      <a
        href="https://web.telegram.org/"
        target="_blank"
        className="footer_social-wrapper_telegram"
      >
        <FaTelegram />
      </a>
    </div>
  </footer>
);
