import "./MainFooter.scss";

export const MainFooter = () => {
  return (
    <div id="main-footer">
      <ul id="main-footer-links">
        <a href="/join">
          <li>Join Us!</li>
        </a>
        <a
          href="https://www.termsfeed.com/live/38b88b54-eab1-41ed-81f7-c68e55cbf7dd"
          target="_blank"
        >
          <li>Privacy Policy</li>
        </a>
        <a
          href="https://www.termsfeed.com/live/1bef4889-e568-404f-9b23-9b034d47d9ec"
          target="_blank"
        >
          <li>Terms & Conditions</li>
        </a>
        <a
          href="https://www.termsfeed.com/live/c5611791-bc93-4c6e-8277-77e1e5bb90cd"
          target="_blank"
        >
          <li>Cookies Policy</li>
        </a>
        {/* <a href="#contact-us">
          <li>Support Us</li>
        </a> */}
        {/* <a href="#contact-us">
          <li>Imprint</li>
        </a> */}
        <a href="#contact-us">
          <li>Contact</li>
        </a>
      </ul>
      <div id="main-footer-socials">
        <a href="https://youtube.com/@Decksray" target="_blank">
          <i className="fa-brands fa-youtube" />
        </a>

        <a
          href="https://www.instagram.com/decksray.com_tcg_scanner/"
          target="_blank"
        >
          <i className="fa-brands fa-instagram" />
        </a>

        <a href="https://bsky.app/profile/decksray.com" target="_blank">
          <i className="fa-brands fa-bluesky" />
        </a>

        <a href="https://www.linkedin.com/company/decksray" target="_blank">
          <i className="fa-brands fa-linkedin" />
        </a>

        <a href="https://www.reddit.com/user/ben-decksray/" target="_blank">
          <i className="fa-brands fa-reddit-alien" />
        </a>

        {/* <a href="mailto:info@decksray.com" target="_blank">
          <i className="fa-regular fa-envelope" />
        </a> */}

        {/* coming soon!!!*/}

        {/* <a href="#contact-us">
          <i className="fa-brands fa-kickstarter" />
        </a> */}

        {/* coming soon?? */}

        {/* <a href="#contact-us">
          <i className="fa-brands fa-patreon" />
        </a>
        
        <a href="#contact-us">
          <i className="fa-brands fa-facebook" />
        </a>
        <a href="#contact-us">
          <i className="fa-brands fa-discord" />
        </a>
        <a href="#contact-us">
          <i className="fa-brands fa-tiktok" />
        </a>
        <a href="#contact-us">
          <i className="fa-brands fa-twitch" />
        </a> */}
      </div>
      <p id="main-footer-disclaimer">
        Magic: The Gathering is a Trademark of Wizards of the Coast, Inc. and
        Hasbro, Inc. We are unaffiliated. The literal and graphical information
        presented on this site about Magic: The Gathering, including card
        images, the mana symbols, and Oracle text, is copyright Wizards of the
        Coast, LLC, a subsidiary of Hasbro, Inc. Nexdecks or Decksray are not
        produced by, endorsed by, supported by, or affiliated with Wizards of
        the Coast.
      </p>
    </div>
  );
};
