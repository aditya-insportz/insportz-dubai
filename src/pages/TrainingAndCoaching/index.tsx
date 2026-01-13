import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Head from "components/Head";
import GallerySection from "components/GallerySection";
import Gallery1 from "assets/images/training-and-coaching/training-gallery-1.png";
import Gallery2 from "assets/images/training-and-coaching/training-gallery-2.png";
import Gallery3 from "assets/images/training-and-coaching/training-gallery-3.png";
import Gallery4 from "assets/images/training-and-coaching/training-gallery-4.png";
import Gallery5 from "assets/images/training-and-coaching/training-gallery-5.png";
import TrainingLg from "assets/images/training-and-coaching/training-lg.png";
import TrainingSm from "assets/images/training-and-coaching/training-sm.png";
import HeroImageSection from "@/components/HeroImageSection";
import styles from "./style.module.scss";
import TrainingSection from "@/views/TrainingAndCoachingViews/TrainingSection";
import Sports from "@/views/TrainingAndCoachingViews/Sports";
import SummerCamp from "@/views/TrainingAndCoachingViews/SummerCamp";

const GALLERY_IMAGES = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5];

function TrainingAndCoaching() {
  return (
    <>
      <Head 
        metadata={{
          title: "Sports Training & Coaching Dubai | Insportz",
          description: "Professional sports training and coaching in Dubai. Cricket, football, badminton, tennis, and more. Kids and adult programs available.",
          path: "/training-and-coaching",
          keywords: "sports coaching dubai, sports training dubai, cricket coaching dubai, football coaching dubai, kids sports dubai, adult sports training dubai"
        }}
      />
      <Navbar />
      <div className={styles["facilty__wrapper"]}>
        <HeroImageSection
          imageLg={TrainingLg}
          imageSm={TrainingSm}
          alt="Training and Coaching"
        />

        <TrainingSection />
        <Sports />
        <SummerCamp />

        <GallerySection
          title="Training & Coaching Gallery"
          images={GALLERY_IMAGES}
        />
      </div>
      <Footer />
    </>
  );
}

export default TrainingAndCoaching;
