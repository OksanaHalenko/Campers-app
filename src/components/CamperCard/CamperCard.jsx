import { Link } from "react-router-dom";
import css from "./CamperCard.module.css";
import sprite from "../../assets/icons/sprite.svg";
import EquipmentsList from "../EquipmentsList/EquipmentsList";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/campers/slice";
import { selectorFavorite } from "../../redux/campers/selectors";

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
    AC,
    bathroom,
    adults,
    engine,
    kitchen,
    transmission,
    TV,
    radio,
  },
}) {
  const dispatch = useDispatch();
  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };
  const favoriteItems = useSelector(selectorFavorite);
  const isFavorite = favoriteItems.includes(id);

  return (
    <div className={css.card}>
      <img className={css.image} src={gallery[0].original} loading="lazy" />
      <div className={css.info}>
        <div className={css.wrapper}>
          <div className={css.firstLine}>
            <p className={css.name}>{name}</p>
            <div className={css.priceWrapper}>
              <p className={css.price}>€{price}</p>
              <button
                className={css.isFavoriteBtn}
                onClick={handleToggleFavorite}
              >
                <svg
                  className={`${css.iconHeart} ${
                    isFavorite ? css.isActive : ""
                  }`}
                >
                  <use href={`${sprite}#icon-heart`}></use>
                </svg>
              </button>
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
        <EquipmentsList
          AC={AC}
          bathroom={bathroom}
          adults={adults}
          engine={engine}
          kitchen={kitchen}
          transmission={transmission}
          TV={TV}
          radio={radio}
        />
        <Link
          to={`/catalog/${id}/features`}
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
