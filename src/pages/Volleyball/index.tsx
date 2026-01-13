import HeroSection from "components/HeroSection";
import Navbar from "components/Navbar";
import Head from "components/Head";
import styles from "./style.module.scss";
import InfoBox from "components/InfoBox";
import HeroBgLg from "assets/images/volleyball/volleyball-hero-lg.png";
import HeroBgSm from "assets/images/volleyball/volleyball-hero-sm.png";
import bdGallery1 from "assets/images/volleyball/vb-gallery-1.png";
import bdGallery2 from "assets/images/volleyball/vb-gallery-2.png";
import bdGallery3 from "assets/images/volleyball/vb-gallery-3.png";
import bdGallery4 from "assets/images/volleyball/vb-gallery-4.png";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import BD1 from "assets/images/volleyball/vb-1.png";
import BD2 from "assets/images/volleyball/vb-2.png";
import BD3 from "assets/images/volleyball/vb-3.png";
import BD4 from "assets/images/volleyball/vb-4.png";
import BD5 from "assets/images/volleyball/vb-5.png";
import { BOOK_NOW_LINK, WHATSAPP_LINK, APP_ROUTES } from "@/utils/constants";

const HERO_DATA = {
  title: "Volleyball Dubai | Book a Court at Insportz",
  description:
    "Spike, serve, and smash! Play volleyball in Dubai at Insportz. Book our indoor court for team games, leagues, or corporate matches.",
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
  title: "Jump Into the Action",
  content:
    "Our indoor volleyball court lets you enjoy the game without worrying about the weather.",
  img1: BD1,
  img2: BD2,
  img3: BD3,
  link: BOOK_NOW_LINK,
  target: "_blank",
};

const INFO_BOX_1 = {
  title: "Why Play at Insportz:",
  listItems: [
    "Professional-grade indoor court",
    "Ideal for team practices and friendlies",
    "Perfect for corporate team-building events",
  ],
};

const INFO_BOX_2 = {
  title: "Quick Rules:",
  listItems: [
    "6 players per side",
    "First to 25 points wins a set",
    "Best of 3 or 5 sets",
  ],
  btn1: {
    text: "Book a Court",
    link: BOOK_NOW_LINK,
    target: "_blank",
  },
  btn2: {
    text: "Enroll for Coaching",
    link: WHATSAPP_LINK,
    target: "_blank",
    color: "#000000",
  },
};

const GALLERY_IMGS = [bdGallery1, bdGallery2, bdGallery3, bdGallery4];

function Volleyball() {
  return (
    <>
      <Head 
        metadata={{
          title: "Volleyball Dubai | Book a Court at Insportz",
          description: "Spike, serve, and smash! Play volleyball in Dubai at Insportz. Book our indoor court for team games, leagues, or corporate matches.",
          path: "/facility/volleyball",
          keywords: "volleyball dubai, volleyball court dubai, volleyball leagues dubai, indoor volleyball dubai, volleyball coaching dubai, insportz volleyball"
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
              <img src={BD4} alt="Volleyball court at Insportz Dubai" />
            </div>
          </div>
          <div className={styles["content__wrapper"]}>
            <InfoBox {...INFO_BOX_2} />
            <div className={styles["image__wrapper"]}>
              <img src={BD5} alt="Volleyball players at Insportz Dubai facility" />
            </div>
          </div>
        </section>
        <GallerySection title="Volleyball Gallery" images={GALLERY_IMGS} />
        <Footer />
      </div>
    </>
  );
}

export default Volleyball;
