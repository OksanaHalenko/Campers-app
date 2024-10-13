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
            <use href={`${sprite}#AC`}></use>
          </svg>
          AC
        </li>
      )}
      {engine && (
        <li className={css.equipmentItem} aria-label={`Engine ${engine}`}>
          <svg className={css.icon}>
            <use href={`${sprite}#engine`}></use>
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
            <use href={`${sprite}#transmission`}></use>
          </svg>
          {transmission}
        </li>
      )}
      {bathroom && (
        <li className={css.equipmentItem} aria-label="Bathroom available">
          <svg className={css.icon}>
            <use href={`${sprite}#bathroom`}></use>
          </svg>
          Bathroom
        </li>
      )}
      {kitchen && (
        <li className={css.equipmentItem} aria-label="Kitchen available">
          <svg className={css.icon}>
            <use href={`${sprite}#kitchen`}></use>
          </svg>
          Kitchen
        </li>
      )}
      {TV && (
        <li className={css.equipmentItem} aria-label="TV available">
          <svg className={css.icon}>
            <use href={`${sprite}#TV`}></use>
          </svg>
          TV
        </li>
      )}
      {radio && (
        <li className={css.equipmentItem} aria-label="Radio available">
          <svg className={css.icon}>
            <use href={`${sprite}#radio`}></use>
          </svg>
          Radio
        </li>
      )}
      {adults && (
        <li className={css.equipmentItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#adults`}></use>
          </svg>
          2 adults
        </li>
      )}
    </ul>
  );
};

export default EquipmentsList;
