import styles from "./style.module.scss";
import Community from "assets/images/leagues-and-tournaments/community.png";

const BuildingCommunity = () => {
  return (
    <div className={styles["building__community"]}>
      <h2>Building a Community</h2>
      <div className={styles["community__content__wrapper"]}>
        <div className={styles["community__details"]}>
          <p>
            At Insportz, we are dedicated to building a vibrant community
            through our continuous leagues and tournaments. Our state-of-the-art
            indoor sports facility in Al Quoz, Dubai, has become a popular venue
            where teams return season after season to compete and connect. By
            hosting a diverse range of sports events, including cricket,
            football, and badminton tournaments, Insportz fosters a spirit of
            camaraderie and healthy competition among players of all skill
            levels.
          </p>
          <a href="">Read More</a>
        </div>
        <img src={Community} alt="community image" />
      </div>
    </div>
  );
};

export default BuildingCommunity;
