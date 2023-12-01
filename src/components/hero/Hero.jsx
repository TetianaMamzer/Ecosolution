import css from "./hero.module.scss";
import Paragraph from "../../shared/paragraph/Paragraph";
import ButtonSecond from "../../shared/buttons/ButtonSecond";

const Hero = () => {

  const handleClick = () => {
    const contactSection = document.getElementById('cases');
    console.log(contactSection)
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <div className={css.hero} id="hero">
        <div className={css.first__hero}>
          <div className={css.hero__title}>
            <h1 className={css.title}>RENEWABLE ENERGY For any task</h1>
          </div>
          <div className={css.hero__paragraph}>
            <div className={css.container}>
              <Paragraph text="Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass" />
            </div>
            <div className={css.button__container} onClick={handleClick}>
            <ButtonSecond text='Learn more'/>
            </div>
          </div>
        </div>
        <div className={css.second__hero}>
          <div>
            <div className={css.second__container}>
              <div className={css.adress}>
              <a href="https://maps.app.goo.gl/AyT3DNC4Cco23Xoy7" className={css.adress_text}>
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </a>
              </div>
              <div className={css.maill}>
              <a href="mailto:mailto:office@ecosolution.com" className={css.maill_text}>office@ecosolution.com</a>
              <a href="./" className={css.eco_text}>ecosolution © 2023</a>
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
