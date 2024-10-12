import css from "./CatalogPage.module.css";

import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/campers/selectors";

import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import CampersList from "../../components/CampersList/CampersList";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations";

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
      <div className={css.container}>
        {isLoading && !error && <Loader />}
        {error ? <ErrorMessage text={error} /> : <CampersList />}
      </div>
    </>
  );
}

export default CatalogPage;
