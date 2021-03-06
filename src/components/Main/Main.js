import React from "react";
import "./main.scss";
import arrowDown from "../../images/arrow-down.svg";
import { Link } from "react-scroll";

const Main = () => {
  return (
    <main className="c-main">
      <div className="l-container">
        <div className="c-main__content">
          <h1>Hi there.</h1>
          <Link className="c-main__contact" to="contact" smooth={true} offset={-50} duration={1000}>
            Contact
          </Link>
        </div>
        <img className="arrow-down" src={arrowDown} alt="" />
      </div>
    </main>
  );
};

export default Main;
