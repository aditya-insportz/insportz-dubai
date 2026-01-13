import HeroSection from "components/HeroSection";
import Navbar from "components/Navbar";
import Head from "components/Head";
import styles from "./style.module.scss";
import InfoBox from "components/InfoBox";
import HeroBgLg from "assets/images/badminton/badminton-hero-lg.png";
import HeroBgSm from "assets/images/badminton/badminton-hero-sm.png";
import bdGallery1 from "assets/images/badminton/bd-gallery-1.png";
import bdGallery2 from "assets/images/badminton/bd-gallery-2.png";
import bdGallery3 from "assets/images/badminton/bd-gallery-3.png";
import bdGallery4 from "assets/images/badminton/bd-gallery-4.png";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import BD1 from "assets/images/badminton/bd-1.png";
import BD2 from "assets/images/badminton/bd-2.png";
import BD3 from "assets/images/badminton/bd-3.png";
import BD4 from "assets/images/badminton/bd-4.png";
import BD5 from "assets/images/badminton/bd-5.png";
import { BOOK_NOW_LINK, WHATSAPP_LINK, APP_ROUTES } from "@/utils/constants";

const HERO_DATA = {
  title: "Badminton Courts in Dubai | Insportz Club",
  description:
    "Play badminton in Dubai at Insportz. High-quality indoor courts, coaching for all levels, and hourly court bookings available.",
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
  title: "Smash, Rally, and Play Indoors",
  content:
    "Our premium indoor badminton courts provide the perfect environment for competitive or casual play.",
  img1: BD1,
  img2: BD2,
  img3: BD3,
  link: BOOK_NOW_LINK,
  target: "_blank",
};

const INFO_BOX_1 = {
  title: "Facility Highlights:",
  listItems: [
    "Cushioned wooden flooring",
    "Perfectly lit courts",
    "Singles and doubles options",
  ],
};

const INFO_BOX_2 = {
  title: "Coaching & Events:",
  listItems: [
    "Kids and adult classes available",
    "Advanced player training on request",
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

function Badminton() {
  return (
    <>
      <Head 
        metadata={{
          title: "Badminton Courts in Dubai | Insportz Club",
          description: "Play badminton in Dubai at Insportz. High-quality indoor courts, coaching for all levels, and hourly court bookings available.",
          path: "/facility/badminton",
          keywords: "badminton dubai, badminton court dubai, badminton coaching dubai, badminton lessons dubai, indoor badminton dubai, insportz badminton"
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
              <img src={BD4} alt="Badminton court at Insportz Dubai" />
            </div>
          </div>
          <div className={styles["content__wrapper"]}>
            <InfoBox {...INFO_BOX_2} />
            <div className={styles["image__wrapper"]}>
              <img src={BD5} alt="Badminton players at Insportz Dubai facility" />
            </div>
          </div>
        </section>
        <GallerySection title="Badminton Gallery" images={GALLERY_IMGS} />
        <Footer />
      </div>
    </>
  );
}

export default Badminton;
