import css from "./Features.module.css";
import EquipmentsList from "../EquipmentsList/EquipmentsList";
import { useSelector } from "react-redux";
import { selectOneCamper } from "../../redux/campers/selectors";

function Features() {
  const {
    AC,
    bathroom,
    adults,
    engine,
    kitchen,
    transmission,
    TV,
    radio,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = useSelector(selectOneCamper);
  return (
    <div className={css.container}>
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
      <div className={css.vehicleWrapper}>
        <h3 className={css.title}>Vehicle details</h3>
        <hr className={css.line} />
        <ul className={css.details}>
          <li className={css.detailsItem}>
            <p className={css.detail}>Form</p>
            <p className={css.detail}>{form}</p>
          </li>
          <li className={css.detailsItem}>
            <p className={css.detail}>Length</p>
            <p className={css.detail}>{length}</p>
          </li>
          <li className={css.detailsItem}>
            <p className={css.detail}>Width</p>
            <p className={css.detail}>{width}</p>
          </li>
          <li className={css.detailsItem}>
            <p className={css.detail}>Height</p>
            <p className={css.detail}>{height}</p>
          </li>
          <li className={css.detailsItem}>
            <p className={css.detail}>Tank</p>
            <p className={css.detail}>{tank}</p>
          </li>
          <li className={css.detailsItem}>
            <p className={css.detail}>Consumption</p>
            <p className={css.detail}>{consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Features;
