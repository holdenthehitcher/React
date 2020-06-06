import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    to: "/home",
    text: "Home",
  },
  {
    to: "/directory",
    text: "Directory",
  },
  {
    to: "/about",
    text: "About",
  },
  {
    to: "/contactus",
    text: "Contact",
  },
];

const socialLinks = [
  {
    href: "http://instagram.com/",
    linkClass: "btn-instagram",
    iconClass: "fa-instagram",
  },
  {
    href: "http://www.facebook.com/",
    linkClass: "btn-facebook",
    iconClass: "fa-facebook",
  },
  {
    href: "http://twitter.com/",
    linkClass: "btn-twitter",
    iconClass: "fa-twitter",
  },
  {
    href: "http://youtube.com/",
    linkClass: "btn-google",
    iconClass: "fa-youtube",
  },
];

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul className="list-unstyled">
              {navLinks.map(({ to, text }, i) => (
                <li key={i}>
                  <Link to={to}>{text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-sm-3 text-center">
            <h5>Social</h5>
            <ul className="list-unstyled list-horizontal">
              {socialLinks.map(({ href, linkClass, iconClass }, i) => (
                <li key={i}>
                  <a className={`btn btn-social-icon ${linkClass}`} href={href}>
                    <i className={`fa ${iconClass}`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm-4 text-center">
            <a role="button" className="btn btn-link" href="tel:+12065551234">
              <i className="fa fa-phone" /> 1-206-555-1234
            </a>
            <br />
            <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co">
              <i className="fa fa-envelope-o" /> campsites@nucamp.co
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
