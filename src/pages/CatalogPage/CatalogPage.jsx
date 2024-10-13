import css from "./CatalogPage.module.css";

import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/campers/selectors";

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

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className={css.pageContainer}>
        {isLoading && !error && <Loader />}
        <div className={css.wrapper}>
          <FiltersPart />
          <CampersList />
        </div>
      </div>
    </>
  );
}

export default CatalogPage;
