import css from "./CampersList.module.css";

import { useSelector } from "react-redux";
import { selectAllCampers } from "../../redux/campers/selectors";
import CamperCard from "../CamperCard/CamperCard";

function CampersList() {
  const campers = useSelector(selectAllCampers);
  return (
    <div className={css.wrapper}>
      {campers.map((camper) => (
        <CamperCard data={camper} key={camper.id} />
      ))}
    </div>
  );
}

export default CampersList;
