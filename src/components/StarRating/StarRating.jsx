import sprite from "../../assets/icons/sprite.svg";

function StarRating({ rating }) {
  const totalStars = 5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <svg key={i} width={20} height={20} style={{ fill: "#ffc531" }}>
          <use href={`${sprite}#icon-star`}></use>
        </svg>
      );
    } else {
      stars.push(
        <svg key={i} width={20} height={20} style={{ fill: "#F2F4F7" }}>
          <use href={`${sprite}#icon-star`}></use>
        </svg>
      );
    }
  }
  return <div>{stars}</div>;
}

export default StarRating;
