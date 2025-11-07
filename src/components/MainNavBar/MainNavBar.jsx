import "./MainNavBar.scss";
import { useEffect } from "react";
import { useState } from "react";
import decksrayLogo from "/assets/logo/logo_main.png";

export const MainNavBar = () => {
  const [showMenuDropdown, setShowMenuDropDown] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos === 0) {
        document.getElementById("main-nav-links").classList.remove("popped");
        document.getElementById("main-nav-arrow-up").style.opacity = "0";
        document.getElementById("main-nav-arrow-up-container").style.cursor =
          "default";
      } else {
        document.getElementById("main-nav-links").classList.add("popped");
        document.getElementById("main-nav-arrow-up").style.opacity = "1";
        document.getElementById("main-nav-arrow-up-container").style.cursor =
          "pointer";
      }

      if (scrollPos <= 30) {
        document
          .getElementById("main-nav-hamburger-menu")
          .classList.remove("popped");
      } else {
        document
          .getElementById("main-nav-hamburger-menu")
          .classList.add("popped");
      }

      const sections = [...document.getElementsByTagName("section")];
      const navLinks = [...document.querySelectorAll("#main-nav-links li")];
      let activeSection;
      for (let i = 0; i < sections.length; i++) {
        if (scrollPos - window.innerHeight * 0.9 <= sections[i].offsetTop) {
          activeSection = sections[i];

          break;
        }
      }
      navLinks.forEach((e) => e.classList.remove("active"));
      if (activeSection) {
        navLinks[sections.indexOf(activeSection)].classList.add("active");
      }
    });
  }, []);

  const onDropdownLinkClick = () => {
    setShowMenuDropDown(false);
  };

  return (
    <nav id="main-nav-bar">
      <div id="main-nav-logo-container">
        <a href="/">
          <img src={decksrayLogo} alt="Decksray-Logo" />
        </a>
      </div>
      <div id="main-nav-links-container">
        <ul id="main-nav-links">
          <li></li>
          <a href="#how-it-works">
            <li>How It Works</li>
          </a>
          <a href="#in-action">
            <li>In Action</li>
          </a>
          <a href="#about-us">
            <li>About Us</li>
          </a>

          <a href="#contact-us">
            <li>Contact</li>
          </a>
          <a href="#">
            <li id="main-nav-arrow-up-container">
              <i id="main-nav-arrow-up" className="fa-solid fa-arrow-up" />
            </li>
          </a>
        </ul>

        <div id="main-small-screen-nav">
          <i
            id="main-nav-hamburger-menu"
            className="fa-solid fa-bars"
            onClick={() => setShowMenuDropDown(true)}
          />

          <ul
            id="dropdown-nav-links"
            className={showMenuDropdown ? "" : "hide"}
          >
            <li onClick={onDropdownLinkClick} id="dropdown-closing-x">
              <i className="fa-solid fa-xmark" />
            </li>
            <a href="#how-it-works" onClick={onDropdownLinkClick}>
              <li>How It Works</li>
            </a>
            <a href="#in-action" onClick={onDropdownLinkClick}>
              <li>In Action</li>
            </a>
            <a href="#about-us" onClick={onDropdownLinkClick}>
              <li>About Us</li>
            </a>
            <a href="#contact-us" onClick={onDropdownLinkClick}>
              <li>Contact</li>
            </a>
            <a href="#" onClick={onDropdownLinkClick}>
              <li id="dropdown-nav-arrow-up">
                <i
                  id="dropdown-nav-arrow-up"
                  className="fa-solid fa-arrow-up"
                />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};
