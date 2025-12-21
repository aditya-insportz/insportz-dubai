import styles from "./style.module.scss";

interface TestimonailCardProps {
  name: string;
  designation: string;
  image: string;
  testimonial: string;
}

const TestimonailCard = ({
  name,
  designation,
  image,
  testimonial,
}: TestimonailCardProps) => {
  return (
    <div className={styles["testimonai__card__container"]}>
      <div className={styles["testimonial__card__wrapper"]}>
        <div className={styles["card__image__wrapper"]}>
          <img src={image} alt={name} />
        </div>
        <div className={styles["card__content__wrapper"]}>
          <div className={styles["card__user__details"]}>
            <p className={styles["name"]}>{name}</p>
            <p className={styles["designation"]}>{designation}</p>
          </div>
          <p className={styles["card__text"]}>{testimonial}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonailCard;
