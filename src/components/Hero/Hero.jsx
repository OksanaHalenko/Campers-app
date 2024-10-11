import { Link } from "react-router-dom";
import css from "./Hero.module.css";

function Hero() {
  return (
    <div className={css.container}>
      <section className={css.section}>
        <div className={css.wrapper}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.description}>
            You can find everything you want in our catalog
          </p>
          <Link
            to="/campers"
            className={css.btn}
            aria-label="View the  campers catalog"
          >
            View Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Hero;
