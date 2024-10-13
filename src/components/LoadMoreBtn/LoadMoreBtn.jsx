import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ children, onClick, disabled = false }) => {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };
  return (
    <button
      className={`${css.loadMoreBtn} ${disabled ? css.disabled : ""}`}
      type="button"
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default LoadMoreBtn;
