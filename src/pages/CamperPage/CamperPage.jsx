import { Outlet } from "react-router-dom";
import css from "./CamperPage.module.css";

function CamperPage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Camper page</h1>
      <Outlet />
    </div>
  );
}

export default CamperPage;
