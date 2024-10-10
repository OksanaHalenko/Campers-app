import Header from "../../components/Header/Header";
import css from "./CatalogPage.module.css";

function CatalogPage() {
  return (
    <>
      <Header />
      <div className={css.container}>
        <h1 className={css.title}>Catalog page</h1>
      </div>
    </>
  );
}

export default CatalogPage;
