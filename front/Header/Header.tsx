import * as React from 'react';
import './Header.css';
import { BsBoxArrowInRight, BsFillPersonPlusFill } from 'react-icons/bs';

export const Header: React.FunctionComponent = () => (
  <div className="header-container">
    <div className="header-button-container">
      <div className="header-button">
        <span>
          <BsBoxArrowInRight />
        </span>
        <a href="#">SIGN IN</a>
        <span></span>
      </div>
      <div className="header-button">
        <span>
          <BsFillPersonPlusFill />
        </span>
        <span>
          <a href="#">SIGN UP</a>
        </span>
      </div>
    </div>
  </div>
);
