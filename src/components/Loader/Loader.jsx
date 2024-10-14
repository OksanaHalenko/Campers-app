import { Hourglass } from "react-loader-spinner";
import css from "./Loader.module.css";

function Loader({ loading }) {
  return (
    <div className={css.wrapper}>
      <Hourglass
        visible={loading}
        height="80"
        width="80"
        colors={["#E44848", "#DADDE1"]}
      />
    </div>
  );
}

export default Loader;
