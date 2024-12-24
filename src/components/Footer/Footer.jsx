import s from "./Footer.module.css";

import {

  FaFacebook,

  FaInstagram,
  FaReact,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className={s.footer}>
      <ul className={s.list_socials}>
        <li>
          <a href="https://www.instagram.com/denvik_i/" target="_blank">
            <FaInstagram className={s.social_icon} />
          </a>
        </li>
        <li>
          <a href="https://x.com/" target="_blank">
            <FaXTwitter className={s.social_icon} />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100029193428156"
            target="_blank"
          >
            <FaFacebook className={s.social_icon} />
          </a>
        </li>
        <li>
          <a href="https://t.me/Denys_HV" target="_blank">
          <FaTelegramPlane className={s.social_icon} />
          </a>
        </li>
      </ul>
      <nav className={s.nav}>
        <ul className={s.list_navigation}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <a href="https://github.com/DenysHV1/goit-react-hw-08" target="_blank">
              Info
            </a>
          </li>
          <li>
            <a href="#" className={s.disabled}>Support</a>
          </li>
          <li>
            <a href="mailto:denyagarkusha2@gmail.com">Contact us</a>
          </li>
        </ul>
        <ul className={s.list_navigation}>
          <li>
            <Link className={s.disabled}>FAQ</Link>
          </li>
          <li>
            <a
              href="https://denyshv1.github.io/DENYS_HV-PORTFOLIO/"
              target="_blank"
            >
              Portfolio
            </a>
          </li>
        </ul>
      </nav>
      <div className={s.footer_bottom}>
        <p>Created by Denys Harkusha ©</p>
        <div>
          Based on React <FaReact className={s.react_icon} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
