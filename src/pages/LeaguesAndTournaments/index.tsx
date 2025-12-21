import Footer from "components/Footer";
import Navbar from "components/Navbar";
import GallerySection from "components/GallerySection";
import Gallery1 from "assets/images/leagues-and-tournaments/league-gallery-1.png";
import Gallery2 from "assets/images/leagues-and-tournaments/league-gallery-2.png";
import Gallery3 from "assets/images/leagues-and-tournaments/league-gallery-3.png";
import Gallery4 from "assets/images/leagues-and-tournaments/league-gallery-4.png";
import Gallery5 from "assets/images/leagues-and-tournaments/league-gallery-5.png";
import LeaguesLg from "assets/images/leagues-and-tournaments/leagues-bg-lg.png";
import LeaguesSm from "assets/images/leagues-and-tournaments/leagues-bg-sm.png";
import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import BuildingCommunity from "@/views/LeaguesAndTournamentsViews/BuildingCommunity";
import OnGoingLeagues from "@/views/LeaguesAndTournamentsViews/OnGoingLeagues";
import CTASection from "@/views/LeaguesAndTournamentsViews/CtaSection";

const GALLERY_IMAGES = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5];

function LeaguesAndTournaments() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles["facilty__wrapper"]}>
        <div className={styles["hero__section"]}>
          <img
            src={isDesktop ? LeaguesLg : LeaguesSm}
            alt="Leagues and Tournaments"
          />
        </div>

        <BuildingCommunity />
        <OnGoingLeagues />

        <GallerySection
          title="Leagues & Tournaments Gallery"
          images={GALLERY_IMAGES}
        />
        <CTASection />
      </div>
      <Footer />
    </>
  );
}

export default LeaguesAndTournaments;
