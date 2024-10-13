import css from "./UserAvatar.module.css";

function UserAvatar({ name }) {
  const firstLetter = name ? name.charAt(0).toUpperCase() : "";
  return <div className={css.circle}>{firstLetter}</div>;
}

export default UserAvatar;
