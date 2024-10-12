import css from "./FilterFieldset.module.css";
import sprite from "../../assets/icons/sprite.svg";

const FilterFieldset = ({
  type,
  options,
  legend,
  handleChange,
  selectedValues,
}) => {
  const isSelected = (value) => selectedValues.includes(value);

  return (
    <fieldset className={css.fieldset}>
      <legend className={css.fieldsetLegend}>{legend}</legend>
      <hr className={css.line} />
      <div className={css.inputsWrapper}>
        {type === "checkbox"
          ? Object.keys(options).map((item) => (
              <label
                key={item}
                className={`${css.label} ${
                  isSelected(item) ? css.checked : ""
                }`}
              >
                <input
                  type={type}
                  name={item}
                  value={item}
                  className={css.input}
                  onChange={handleChange}
                  checked={isSelected(item)}
                />
                <div className={css.contentWrapper}>
                  <svg className={css.icon}>
                    <use href={`${sprite}#${item}`}></use>
                  </svg>
                  <span className={css.contentText}>{options[item]}</span>
                </div>
              </label>
            ))
          : Object.keys(options).map((item) => (
              <label
                key={item}
                className={`${css.label} ${
                  selectedValues.selected === item ? css.checked : ""
                }`}
              >
                <input
                  type={type}
                  name={item}
                  value={options[item]}
                  className={css.input}
                  onChange={() => handleChange(item)}
                  checked={selectedValues.selected === item}
                />
                <div className={css.contentWrapper}>
                  <svg className={css.icon}>
                    <use href={`${sprite}#${item}`}></use>
                  </svg>
                  <span className={css.contentText}>{options[item]}</span>
                </div>
              </label>
            ))}
      </div>
    </fieldset>
  );
};

export default FilterFieldset;
