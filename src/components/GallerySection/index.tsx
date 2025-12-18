import styles from "./style.module.scss";

interface GallerySectionProps {
  title: string;
  images: string[];
}

const GallerySection = ({ title, images }: GallerySectionProps) => {
  return (
    <section className={styles["gallery__section"]}>
      <div className={styles["gallery__wrapper"]}>
        <h2>{title}</h2>
        <div className={styles["gallery__image__wrapper"]}>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Indoor Cricket ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
