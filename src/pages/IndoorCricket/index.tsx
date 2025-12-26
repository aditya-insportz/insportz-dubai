import HeroSection from "components/HeroSection";
import Navbar from "components/Navbar";
import IndoorCricketDubai from "views/IndoorCricket/IndoorCricketDubai";
import styles from "./style.module.scss";
import InfoBox from "components/InfoBox";
import IC2 from "assets/images/indoor-cricket/ic-d-2.png";
import IC3 from "assets/images/indoor-cricket/ic-d-3.png";
import IC4 from "assets/images/indoor-cricket/ic-d-4.png";
import HeroBgLg from "assets/images/indoor-cricket/indoor-cricket-hero-lg.png";
import HeroBgSm from "assets/images/indoor-cricket/indoor-cricket-hero-sm.png";
import icGallery1 from "assets/images/indoor-cricket/ic-gallery-1.png";
import icGallery2 from "assets/images/indoor-cricket/ic-gallery-2.png";
import icGallery3 from "assets/images/indoor-cricket/ic-gallery-3.png";
import icGallery4 from "assets/images/indoor-cricket/ic-gallery-4.png";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import { APP_ROUTES, BOOK_NOW_LINK, WHATSAPP_LINK } from "@/utils/constants";

const HERO_DATA = {
  title: "Cricket Dubai | Play at Insportz Club",
  description:
    "Play at the home of indoor cricket in Dubai! Book games, join leagues, or host corporate tournaments at Insportz Dubai.",
  btn1: {
    text: "Book Now",
    link: BOOK_NOW_LINK,
    target: "_blank",
  },
  btn2: {
    text: "Explore More",
    link: APP_ROUTES.CONTACT_US,
  },
  bgLg: HeroBgLg,
  bgSm: HeroBgSm,
};

const INFO_BOX_1 = {
  title: "Why We’re the Home of Indoor Cricket:",
  listItems: [
    "Professional-grade indoor cricket pitches",
    "Ideal for 6-a-side or 8-a-side formats",
    "Popular venue for leagues & corporate tournaments",
    "Option to book umpires and scorers",
  ],
};

const INFO_BOX_2 = {
  title: "Basic Rules:",
  listItems: [
    "6-8 players per team",
    "Every player bats and bowls",
    "Wall rebounds add to the thrill",
  ],
};

const INFO_BOX_3 = {
  title: "Coaching & Leagues:",
  listItems: [
    "Adult and youth cricket coaching",
    "Seasonal leagues and weekend tournaments",
  ],
  btn1: {
    text: "Book a Pitch",
    link: BOOK_NOW_LINK,
    target: "_blank",
  },
  btn2: {
    text: "Join League",
    link: WHATSAPP_LINK,
    target: "_blank",
    color: "#000000",
    padding: "12px 40px",
  },
};

const GALLERY_IMGS = [icGallery1, icGallery2, icGallery3, icGallery4];

function IndoorCricket() {
  return (
    <>
      <Navbar />
      <div className={styles["indoor__cricket__container"]}>
        <HeroSection {...HERO_DATA} />
        <IndoorCricketDubai />
        <section className={styles["content__section"]}>
          <div className={styles["content__wrapper"]}>
            <InfoBox {...INFO_BOX_1} />
            <div className={styles["image__wrapper"]}>
              <img src={IC2} alt="Indoor Cricket 2" />
            </div>
          </div>
          <div className={styles["content__wrapper"]}>
            <InfoBox {...INFO_BOX_2} />
            <div className={styles["image__wrapper"]}>
              <img src={IC3} alt="Indoor Cricket 2" />
            </div>
          </div>
          <div className={styles["content__wrapper"]}>
            <InfoBox {...INFO_BOX_3} />
            <div className={styles["image__wrapper"]}>
              <img src={IC4} alt="Indoor Cricket 2" />
            </div>
          </div>
        </section>
        <GallerySection title="Indoor Cricket Gallery" images={GALLERY_IMGS} />
        <Footer />
      </div>
    </>
  );
}

export default IndoorCricket;
