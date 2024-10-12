import css from "./EquipmentsList.module.css";

import sprite from "../../assets/icons/sprite.svg";

const EquipmentsList = ({
  AC,
  bathroom,
  adults,
  engine,
  kitchen,
  transmission,
  TV,
  radio,
}) => {
  return (
    <ul className={css.equipmentList}>
      {AC && (
        <li
          className={css.equipmentItem}
          aria-label="Air conditioning available"
        >
          <svg className={css.icon}>
            <use href={`${sprite}#icon-wind`}></use>
          </svg>
          AC
        </li>
      )}
      {engine && (
        <li className={css.equipmentItem} aria-label={`Engine ${engine}`}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-Group`}></use>
          </svg>
          {engine}
        </li>
      )}
      {transmission && (
        <li
          className={css.equipmentItem}
          aria-label={`Transmission: ${transmission}`}
        >
          <svg className={css.icon}>
            <use href={`${sprite}#icon-diagram-1`}></use>
          </svg>
          {transmission}
        </li>
      )}
      {bathroom && (
        <li className={css.equipmentItem} aria-label="Bathroom available">
          <svg className={css.icon}>
            <use href={`${sprite}#icon-bi_droplet`}></use>
          </svg>
          Bathroom
        </li>
      )}
      {kitchen && (
        <li className={css.equipmentItem} aria-label="Kitchen available">
          <svg className={css.icon}>
            <use href={`${sprite}#icon-cup-hot`}></use>
          </svg>
          Kitchen
        </li>
      )}
      {TV && (
        <li className={css.equipmentItem} aria-label="TV available">
          <svg className={css.icon}>
            <use href={`${sprite}#icon-Vector`}></use>
          </svg>
          TV
        </li>
      )}
      {radio && (
        <li className={css.equipmentItem} aria-label="Radio available">
          <svg className={css.icon}>
            <use href={`${sprite}#icon-ui-radios`}></use>
          </svg>
          Radio
        </li>
      )}
      {adults && (
        <li className={css.equipmentItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-people`}></use>
          </svg>
          2 adults
        </li>
      )}
    </ul>
  );
};

export default EquipmentsList;
