import css from "./card.module.scss";

const Card = ({ image, text, location, date }) => {
  return (
    <div className={css.card}>
      <div className={css.image}>
        <img src={image} alt="beautiful" />
      </div>
      <div className={css.paragraph}>
        <div className={css.paragraph__title}>
          <h3>{text}</h3>
          <button className={css.button__card}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M10.9977 6.98666L21.0127 6.98666L21.0127 17.0017"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.98901 21.0109L20.8731 7.12685"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className={css.paragraph__local}>
          <p>{location}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
