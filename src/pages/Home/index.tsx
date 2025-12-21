import Footer from "components/Footer";
import Navbar from "components/Navbar";
import HomeHero from "views/HomepageViews/HomeHero";
import About from "views/HomepageViews/About";
import Sports from "views/HomepageViews/Sports";
import ClientTestimonials from "views/HomepageViews/ClientTestimonials";
import GallerySection from "components/GallerySection";
import Location from "views/HomepageViews/Location";
import CTA from "views/HomepageViews/CtaSection";
import Gallery1 from "assets/images/homepage/insportz-gallery-1.png";
import Gallery2 from "assets/images/homepage/insportz-gallery-2.png";
import Gallery3 from "assets/images/homepage/insportz-gallery-3.png";
import Gallery4 from "assets/images/homepage/insportz-gallery-4.png";
import Gallery5 from "assets/images/homepage/insportz-gallery-5.png";
import Gallery6 from "assets/images/homepage/insportz-gallery-6.png";
import styles from "./style.module.scss";

const GALLERY_IMAGES = [
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
];

function Home() {
  return (
    <>
      <Navbar />
      <div className={styles["home__wrapper"]}>
        <HomeHero videoId="JrmuLTjAU2g" />
        <About />
        <Sports />
        <ClientTestimonials />
        <GallerySection title="Insportz Gallery" images={GALLERY_IMAGES} />
        <Location />
        <CTA />
      </div>
      <Footer />
    </>
  );
}

export default Home;
