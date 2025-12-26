import { useState, useEffect } from "react";
import ChampionsLeagues from "assets/images/leagues-and-tournaments/champions-leagues.png";
import TriSeries from "assets/images/leagues-and-tournaments/tri-series.png";
import TriSeries1 from "assets/images/leagues-and-tournaments/tri-series-1.png";
import TriSeries2 from "assets/images/leagues-and-tournaments/tri-series-2.png";
import DivisionLeague from "assets/images/leagues-and-tournaments/division-league.png";
import DivisionLeagueSm from "assets/images/leagues-and-tournaments/division-league-sm.png";
import FranchiseLeagueLg from "assets/images/leagues-and-tournaments/franchise-league-lg.png";
import FranchiseLeagueSm from "assets/images/leagues-and-tournaments/franchise-league-sm.png";
import IPD from "assets/images/leagues-and-tournaments/ipd.png";
import Superbowl from "assets/images/leagues-and-tournaments/superbowl.png";
import Supercup from "assets/images/leagues-and-tournaments/supercup.png";
import ChevronLeft from "assets/icons/chevron-left-dark.svg";
import ChevronRight from "assets/icons/chevron-right-dark.svg";
import styles from "./style.module.scss";
import BlackButton from "@/components/Buttons/BlackButton";
import InfoBox from "@/components/InfoBox";

const LEAGUE_IMAGES = [ChampionsLeagues, TriSeries, IPD, Superbowl, Supercup];

const TRI_SERIES_DATA = {
  title: "Tri Series",
  content:
    "The Tri Series is an international indoor cricket tournament that began its journey in 2022, introduced and inaugurated by Insportz. Bringing together top cricketing nations, the tournament quickly gained recognition for its high-octane matches and competitive spirit. Initially featuring teams from the UAE, South Africa, and England, the inaugural series saw UAE emerging as champions in both the Mains and Masters categories. Building on this success, the Tri Series expanded in 2023 to include Sri Lanka and Australia, further raising the stakes and excitement. Known for its well-organized structure, passionate fan base, and showcasing some of the best talents in indoor cricket, the Tri Series has established itself as a prestigious event on the cricketing calendar, celebrating the sport’s spirit and uniting cricket lovers from around the globe.",
};

const DIVISION_LEAGUE_DATA = {
  title: "Division Leagues",
  content:
    "The Division Leagues at Insportz offer an exceptional platform for indoor cricket enthusiasts, spanning from Amateur to Premier tiers. Players compete within their respective divisions, showcasing their skills and striving for excellence. The structured tier system allows athletes to climb the ladder of professional indoor cricket, gaining valuable experience and honing their talents at each level. The ultimate goal is to provide a pathway for players to potentially represent UAE Indoor Cricket on an international stage. Through these leagues, Insportz is committed to nurturing talent, fostering competitive spirit, and elevating the standard of indoor cricket in the region.",
};

const FRANCHISE_LEAGUE_DATA = {
  title: "Franchise Leagues",
  content:
    "Insportz is proud to host a series of premier franchise brands such as the Super Cup, Super Bowl, and Insportz Champions League. These auction-based leagues have revolutionized UAE Indoor Cricket by introducing a dynamic and competitive format where players are bought by teams through a thrilling auction process. This innovative approach has elevated the level of competition, attracting top talent and creating high-stakes, action-packed tournaments. The success of these leagues has set a new standard in indoor cricket, serving as a template for other indoor cricketing nations and centers to follow. By fostering a spirit of excitement and professionalism, Insportz continues to lead the way in transforming the indoor cricket landscape.",
};

const OnGoingLeagues = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % LEAGUE_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + LEAGUE_IMAGES.length) % LEAGUE_IMAGES.length
    );
  };

  return (
    <section className={styles["ongoing__leagues"]}>
      <div className={styles["leagues__container"]}>
        <div className={styles["ongoing__leagues__wrapper"]}>
          {/* Mobile Slider */}
          <div className={styles["mobile__slider"]}>
            <button className={styles["nav__btn"]} onClick={prevSlide}>
              <img src={ChevronLeft} alt="Previous" />
            </button>
            <div className={styles["image__container"]}>
              <img
                src={LEAGUE_IMAGES[currentIndex]}
                alt={`League ${currentIndex + 1}`}
                className={styles["league__image"]}
              />
            </div>
            <button className={styles["nav__btn"]} onClick={nextSlide}>
              <img src={ChevronRight} alt="Next" />
            </button>
          </div>

          {/* Desktop Grid */}
          <div className={styles["desktop__grid"]}>
            {LEAGUE_IMAGES.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`League ${index + 1}`}
                className={styles["league__image__desktop"]}
              />
            ))}
          </div>

          <h2 className={styles["title"]}>View Our On-Going Leagues</h2>
          <BlackButton
            text="Click Here"
            link="https://insportzclub.spawtz.com/ActionController/LeagueList?VenueId=2"
            target="_blank"
          />
        </div>
      </div>

      <div className={styles["leagues__details__container"]}>
        <div className={styles["tri__series"]}>
          <div className={styles["image__wrapper1"]}>
            <img src={TriSeries1} alt="Tri Series 1" />
          </div>
          <InfoBox {...TRI_SERIES_DATA} />
          <div className={styles["image__wrapper2"]}>
            <img src={TriSeries1} alt="Tri Series 1" />
            <img src={TriSeries2} alt="Tri Series 2" />
          </div>
        </div>

        <div className={styles["division__league"]}>
          <div className={styles["image__wrapper"]}>
            <img
              src={isDesktop ? DivisionLeague : DivisionLeagueSm}
              alt="division league"
            />
          </div>
          <InfoBox {...DIVISION_LEAGUE_DATA} />
        </div>

        <div className={styles["franchise__league"]}>
          <InfoBox {...FRANCHISE_LEAGUE_DATA} />
          <div className={styles["image__wrapper"]}>
            <img
              src={isDesktop ? FranchiseLeagueLg : FranchiseLeagueSm}
              alt="franchise league"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnGoingLeagues;
