import HeroSection from "components/HeroSection";
import Navbar from "components/Navbar";
import Head from "components/Head";
import styles from "./style.module.scss";
import InfoBox from "components/InfoBox";
import HeroBgLg from "assets/images/table-tennis/tt-hero-lg.png";
import HeroBgSm from "assets/images/table-tennis/tt-hero-sm.png";
import bdGallery1 from "assets/images/table-tennis/tt-gallery-1.png";
import bdGallery2 from "assets/images/table-tennis/tt-gallery-2.png";
import bdGallery3 from "assets/images/table-tennis/tt-gallery-3.png";
import bdGallery4 from "assets/images/table-tennis/tt-gallery-4.png";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import BD1 from "assets/images/table-tennis/tt-1.png";
import BD2 from "assets/images/table-tennis/tt-2.png";
import BD3 from "assets/images/table-tennis/tt-3.png";
import BD4 from "assets/images/table-tennis/tt-4.png";
import BD5 from "assets/images/table-tennis/tt-5.png";
import { BOOK_NOW_LINK, WHATSAPP_LINK, APP_ROUTES } from "@/utils/constants";

const HERO_DATA = {
  title: "Table Tennis Dubai | Play Ping Pong Indoors",
  description:
    "Enjoy indoor table tennis in Dubai at Insportz. Book tables by the hour, practice with friends, or join coaching sessions.",
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

const INFO_SECTION_DATA = {
  title: "Quick, Fun, and Competitive",
  content:
    "Table tennis is perfect for all ages, and our indoor setup ensures you can play anytime.",
  img1: BD1,
  img2: BD2,
  img3: BD3,
  link: BOOK_NOW_LINK,
  target: "_blank",
};

const INFO_BOX_1 = {
  title: "Highlights:",
  listItems: [
    "Smooth tournament-grade tables",
    "Paddles and balls available on-site",
    "Singles or doubles play",
  ],
};

const INFO_BOX_2 = {
  title: "Coaching:",
  listItems: [
    "Kids and adult coaching sessions",
    "Focus on agility and technique",
  ],
  btn1: {
    text: "Book a Table",
    link: BOOK_NOW_LINK,
    target: "_blank",
  },
  btn2: {
    text: "Join Coaching",
    link: WHATSAPP_LINK,
    target: "_blank",
    color: "#000000",
    padding: "12px 32px",
  },
};

const GALLERY_IMGS = [bdGallery1, bdGallery2, bdGallery3, bdGallery4];

function TableTennis() {
  return (
    <>
      <Head 
        metadata={{
          title: "Table Tennis Dubai | Play Ping Pong Indoors",
          description: "Enjoy indoor table tennis in Dubai at Insportz. Book tables by the hour, practice with friends, or join coaching sessions.",
          path: "/facility/table-tennis",
          keywords: "table tennis dubai, ping pong dubai, table tennis coaching dubai, table tennis lessons dubai, indoor table tennis dubai, insportz table tennis"
        }}
      />
      <Navbar />
      <div className={styles["padel__container"]}>
        <HeroSection {...HERO_DATA} />
        <InfoSection {...INFO_SECTION_DATA} />
        <section className={styles["content__section"]}>
          <div className={styles["content__wrapper"]}>
            <InfoBox {...INFO_BOX_1} />
            <div className={styles["image__wrapper"]}>
              <img src={BD4} alt="Table tennis tables at Insportz Dubai" />
            </div>
          </div>
          <div className={styles["content__wrapper"]}>
            <InfoBox {...INFO_BOX_2} />
            <div className={styles["image__wrapper"]}>
              <img src={BD5} alt="Table tennis players at Insportz Dubai facility" />
            </div>
          </div>
        </section>
        <GallerySection title="Football Gallery" images={GALLERY_IMGS} />
        <Footer />
      </div>
    </>
  );
}

export default TableTennis;
