import css from "./NoResults.module.css";

function NoResults() {
  return (
    <div className={css.wrapper}>
      <h2>No Campers Found</h2>
      <p>Unfortunately, the are no campers available for your request.</p>
      <p> Please, try adjusting your search criteria.</p>
    </div>
  );
}

export default NoResults;
