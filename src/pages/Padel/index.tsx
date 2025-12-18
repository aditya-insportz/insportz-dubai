import HeroSection from "components/HeroSection";
import Navbar from "components/Navbar";
import styles from "./style.module.scss";
import InfoBox from "components/InfoBox";
import Padel4 from "assets/images/padel/padel-4.png";
import Padel5 from "assets/images/padel/padel-5.png";
import HeroBgLg from "assets/images/padel/padel-hero-lg.png";
import HeroBgSm from "assets/images/padel/padel-hero-sm.png";
import padelGallery1 from "assets/images/padel/padel-gallery-1.png";
import padelGallery2 from "assets/images/padel/padel-gallery-2.png";
import padelGallery3 from "assets/images/padel/padel-gallery-3.png";
import padelGallery4 from "assets/images/padel/padel-gallery-4.png";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import Padel1 from "assets/images/padel/padel-1.png";
import Padel2 from "assets/images/padel/padel-2.png";
import Padel3 from "assets/images/padel/padel-3.png";

const HERO_DATA = {
  title: "Padel Court Dubai | Play Padel at Insportz Club",
  description:
    "Book your padel court in Dubai at Insportz. Social, exciting, and perfect for 1:1 games. Play or train at our premium indoor courts.",
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
  title: "Dubai’s Fastest Growing Racquet Sport",
  content:
    "Padel has taken Dubai by storm, and Insportz offers an indoor experience perfect for year-round play.",
  img1: Padel1,
  img2: Padel2,
  img3: Padel3,
  link: "/book-now",
};

const INFO_BOX_1 = {
  title: "Why Play Padel at Insportz:",
  listItems: [
    "High-quality glass-enclosed courts",
    "Doubles-friendly game, great for socializing",
    "Weather-proof and LED-lit",
  ],
};

const INFO_BOX_2 = {
  title: "Coaching & Events:",
  listItems: [
    "Beginner and advanced coaching sessions",
    "Friendly tournaments & private bookings",
  ],
  btn1: {
    text: "Book a Court",
    link: "/book-now",
  },
  btn2: {
    text: "Join Coaching",
    link: "/book-now",
    color: "#000000",
    padding: "12px 32px",
  },
};

const GALLERY_IMGS = [
  padelGallery1,
  padelGallery2,
  padelGallery3,
  padelGallery4,
];

function Padel() {
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
              <img src={Padel4} alt="Indoor Cricket 2" />
            </div>
          </div>
          <div className={styles["content__wrapper"]}>
            <InfoBox {...INFO_BOX_2} />
            <div className={styles["image__wrapper"]}>
              <img src={Padel5} alt="Indoor Cricket 2" />
            </div>
          </div>
        </section>
        <GallerySection title="Padel Gallery" images={GALLERY_IMGS} />
        <Footer />
      </div>
    </>
  );
}

export default Padel;
