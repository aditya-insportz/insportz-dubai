import HeroSection from "components/HeroSection";
import Navbar from "components/Navbar";
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

const HERO_DATA = {
  title: "Table Tennis Dubai | Play Ping Pong Indoors",
  description:
    "Enjoy indoor table tennis in Dubai at Insportz. Book tables by the hour, practice with friends, or join coaching sessions.",
  btn1: {
    text: "Book Now",
    link: "/book-now",
  },
  btn2: {
    text: "Explore More",
    link: "/book-now",
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
  link: "/book-now",
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
    link: "/book-now",
  },
  btn2: {
    text: "Join Coaching",
    link: "/book-now",
    color: "#000000",
    padding: "12px 32px",
  },
};

const GALLERY_IMGS = [bdGallery1, bdGallery2, bdGallery3, bdGallery4];

function TableTennis() {
  return (
    <>
      <Navbar />
      <div className={styles["padel__container"]}>
        <HeroSection {...HERO_DATA} />
        <InfoSection {...INFO_SECTION_DATA} />
        <section className={styles["content__section"]}>
          <div className={styles["content__wrapper"]}>
            <InfoBox {...INFO_BOX_1} />
            <div className={styles["image__wrapper"]}>
              <img src={BD4} alt="Indoor Cricket 2" />
            </div>
          </div>
          <div className={styles["content__wrapper"]}>
            <InfoBox {...INFO_BOX_2} />
            <div className={styles["image__wrapper"]}>
              <img src={BD5} alt="Indoor Cricket 2" />
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
