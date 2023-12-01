import React from "react";
import css from "./button.module.scss";

const ButtonSecond = ({ text }) => {

  return (
    <button className={css.button__second} >
      <p className={css.paragraph}>{text}</p>
      <div className={css.button__container}>
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={css.button__img}
      >
        <path
          d="M9.62 4.45312L13.6667 8.49979L9.62 12.5465"
          stroke="#173D33"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.33331 8.5H13.5533"
          stroke="#173D33"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      </div>
    </button>
  );
};

export default ButtonSecond;
