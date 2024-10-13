import css from "./ImagesGallery.module.css";

function ImagesGallery({ images }) {
  return (
    <ul className={css.imagesWrapper}>
      {images.map((image, index) => (
        <li key={index} className={css.imgWrapper}>
          <img className={css.image} src={image.original} />
        </li>
      ))}
    </ul>
  );
}

export default ImagesGallery;
