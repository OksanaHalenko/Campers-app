import { useState } from "react";
import css from "./FiltersPart.module.css";
import sprite from "../../assets/icons/sprite.svg";
import FilterFieldset from "../FilterFieldset/FilterFieldset";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import { useDispatch } from "react-redux";
import { fetchCampersByParams } from "../../redux/campers/operations";

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
  const [location, setLocation] = useState("");
  const [selectCheckboxes, setSelectCheckboxes] = useState([]);
  const [radioValue, setRadioValue] = useState("panelTruck");
  const dispatch = useDispatch();

  const handleLocationChange = (e) => setLocation(e.target.value);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectCheckboxes((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectCheckboxes((prevSelected) =>
        prevSelected.filter((checkbox) => checkbox !== value)
      );
    }
  };

  const handleRadioChange = (item) => {
    setRadioValue(item);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const filters = {
      location: location.split(",")[0],
      ...Object.fromEntries(selectCheckboxes.map((item) => [item, true])),
      form: radioValue,
    };

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
