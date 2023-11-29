import css from "./hero.module.scss";
import Paragraph from "../../shared/paragraph/Paragraph";
import ButtonSecond from "../../shared/buttons/ButtonSecond";

const Hero = () => {
  return (
      <div className={css.hero}>
        <div className={css.first__hero}>
          <div className={css.hero__title}>
            <h1 className={css.title}>RENEWABLE ENERGY For any task</h1>
          </div>
          <div className={css.hero__paragraph}>
            <div className={css.container}>
              <Paragraph text="Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass" />
            </div>
            <div className={css.button__container}>
            <ButtonSecond text='Learn more'/>
            </div>
          </div>
        </div>
        <div className={css.second__hero}>
          <div>
            <div className={css.second__container}>
              <div className={css.adress}>
              <p className={css.adress_text}>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
              </div>
              <div className={css.maill}>
                <p className={css.maill_text}>office@ecosolution.com</p>
                <p className={css.eco_text}>ecosolution © 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className={css.img__container}>
    </div>
      </div>
  );
};

export default Hero;
