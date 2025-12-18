import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InsportzLogo from "assets/icons/insportz-logo.png";
import Chevron from "assets/icons/chevron-down.png";
import ChevronWhite from "assets/icons/chevron-down-white.png";
import styles from "./style.module.scss";
import Arrow from "assets/icons/arrow.svg";

const NAVBAR_ITEMS = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Facility",
    link: "/facility",
    subItems: [
      {
        label: "Indoor Cricket",
        link: "/indoor-cricket",
      },
      {
        label: "Padel",
        link: "/padel",
      },
      {
        label: "Badminton",
        link: "/badminton",
      },
      {
        label: "Volleyball",
        link: "/volleyball",
      },
      {
        label: "Football",
        link: "/football",
      },
      {
        label: "Table Tennis",
        link: "/table-tennis",
      },
    ],
  },
  {
    label: "Leagues & Tournaments",
    link: "/leagues-and-tournaments",
  },
  {
    label: "Training & Coaching",
    link: "/training-and-coaching",
  },
  {
    label: "Corporate & Parties",
    link: "/corporate-and-parties",
  },
  {
    label: "Contact Us",
    link: "/contact-us",
  },
];

function Navbar() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedFacility, setExpandedFacility] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isDesktop) {
    return (
      <nav className={styles["navbar"]}>
        <div className={styles["nav__container"]}>
          <Link to="/" className={styles["nav__logo"]}>
            <img
              src={InsportzLogo}
              alt="Insportz Dubai"
              className={styles["logo__image"]}
            />
          </Link>
          <ul className={styles["nav__menu"]}>
            {NAVBAR_ITEMS.map((item) => (
              <li key={item.label} className={styles["nav__item"]}>
                {item.subItems ? (
                  <div className={styles["dropdown"]}>
                    <span className={styles["nav__link"]}>
                      {item.label}
                      <img src={Chevron} alt="" className={styles["chevron"]} />
                    </span>
                    <ul className={styles["dropdown__menu"]}>
                      {item.subItems.map((subItem) => (
                        <li
                          key={subItem.label}
                          className={styles["dropdown__item"]}
                        >
                          <Link
                            to={subItem.link}
                            className={styles["dropdown__link"]}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link to={item.link} className={styles["nav__link"]}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link to="/book-now" className={styles["book__now__btn"]}>
            <span>Book Now</span>
            <div>
              <img src={Arrow} alt="arrow" />
            </div>
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["nav__container"]}>
        <Link to="/" className={styles["nav__logo"]}>
          <img
            src={InsportzLogo}
            alt="Insportz Dubai"
            className={styles["logo__image"]}
          />
        </Link>
        <button
          className={`${styles["hamburger"]} ${
            isMobileMenuOpen ? styles["hamburger--active"] : ""
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className={styles["mobile__menu"]}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <motion.div 
              className={styles["mobile__menu__content"]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.2 }}
            >
            {NAVBAR_ITEMS.map((item) => (
              <div key={item.label} className={styles["mobile__nav__item"]}>
                {item.subItems ? (
                  <>
                    <button
                      className={styles["mobile__nav__link"]}
                      onClick={() => setExpandedFacility(!expandedFacility)}
                    >
                      {item.label}
                      <img
                        src={ChevronWhite}
                        alt=""
                        className={styles["mobile__chevron"]}
                      />
                    </button>
                    {expandedFacility && (
                      <div className={styles["mobile__submenu"]}>
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.link}
                            className={styles["mobile__submenu__link"]}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.link}
                    className={styles["mobile__nav__link"]}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/book-now"
              className={styles["book__now__btn"]}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Book Now</span>
              <div>
                <img src={Arrow} alt="arrow" />
              </div>
            </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
