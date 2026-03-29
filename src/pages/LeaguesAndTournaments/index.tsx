import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Head from "components/Head";
import GallerySection from "components/GallerySection";
import Gallery1 from "assets/images/leagues-and-tournaments/league-gallery-1.webp";
import Gallery2 from "assets/images/leagues-and-tournaments/league-gallery-2.webp";
import Gallery3 from "assets/images/leagues-and-tournaments/league-gallery-3.webp";
import Gallery4 from "assets/images/leagues-and-tournaments/league-gallery-4.webp";
import Gallery5 from "assets/images/leagues-and-tournaments/league-gallery-5.webp";
import LeaguesLg from "assets/images/leagues-and-tournaments/leagues-bg-lg.webp";
import LeaguesSm from "assets/images/leagues-and-tournaments/leagues-bg-sm.webp";
import HeroImageSection from "@/components/HeroImageSection";
import styles from "./style.module.scss";
import BuildingCommunity from "@/views/LeaguesAndTournamentsViews/BuildingCommunity";
import OnGoingLeagues from "@/views/LeaguesAndTournamentsViews/OnGoingLeagues";
import CTASection from "@/views/LeaguesAndTournamentsViews/CtaSection";

const GALLERY_IMAGES = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5];

function LeaguesAndTournaments() {
  return (
    <>
      <Head 
        metadata={{
          title: "Sports Leagues & Tournaments Dubai | Insportz",
          description: "Join competitive sports leagues and tournaments in Dubai at Insportz. Cricket, football, padel, and more. Build community through sport.",
          path: "/leagues-tournaments",
          keywords: "sports leagues dubai, sports tournaments dubai, cricket leagues dubai, football leagues dubai, competitive sports dubai, insportz leagues"
        }}
      />
      <Navbar />
      <div className={styles["facilty__wrapper"]}>
        <HeroImageSection
          imageLg={LeaguesLg}
          imageSm={LeaguesSm}
          alt="Leagues and Tournaments"
          heading="Leagues & Tournaments"
        />

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
