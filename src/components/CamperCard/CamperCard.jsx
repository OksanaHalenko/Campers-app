import { Link } from "react-router-dom";
import css from "./CamperCard.module.css";
import sprite from "../../assets/icons/sprite.svg";

function CamperCard({
  data: {
    id,
    gallery,
    name,
    price,
    description,
    location,
    rating,
    totalReviews,
  },
}) {
  return (
    <div className={css.card}>
      <img className={css.image} src={gallery[0].original} loading="lazy" />
      <div className={css.info}>
        <div className={css.wrapper}>
          <div className={css.firstLine}>
            <p className={css.name}>{name}</p>
            <div className={css.priceWrapper}>
              <p className={css.price}>€{price}</p>
              <svg className={css.iconHeart}>
                <use href={`${sprite}#icon-heart`}></use>
              </svg>
            </div>
          </div>
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
        </div>
        <div className={css.description}>{description}</div>
        <Link
          to={`/catalog/${id}`}
          className={css.btn}
          aria-label="Show camper details"
        >
          Show more
        </Link>
      </div>
    </div>
  );
}

export default CamperCard;
