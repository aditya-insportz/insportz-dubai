import HeroSection from "components/HeroSection";
import Navbar from "components/Navbar";
import Head from "components/Head";
import styles from "./style.module.scss";
import InfoBox from "components/InfoBox";
import HeroBgLg from "assets/images/football/football-hero-lg.png";
import HeroBgSm from "assets/images/football/football-hero-sm.png";
import bdGallery1 from "assets/images/football/football-gallery-1.png";
import bdGallery2 from "assets/images/football/football-gallery-2.png";
import bdGallery3 from "assets/images/football/football-gallery-3.png";
import bdGallery4 from "assets/images/football/football-gallery-4.png";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import BD1 from "assets/images/football/football-1.png";
import BD2 from "assets/images/football/football-2.png";
import BD3 from "assets/images/football/football-3.png";
import BD4 from "assets/images/football/football-4.png";
import BD5 from "assets/images/football/football-5.png";
import { BOOK_NOW_LINK, WHATSAPP_LINK, APP_ROUTES } from "@/utils/constants";

const HERO_DATA = {
  title: "Football Dubai | 5-a-Side at Insportz",
  description:
    "Play 5-a-side or 6-a-side football in Dubai at Insportz. LED-lit, all-weather indoor turf for casual games, leagues, and events.",
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
  title: "Play Football All Year Long",
  content:
    "Kick off your best game at Insportz Dubai. Our indoor turf ensures non-stop action, day or night.",
  img1: BD1,
  img2: BD2,
  img3: BD3,
  link: BOOK_NOW_LINK,
  target: "_blank",
};

const INFO_BOX_1 = {
  title: "Why Play Football Here:",
  listItems: [
    "FIFA-quality artificial turf",
    "5-a-side and 6-a-side formats",
    "Wall rebounds for faster games",
  ],
};

const INFO_BOX_2 = {
  title: "Tournaments & Leagues:",
  listItems: [
    "Friendly matches or private group bookings",
    "Seasonal leagues and team-building events",
  ],
  btn1: {
    text: "Book a Turf",
    link: BOOK_NOW_LINK,
    target: "_blank",
  },
  btn2: {
    text: "Join League",
    link: WHATSAPP_LINK,
    target: "_blank",
    color: "#000000",
  },
};

const GALLERY_IMGS = [bdGallery1, bdGallery2, bdGallery3, bdGallery4];

function Football() {
  return (
    <>
      <Head 
        metadata={{
          title: "Football Dubai | 5-a-Side at Insportz",
          description: "Play 5-a-side or 6-a-side football in Dubai at Insportz. LED-lit, all-weather indoor turf for casual games, leagues, and events.",
          path: "/facility/football",
          keywords: "football dubai, 5-a-side football dubai, 6-a-side football dubai, indoor football dubai, football turf dubai, insportz football"
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
              <img src={BD4} alt="Football turf at Insportz Dubai" />
            </div>
          </div>
          <div className={styles["content__wrapper"]}>
            <InfoBox {...INFO_BOX_2} />
            <div className={styles["image__wrapper"]}>
              <img src={BD5} alt="Football players at Insportz Dubai facility" />
            </div>
          </div>
        </section>
        <GallerySection title="Football Gallery" images={GALLERY_IMGS} />
        <Footer />
      </div>
    </>
  );
}

export default Football;
