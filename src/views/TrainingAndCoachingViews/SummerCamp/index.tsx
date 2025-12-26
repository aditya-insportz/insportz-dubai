import InfoBox from "@/components/InfoBox";
import SummerCampImg from "assets/images/training-and-coaching/summer-camp.png";
import styles from "./style.module.scss";
import { WHATSAPP_LINK } from "@/utils/constants";

const SUMMER_CAMP_DATA = {
  title: "Insportz Summer Camp 2025 – Get in the Game!",
  content:
    "This summer, turn up the energy and dive into non-stop action at this year’s Insportz Summer Camp! From fast-paced sports like cricket, football, volleyball, and basketball to creative adventures in arts, crafts, and dance – this is where young champs come to play, compete, and conquer. Join a community of rising stars, sharpen your skills with expert guidance, and experience the thrill of team spirit, all in a fun and supportive environment. Whether you’re scoring goals, mastering trick shots, or crafting your next masterpiece, every day at Insportz is packed with excitement, friendships, and unforgettable moments.<br /><br />Ready to make this the summer of a lifetime?",
  btn1: {
    text: "Register Now",
    link: WHATSAPP_LINK,
    target: "_blank",
  },
};

const SummerCamp = () => {
  return (
    <section className={styles["summer__camp"]}>
      <div className={styles["summer__camp__container"]}>
        <InfoBox {...SUMMER_CAMP_DATA} />
        <div className={styles["summer__camp__img"]}>
          <img src={SummerCampImg} alt="Summer Camp" />
        </div>
      </div>
    </section>
  );
};

export default SummerCamp;
