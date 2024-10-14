import { NavLink, Outlet, useParams } from "react-router-dom";
import css from "./CamperPage.module.css";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectLoading,
  selectOneCamper,
} from "../../redux/campers/selectors";
import { useEffect } from "react";
import { fetchCamperById } from "../../redux/campers/operations.js";
import Loader from "../../components/Loader/Loader";
import DetailsAboutCamper from "../../components/DetailsAboutCamper/DetailsAboutCamper";
import BookForm from "../../components/BookForm/BookForm";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.navigationItem, isActive && css.active);
};
function CamperPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  const camper = useSelector(selectOneCamper);
  return (
    <>
      <Header />
      <main>
        <div className={css.pageContainer}>
          {isLoading && !error && <Loader />}
          {error ? (
            <ErrorMessage text={error} />
          ) : camper ? (
            <DetailsAboutCamper />
          ) : (
            ""
          )}
          <div>
            <ul className={css.navigation}>
              <li className={css.item}>
                <NavLink to="features" className={buildLinkClass}>
                  Features
                </NavLink>
              </li>
              <li className={css.item}>
                <NavLink to="reviews" className={buildLinkClass}>
                  Reviews
                </NavLink>
              </li>
            </ul>
            <hr className={css.line} />
            <div className={css.underLine}>
              {camper ? <Outlet /> : ""}
              <BookForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CamperPage;
