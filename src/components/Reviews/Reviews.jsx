import { useSelector } from "react-redux";
import css from "./Reviews.module.css";
import { selectOneCamper } from "../../redux/campers/selectors";

function Reviews() {
  const { reviews } = useSelector(selectOneCamper);
  return <div className={css.container}>{reviews.map()}</div>;
}

export default Reviews;
