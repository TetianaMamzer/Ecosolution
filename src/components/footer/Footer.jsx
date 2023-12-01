import css from './footer.module.scss';

import Container from 'shared/container/Container';
import Logo from '../../shared/logo/Logo';

import { ReactComponent as Facebook } from '../../img/contacts/facebook.svg';
import { ReactComponent as Instagram } from '../../img/contacts/instagram.svg';

import { useMediaQuery } from 'react-responsive';

const Footer = ({ text }) => {
  const handleClick = () => {
    const contactSection = document.getElementById('hero');
    console.log(contactSection)
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <Container>
      <div className={css.container}>
        <div className={css.logo__container}>
          <Logo />
          {!isSmallScreen && (
            <div className={css.social}>
              <a href="./" className={css.social__link}>
                <Facebook />
              </a>
              <a href="./" className={css.social__link}>
                <Instagram />
              </a>
            </div>
          )}
          <button className={css.button} onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3.95312 6.38L7.99979 2.33334L12.0465 6.38"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 13.6666L8 2.44663"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {isSmallScreen && (
            <div className={css.social}>
              <a href="./" className={css.social__link}>
                <Facebook />
              </a>
              <a href="./" className={css.social__link}>
                <Instagram />
              </a>
            </div>
          )}
        <div className={css.contacts__container}>
            <div className={css.adress}>
              <a href="https://maps.app.goo.gl/AyT3DNC4Cco23Xoy7" className={css.adress_text}>
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </a>
              <a href="mailto:mailto:office@ecosolution.com" className={css.maill_text}>office@ecosolution.com</a>
              <a href="./" className={css.eco_text}>ecosolution © 2023</a>
            </div>
          </div>
      </div>
    </Container>
  );
};

export default Footer;
