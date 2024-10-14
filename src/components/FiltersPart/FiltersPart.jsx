import css from "./FiltersPart.module.css";
import sprite from "../../assets/icons/sprite.svg";
import FilterFieldset from "../FilterFieldset/FilterFieldset";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampersByParams } from "../../redux/campers/operations";
import {
  saveLocation,
  saveRadioValue,
  toggleCheckboxes,
} from "../../redux/campers/slice";
import {
  selectLocation,
  selectRadioValue,
  selectFiltersCheckboxes,
} from "../../redux/campers/selectors.js";

const equipment = {
  AC: "AC",
  transmission: "Automatic",
  kitchen: "Kitchen",
  TV: "TV",
  bathroom: "Bathroom",
};
const vehicleType = {
  panelTruck: "Van",
  fullyIntegrated: "Fully Integrated",
  alcove: "Alcove",
};

function FiltersPart() {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  const selectCheckboxes = useSelector(selectFiltersCheckboxes);
  const radioValue = useSelector(selectRadioValue);
  const filters = {
    location: location.split(",")[0],
    form: radioValue,
    ...Object.fromEntries(selectCheckboxes.map((item) => [item, true])),
  };

  const handleLocationChange = (e) => dispatch(saveLocation(e.target.value));

  const handleCheckboxChange = (e) => {
    dispatch(toggleCheckboxes(e.target.value));
  };

  const handleRadioChange = (item) => {
    dispatch(saveRadioValue(item));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchCampersByParams(filters));
  };

  return (
    <div className={css.filtersWrapper}>
      <form onSubmit={handleSubmit}>
        <div className={css.locationWrapper}>
          <label className={css.locationInputLabel}>
            Location
            <svg className={css.locationIcon}>
              <use href={`${sprite}#icon-Map`}></use>
            </svg>
            <input
              className={css.locationInput}
              type="text"
              value={location}
              onChange={handleLocationChange}
              placeholder="City"
            />
          </label>
        </div>

        <div className={css.filterWrapper}>
          <p className={css.filtersTitle}>Filters</p>

          <FilterFieldset
            type={"checkbox"}
            options={equipment}
            legend={"Vehicle equipment"}
            handleChange={handleCheckboxChange}
            selectedValues={selectCheckboxes}
          />

          <FilterFieldset
            type={"radio"}
            options={vehicleType}
            legend={"Vehicle type"}
            handleChange={handleRadioChange}
            selectedValues={{ selected: radioValue }}
          />
        </div>

        <SubmitBtn handleSubmit={handleSubmit} ariaLabel={"Submit filter form"}>
          Search
        </SubmitBtn>
      </form>
    </div>
  );
}

export default FiltersPart;
