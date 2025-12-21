import { useState } from "react";
import styles from "./style.module.scss";
import Sanjay from "assets/images/homepage/sanjay-chaudhary.png";
import Alice from "assets/images/homepage/alice-rodrigues.png";
import Matt from "assets/images/homepage/matt-floros.png";
import Anish from "assets/images/homepage/anish-patel.png";
import TestimonailCard from "./TestimonialCard";
import ArrowLeft from "assets/icons/arrow-left.svg";
import ArrowRight from "assets/icons/arrow-right.svg";

const TESTIMONIALS_DATA = [
  {
    name: "Sanjay Chaudhary",
    designation: "Standard Chartered",
    image: Sanjay,
    testimonial:
      "“Insportz has been home to many of us for many many years. I have been playing here for 20 years. I know there are other facilities here in Dubai, but Insportz holds a very dear place in our hearts”",
  },
  {
    name: "Alice Rodrigues",
    designation: "Senior HR Professional – DBMSC Steel",
    image: Alice,
    testimonial:
      "“We visited various venues as well, but Insportz has lots and lots of facilities, excellent staff all around. Insportz is the best!”",
  },
  {
    name: "Matt Floros",
    designation: "Australian indoor cricketer – Cricket Australia",
    image: Matt,
    testimonial:
      "“Hot conditions here in Dubai, but the facilities at Insportz has been amazing. The crew here looked after us really well.”",
  },
  {
    name: "Anish Patel",
    designation: "England indoor cricketer – Action Indoor England",
    image: Anish,
    testimonial:
      "“The way the Insportz Stadium looks, the entry way, the new lighting, it looks fantastic. They are certainly becoming a powerhouse in Indoor Cricket”",
  },
];

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = TESTIMONIALS_DATA.length - 1;

  const handleLeftClick = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleRightClick = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className={styles["client__testimonials__section"]}>
      <div className={styles["client__testimonials__wrapper"]}>
        <div className={styles["client__testimonials__heading"]}>
          <h2>A Word from Our Clients</h2>
          <div className={styles["navigation"]}>
            <img 
              src={ArrowLeft} 
              alt="left" 
              onClick={handleLeftClick}
              style={{ cursor: currentIndex === 0 ? 'not-allowed' : 'pointer', opacity: currentIndex === 0 ? 0.5 : 1 }}
            />
            <img 
              src={ArrowRight} 
              alt="right" 
              onClick={handleRightClick}
              style={{ cursor: currentIndex === maxIndex ? 'not-allowed' : 'pointer', opacity: currentIndex === maxIndex ? 0.5 : 1 }}
            />
          </div>
        </div>
        <div className={styles["client__testimonials__content"]}>
          <div
            className={styles["testimonials__list"]}
            style={{
              transform: `translateX(-${currentIndex * 996}px)`,
              transition: 'transform 0.3s ease'
            }}
          >
            {TESTIMONIALS_DATA.map((testimonial) => (
              <TestimonailCard {...testimonial} key={testimonial.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
