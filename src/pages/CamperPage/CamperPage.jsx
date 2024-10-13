import { Outlet, useParams } from "react-router-dom";
import css from "./CamperPage.module.css";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/campers/selectors";
import { useEffect } from "react";
import { fetchCamperById } from "../../redux/campers/operations";
import Loader from "../../components/Loader/Loader";
import DetailsAboutCamper from "../../components/DetailsAboutCamper/DetailsAboutCamper";
import BookForm from "../../components/BookForm/BookForm";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

function CamperPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className={css.pageContainer}>
        {isLoading && !error && <Loader />}
        {error ? <ErrorMessage text={error} /> : <DetailsAboutCamper />}
        <div>
          <Outlet />
          <BookForm />
        </div>
      </div>
    </>
  );
}

export default CamperPage;
