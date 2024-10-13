import css from "./CampersList.module.css";

import { useDispatch, useSelector } from "react-redux";
import {
  selectAllCampers,
  selectError,
  selectTotalCampers,
} from "../../redux/campers/selectors";
import CamperCard from "../CamperCard/CamperCard";
import NoResults from "../NoResults/NoResults";
import { fetchCampers } from "../../redux/campers/operations";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

let limit = 4;
let limitStep = 4;
function CampersList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectAllCampers);
  const totalCampers = useSelector(selectTotalCampers);
  const error = useSelector(selectError);

  const handleMore = () => {
    if (limit < totalCampers) {
      limit += limitStep;
      dispatch(fetchCampers({ limit }));
    }
  };

  return (
    <div className={css.wrapper}>
      {error || campers.length === 0 ? (
        <NoResults />
      ) : (
        campers.map((camper) => <CamperCard data={camper} key={camper.id} />)
      )}
      <LoadMoreBtn
        onClick={handleMore}
        disabled={limit >= totalCampers || error}
      >
        Load more
      </LoadMoreBtn>
    </div>
  );
}

export default CampersList;
