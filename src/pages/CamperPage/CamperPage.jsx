import { Outlet } from "react-router-dom";
import css from "./CamperPage.module.css";
import Header from "../../components/Header/Header";

function CamperPage() {
  return (
    <>
      <Header />
      <h1 className={css.title}>Camper page</h1>
      <Outlet />
    </>
  );
}

export default CamperPage;
