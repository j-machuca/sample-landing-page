import Logo from "./../assets/images/logo.svg";

import { pageLinks, socialLinks } from "../utils/data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link, i) => {
            return (
              <li key={i}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((social, i) => {
            return (
              <li key={i}>
                <a
                  href={social.href}
                  target="_blank"
                  className="nav-icon"
                  rel="noreferrer"
                >
                  <i className={social.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
