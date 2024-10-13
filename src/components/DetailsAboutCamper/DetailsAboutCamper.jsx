import { useSelector } from "react-redux";
import css from "./DetailsAboutCamper.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { selectOneCamper } from "../../redux/campers/selectors";

function DetailsAboutCamper() {
  const { name, price, description, rating, totalReviews, location, gallery } =
    useSelector(selectOneCamper);
  return (
    <div className={css.wrapperDetails}>
      <div className={css.titleWrapper}>
        <p className={css.name}>{name}</p>
        <ul className={css.location}>
          <li className={css.locationItem}>
            <svg className={css.iconStar}>
              <use href={`${sprite}#icon-star`}></use>
            </svg>
            <span
              className={css.ratingText}
            >{`${rating} (${totalReviews}Reviews)`}</span>
          </li>
          <li className={css.locationItem}>
            <svg className={css.iconMap}>
              <use href={`${sprite}#icon-Map`}></use>
            </svg>
            <span className={css.locationText}>{location}</span>
          </li>
        </ul>
        <p className={css.price}>€{price}</p>
      </div>
      <div className={css.imagesWrapper}>
        <div className={css.imgWrapper}>
          <img className={css.image} src={gallery[0].original} loading="lazy" />
        </div>
        <div className={css.imgWrapper}>
          <img className={css.image} src={gallery[1].original} loading="lazy" />
        </div>
        <div className={css.imgWrapper}>
          <img className={css.image} src={gallery[2].original} loading="lazy" />
        </div>
      </div>
      <div className={css.description}>{description}</div>
    </div>
  );
}

export default DetailsAboutCamper;
