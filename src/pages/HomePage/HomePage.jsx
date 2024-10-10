import css from "./HomePage.module.css";

import Header from "../../components/Header/Header";

function HomePage() {
  return (
    <>
      <Header />
      <div className={css.container}>
        <h1 className={css.title}>Home page</h1>
      </div>
    </>
  );
}

export default HomePage;
