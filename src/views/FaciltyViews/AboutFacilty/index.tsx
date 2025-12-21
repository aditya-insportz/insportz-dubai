import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ImageLg from "assets/images/facility/about-facilty-lg.png";
import ImageSm from "assets/images/facility/about-facilty-sm.png";
import Facility from "assets/images/facility/facilty.png";
import WC1 from "assets/images/facility/world-cup-1.png";
import WC2 from "assets/images/facility/world-cup-2.png";
import Cricket1 from "assets/images/facility/cricket-1.png";
import Cricket2 from "assets/images/facility/cricket-2.png";
import Logo1 from "assets/images/facility/logo-1997.png";
import Logo2 from "assets/images/facility/logo-2019.png";
import Logo3 from "assets/images/facility/logo-present.png";
import styles from "./style.module.scss";
import InfoBox from "@/components/InfoBox";

const FACILITIES_DATA = {
  title: "Facility Features:",
  listItems: [
    "Inhouse cafe with dedicated dining area",
    "Indoor stadium seating for large audiences",
    "Private free parking for all visitors to the club",
    "Expert coaches and trained Sports Staff",
    "Training and coaching",
  ],
};

const WORLD_CUP_DATA = {
  title: "Indoor Cricket World Cup 2017",
  content:
    "In 2017, Insportz proudly hosted the prestigious Indoor Cricket World Cup, marking a historic milestone as the first-ever World Cup to take place in the Middle East. This landmark event saw top international teams competing at our state-of-the-art facility in Al Quoz, Dubai, showcasing the best of indoor cricket on a global stage. The tournament not only elevated the profile of Insportz but also highlighted the UAE’s capability to host world-class sporting events. The success of the 2017 Indoor Cricket World Cup at Insportz has paved the way for future international tournaments, reinforcing our commitment to excellence and our status as a premier venue for indoor cricket.",
};

const EXCELLENCE_DATA = {
  title: "More than 25 Years of Excellence",
  content:
    "Founded in 1997, Insportz began its journey as one of the first indoor multisport facilities in the UAE, pioneering a new era of indoor sports in the region. Over the years, Insportz has achieved numerous milestones, including hosting the prestigious 2017 Indoor Cricket World Cup and establishing renowned franchise leagues like the Super Cup and Insportz Champions League. Our state-of-the-art facility in Al Quoz, Dubai, continues to be a hub of excitement and activity, offering a wide range of sports and events for enthusiasts of all ages and skill levels. Despite the passage of time, Insportz remains the most beloved indoor facility in the UAE, cherished for its commitment to excellence, community building, and the promotion of a healthy, active lifestyle.",
};

function AboutFacilty() {
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
          <h2 className={styles["about__title"]}>Welcome to Insportz</h2>
        </div>

        <div className={styles["about__content"]}>
          <div className={styles["about__description"]}>
            <p className={styles["about__description"]}>
              Established in 1997, Insportz Club is a pioneering force in the
              indoor sports facility industry in the United Arab Emirates, with
              over 25 years of excellence at the heart of our journey.
              <br />
              <br />
              What began as a single destination has evolved into Insportz
              Global, a growing international network of sports venues across
              Dubai, Bangalore, Cape Town and the UK.
              <br />
              <br />
              Spanning 46,000 sq. ft. and featuring 5 state-of-the-art courts,
              Insportz Dubai continues to cater to a diverse community of
              athletes, families and corporates. Our commitment to quality,
              innovation and an active lifestyle has earned us a loyal following
              and established Insportz as a trusted hub for both sports
              enthusiasts and corporate team-building experiences both locally
              and globally.
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
            <img src={Facility} alt="Insportz Club Facilities" />
          </div>
        </div>

        <div className={styles["world__cup__wrapper"]}>
          <div className={styles["image__wrapper"]}>
            <img src={WC1} alt="Insportz Club Facilities" />
            <img src={WC2} alt="Insportz Club Facilities" />
          </div>
          <InfoBox {...WORLD_CUP_DATA} />
        </div>

        <div className={styles["excellence__wrapper"]}>
          <InfoBox {...EXCELLENCE_DATA} />
          <div className={styles["image__wrapper"]}>
            <img src={Cricket1} alt="Insportz Club Facilities" />
            <img src={Cricket2} alt="Insportz Club Facilities" />
          </div>
        </div>

        <div className={styles["journey"]}>
          <div className={styles["journey__timeline"]}>
            <div className={styles["journey__logos"]}>
              <div className={styles["journey__item"]}>
                <img src={Logo1} alt="Insportz 1997" />
                <div className={styles["journey__dot"]}></div>
                <span className={styles["journey__year"]}>1997</span>
              </div>
              <div className={styles["journey__item"]}>
                <img src={Logo2} alt="Insportz 2019" />
                <div className={styles["journey__dot"]}></div>
                <span className={styles["journey__year"]}>2019</span>
              </div>
              <div className={styles["journey__item"]}>
                <img src={Logo3} alt="Insportz Present" />
                <div className={styles["journey__dot"]}></div>
                <span className={styles["journey__year"]}>Present</span>
              </div>
            </div>
            <motion.div
              className={styles["journey__line"]}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutFacilty;
