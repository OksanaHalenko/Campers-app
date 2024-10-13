import { useSelector } from "react-redux";
import css from "./Reviews.module.css";
import { selectOneCamper } from "../../redux/campers/selectors";
import UserAvatar from "../UserAvatar/UserAvatar";

function Reviews() {
  const { reviews } = useSelector(selectOneCamper);
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {reviews.map((review, index) => (
          <li key={index} className={css.item}>
            <div className={css.title}>
              <UserAvatar name={review.reviewer_name} />
              <div className={css.titleName}>
                <h4 className={css.name}>{review.reviewer_name}</h4>
                <div>Stars</div>
              </div>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
