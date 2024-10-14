import css from "./CampersList.module.css";

import { useDispatch, useSelector } from "react-redux";
import {
  selectAllCampers,
  selectError,
  selectFiltersCheckboxes,
  selectLocation,
  selectRadioValue,
  selectTotalCampers,
} from "../../redux/campers/selectors";
import CamperCard from "../CamperCard/CamperCard";
import NoResults from "../NoResults/NoResults";
import { fetchMoreCampers } from "../../redux/campers/operations";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

const limit = 4;
let page = 1;
function CampersList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectAllCampers);
  const totalCampers = useSelector(selectTotalCampers);
  const error = useSelector(selectError);
  const location = useSelector(selectLocation);
  const selectCheckboxes = useSelector(selectFiltersCheckboxes);
  const radioValue = useSelector(selectRadioValue);
  const filters = {
    location: location.split(",")[0],
    form: radioValue,
    ...Object.fromEntries(selectCheckboxes.map((item) => [item, true])),
  };

  const handleMore = () => {
    if (limit * page < totalCampers) {
      page += 1;
      dispatch(fetchMoreCampers({ page, limit, ...filters }));
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
