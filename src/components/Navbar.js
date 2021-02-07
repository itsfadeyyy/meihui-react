import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Logo from "../images/logo.png";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [active, setActive] = useState("");
  // Get user scroll positon
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  //Mobile icon bar on click
  const handleOpen = () => {
    setActive("active");
  };

  const handleClose = () => {
    setActive("");
  };

  //listen to userscroll position
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  let activeNav;
  if ((window.innerWidth < 500) & (scrollPosition > 90)) {
    activeNav = "sticky";
  } else if (scrollPosition > 400) {
    activeNav = "sticky";
  } else activeNav = "";

  return (
    <nav className={`navbar ${activeNav}`}>
      <div className="max-width">
        <div className="logo">
          <a href="#">
            <img src={Logo}></img>
          </a>
        </div>
        <ul className={`menu ${active}`}>
          <li>
            <a href="#home" className="menu-btn" onClick={handleClose}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="menu-btn" onClick={handleClose}>
              About
            </a>
          </li>
          <li>
            <a href="#services" className="menu-btn" onClick={handleClose}>
              Services
            </a>
          </li>
          <li>
            <a href="#skills" className="menu-btn" onClick={handleClose}>
              Skills
            </a>
          </li>
          <li>
            <a href="#teams" className="menu-btn" onClick={handleClose}>
              Works
            </a>
          </li>
          <li>
            <a href="#contact" className="menu-btn" onClick={handleClose}>
              Contact
            </a>
          </li>
        </ul>
        <div className="menu-btn">
          {active ? (
            <IoCloseSharp onClick={handleClose} />
          ) : (
            <GiHamburgerMenu onClick={handleOpen} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
