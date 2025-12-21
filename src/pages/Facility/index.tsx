import Footer from "components/Footer";
import Navbar from "components/Navbar";
import GallerySection from "components/GallerySection";
import CTA from "views/HomepageViews/CtaSection";
import Gallery1 from "assets/images/facility/facilty-gallery-1.png";
import Gallery2 from "assets/images/facility/facilty-gallery-2.png";
import Gallery3 from "assets/images/facility/facilty-gallery-3.png";
import Gallery4 from "assets/images/facility/facilty-gallery-4.png";
import Gallery5 from "assets/images/facility/facilty-gallery-5.png";
import FacilityBgLg from "assets/images/facility/facility-bg-lg.png";
import FacilityBgSm from "assets/images/facility/facility-bg-sm.png";
import styles from "./style.module.scss";
import HeroSection from "@/components/HeroSection";
import { BOOK_NOW_LINK } from "@/utils/constants";
import AboutFacilty from "@/views/FaciltyViews/AboutFacilty";

const GALLERY_IMAGES = [
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
];

const HERO_SECTION_DATA = {
  title: "Insportz Facility",
  description:
    "Experience top-quality turfs, courts, and training spaces designed to elevate performance at every level. Play, train, and compete in an environment built for serious sport and unmatched comfort.",
  btn1: {
    text: "Book Now",
    link: BOOK_NOW_LINK,
    target: "_blank",
  },
  btn2: {
    text: "Explore More",
    link: "/book-now",
  },
  bgLg: FacilityBgLg,
  bgSm: FacilityBgSm,
};

function Facilty() {
  return (
    <>
      <Navbar />
      <div className={styles["facilty__wrapper"]}>
        <HeroSection {...HERO_SECTION_DATA} />
        <AboutFacilty />
        <GallerySection title="Facilty Gallery" images={GALLERY_IMAGES} />
        <CTA />
      </div>
      <Footer />
    </>
  );
}

export default Facilty;
