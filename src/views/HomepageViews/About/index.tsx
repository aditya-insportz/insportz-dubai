import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import ImageLg from "assets/images/homepage/about-lg.png";
import ImageSm from "assets/images/homepage/about-sm.png";
import styles from "./style.module.scss";
import InfoBox from "components/InfoBox";
import FacilitySm from "assets/images/homepage/facility-sm.png";
import FacilityLg from "assets/images/homepage/facility-lg.png";

const FACILITIES_DATA = {
  title: "Facility Features:",
  listItems: [
    "Centrally located in Al Quoz, Dubai",
    "All-weather, fully air-conditioned indoor facility",
    "International-standard courts and turf",
    "LED floodlighting for perfect visibility",
    "Ample parking and easy access",
    "Changing rooms, showers & refreshments",
  ],
};

const STATS_DATA = [
  {
    title: 100,
    suffix: "+",
    subtitle: "Leagues & Tournaments",
  },
  {
    title: 500,
    suffix: "+",
    subtitle: "Players in action",
  },
  {
    title: 25,
    suffix: "+",
    subtitle: "Years of Experience",
  },
];

function About() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles["about__section"]}>
      <div className={styles["about__container"]}>
        <div className={styles["about__header"]}>
          <h2 className={styles["about__title"]}>About Insportz Club</h2>
          <span>Home of Indoor Cricket In UAE</span>
        </div>

        <div className={styles["about__content"]}>
          <div className={styles["about__description"]}>
            <p className={styles["about__description"]}>
              Insportz Club is a premier sports and recreational destination
              offering a wide range of indoor sports, fitness, training,
              coaching and entertainment experiences for individuals and teams
              of all ages and skill levels. <br />
              <br />
              Now operating as Insportz Global, our footprint extends beyond the
              UAE to Bangalore, Cape Town and the United Kingdom, bringing our
              passion for sport, community and high-quality facilities to
              players around the world.
              <br />
              <br />
              We are dedicated to promoting an active and healthy lifestyle
              through state-of-the-art venues, expert coaching and a welcoming
              environment where sport is accessible, social and inspiring.
            </p>
          </div>
          <div className={styles["about__image"]}>
            <img
              src={isDesktop ? ImageLg : ImageSm}
              alt="Insportz Club Facilities"
              className={styles["image"]}
            />
          </div>
        </div>

        <div className={styles["about__facilities__wrapper"]}>
          <InfoBox {...FACILITIES_DATA} />
          <div className={styles["image__wrapper"]}>
            <img
              src={isDesktop ? FacilityLg : FacilitySm}
              alt="Insportz Club Facilities"
            />
          </div>
        </div>

        <div className={styles["stats"]}>
          {STATS_DATA.map((stat, index) => {
            const { ref, inView } = useInView({
              threshold: 0.3,
              triggerOnce: true,
            });

            return (
              <div key={index} ref={ref} className={styles["stat"]}>
                <div className={styles["number"]}>
                  <CountUp
                    start={0}
                    end={inView ? stat.title : 0}
                    duration={2}
                    suffix={stat.suffix}
                  />
                </div>
                <span>{stat.subtitle}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
