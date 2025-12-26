import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InsportzLogo from "assets/icons/insportz-logo.png";
import Chevron from "assets/icons/chevron-down.png";
import ChevronWhite from "assets/icons/chevron-down-white.png";
import styles from "./style.module.scss";
import Arrow from "assets/icons/arrow.svg";
import { BOOK_NOW_LINK, APP_ROUTES } from "@/utils/constants";

const NAVBAR_ITEMS = [
  {
    label: "Home",
    link: APP_ROUTES.HOME,
  },
  {
    label: "Facility",
    link: APP_ROUTES.FACILITY,
    subItems: [
      {
        label: "Indoor Cricket",
        link: APP_ROUTES.INDOOR_CRICKET,
      },
      {
        label: "Padel",
        link: APP_ROUTES.PADEL,
      },
      {
        label: "Badminton",
        link: APP_ROUTES.BADMINTON,
      },
      {
        label: "Volleyball",
        link: APP_ROUTES.VOLLEYBALL,
      },
      {
        label: "Football",
        link: APP_ROUTES.FOOTBALL,
      },
      {
        label: "Table Tennis",
        link: APP_ROUTES.TABLE_TENNIS,
      },
    ],
  },
  {
    label: "Leagues & Tournaments",
    link: APP_ROUTES.LEAGUES_AND_TOURNAMENTS,
  },
  {
    label: "Training & Coaching",
    link: APP_ROUTES.TRAINING_AND_COACHING,
  },
  {
    label: "Corporate & Parties",
    link: APP_ROUTES.CORPORATE_AND_PARTIES,
  },
  {
    label: "Contact Us",
    link: APP_ROUTES.CONTACT_US,
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
          <Link to={APP_ROUTES.HOME} className={styles["nav__logo"]}>
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
                    <Link to={item.link} className={styles["nav__link"]}>
                      {item.label}
                      <img src={Chevron} alt="" className={styles["chevron"]} />
                    </Link>
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
          <a href={BOOK_NOW_LINK} className={styles["book__now__btn"]} target="_blank" rel="noopener noreferrer">
            <span>Book Now</span>
            <div>
              <img src={Arrow} alt="arrow" />
            </div>
          </a>
        </div>
      </nav>
    );
  }

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["nav__container"]}>
        <Link to={APP_ROUTES.HOME} className={styles["nav__logo"]}>
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
                      <div className={styles["mobile__nav__item__wrapper"]}>
                        <Link
                          to={item.link}
                          className={styles["mobile__nav__link"]}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                        <button
                          className={styles["mobile__chevron__button"]}
                          onClick={() => setExpandedFacility(!expandedFacility)}
                        >
                          <img
                            src={ChevronWhite}
                            alt=""
                            className={styles["mobile__chevron"]}
                          />
                        </button>
                      </div>
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
              <a
                href={BOOK_NOW_LINK}
                className={styles["book__now__btn"]}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Book Now</span>
                <div>
                  <img src={Arrow} alt="arrow" />
                </div>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
