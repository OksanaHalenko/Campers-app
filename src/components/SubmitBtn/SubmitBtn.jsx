import css from "./SubmitBtn.module.css";

const SubmitBtn = ({ children, handleSubmit, ariaLabel }) => {
  return (
    <button
      className={css.submitBtn}
      type="submit"
      onClick={handleSubmit}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default SubmitBtn;
