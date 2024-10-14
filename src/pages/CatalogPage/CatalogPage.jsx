import css from "./CatalogPage.module.css";

import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectFiltersCheckboxes,
  selectLoading,
  selectLocation,
  selectRadioValue,
} from "../../redux/campers/selectors";

import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import CampersList from "../../components/CampersList/CampersList";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import FiltersPart from "../../components/FiltersPart/FiltersPart";

function CatalogPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const location = useSelector(selectLocation);
  const selectCheckboxes = useSelector(selectFiltersCheckboxes);
  const radioValue = useSelector(selectRadioValue);
  const filters = {
    location: location.split(",")[0],
    form: radioValue,
    ...Object.fromEntries(selectCheckboxes.map((item) => [item, true])),
  };

  useEffect(() => {
    dispatch(fetchCampers(filters));
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <div className={css.pageContainer}>
          {isLoading && !error ? (
            <Loader />
          ) : (
            <div className={css.wrapper}>
              <FiltersPart />
              <CampersList />
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default CatalogPage;
