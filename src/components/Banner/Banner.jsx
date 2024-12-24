
import css from "./Banner.module.css";

import bannerVideo from "../../assets/book.mp4";
import { Link } from "react-router-dom";

const HeaderBanner = () => {
  return (
    <section className={css.headerBanner}>
      <div>
        <p>CONTACT BOOK</p>
        <p>
        The contact book is convenient and easy to use!
        </p>
        <div>
          <Link to="contacts">Contacts</Link>
        </div>
      </div>
      <video autoPlay muted loop>
        <source src={bannerVideo} type="video/mp4" />
      </video>
    </section>
  );
};

export default HeaderBanner;
