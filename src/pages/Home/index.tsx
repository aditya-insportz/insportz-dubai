import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Head from "components/Head";
import StructuredData from "components/StructuredData";
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
      <Head 
        metadata={{
          title: "Insportz Dubai - Premier Sports Facility",
          description: "Experience world-class sports facilities in Dubai. Indoor Cricket, Padel, Badminton, Volleyball, Football, and Table Tennis at Insportz Dubai.",
          path: "/",
          keywords: "sports facility dubai, indoor cricket dubai, padel dubai, badminton dubai, volleyball dubai, football dubai, table tennis dubai, insportz club"
        }}
      />
      <StructuredData />
      <Navbar />
      <div className={styles["home__wrapper"]}>
        <h1 style={{position: 'absolute', left: '-9999px'}}>Insportz Dubai - Premier Sports Facility</h1>
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
