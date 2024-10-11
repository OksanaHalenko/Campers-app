import css from "./Hero.module.css";

function Hero() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.description}>
        You can find everything you want in our catalog
      </p>
      <button className={css.btn}>View Now</button>
    </div>
  );
}

export default Hero;
