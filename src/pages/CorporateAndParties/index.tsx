import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Head from "components/Head";
import GallerySection from "components/GallerySection";
import CorporateGallery1 from "assets/images/corporate-and-parties/corporate-gallery-1.webp";
import CorporateGallery2 from "assets/images/corporate-and-parties/corporate-gallery-2.webp";
import CorporateGallery3 from "assets/images/corporate-and-parties/corporate-gallery-3.webp";
import CorporateGallery4 from "assets/images/corporate-and-parties/corporate-gallery-4.webp";
import CorporateGallery5 from "assets/images/corporate-and-parties/corporate-gallery-5.webp";
import CorporateGallery6 from "assets/images/corporate-and-parties/corporate-gallery-6.webp";
import PartyGallery1 from "assets/images/corporate-and-parties/party-gallery-1.webp";
import PartyGallery2 from "assets/images/corporate-and-parties/party-gallery-2.webp";
import PartyGallery3 from "assets/images/corporate-and-parties/party-gallery-3.webp";
import PartyGallery4 from "assets/images/corporate-and-parties/party-gallery-4.webp";
import PartyGallery5 from "assets/images/corporate-and-parties/party-gallery-5.webp";
import PartyGallery6 from "assets/images/corporate-and-parties/party-gallery-6.webp";
import CorporateLg from "assets/images/corporate-and-parties/corporate-lg.webp";
import CorporateSm from "assets/images/corporate-and-parties/corporate-sm.webp";
import HeroImageSection from "@/components/HeroImageSection";
import styles from "./style.module.scss";
import CorporateSection from "@/views/CorporateAndPartiesViews/CorporateSection";
import Brands from "@/views/CorporateAndPartiesViews/Brands";

const CORPORATE_GALLERY_IMAGES = [CorporateGallery1, CorporateGallery2, CorporateGallery3, CorporateGallery4, CorporateGallery5, CorporateGallery6];
const PARTY_GALLERY_IMAGES = [PartyGallery1, PartyGallery2, PartyGallery3, PartyGallery4, PartyGallery5, PartyGallery6];

function CorporateAndParties() {
  return (
    <>
      <Head 
        metadata={{
          title: "Corporate Events & Birthday Parties Dubai | Insportz",
          description: "Host corporate events and birthday parties at Insportz Dubai. Team building activities, private bookings, and memorable celebrations.",
          path: "/corporate-events-and-team-building",
          keywords: "corporate events dubai, team building dubai, birthday parties dubai, corporate sports events dubai, private venue dubai, insportz events"
        }}
      />
      <Navbar />
      <div className={styles["facilty__wrapper"]}>
        <HeroImageSection
          imageLg={CorporateLg}
          imageSm={CorporateSm}
          alt="Corporate and Parties"
          heading="Corporate & Parties"
        />

        <CorporateSection />
        <Brands />

        <GallerySection
          title="Corporate Events Highlights"
          images={CORPORATE_GALLERY_IMAGES}
        />
        <GallerySection title="Birthday Parties" images={PARTY_GALLERY_IMAGES} />
      </div>
      <Footer />
    </>
  );
}

export default CorporateAndParties;
