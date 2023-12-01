import css from './contacts.module.scss';

import Container from 'shared/container/Container';
import Title from 'shared/second_title/Title';
import Form from './form/Form';

import { ReactComponent as Facebook } from '../../img/contacts/facebook.svg';
import { ReactComponent as Instagram } from '../../img/contacts/instagram.svg';

const Contacts = () => {
  return (
    <Container id="contacts">
      <div className={css.container}>
        <div className={css.title}>
          <Title text="Contact us" />
        </div>

        <div className={css.contacts__container}>
          <div className={css.contacts}>
            <div className={css.phone}>
              <p className={css.contacts__title}>Phone:</p>
              <a href='tel:+380981234567' className={css.phone__number}>+38 (098) 12 34 567</a>
              <a href='tel:+380981234567' className={css.phone__number}>+38 (093) 12 34 567</a>
            </div>
            <div className={css.mail}>
              <p className={css.contacts__title}>E-mail:</p>
              <a
                href="mailto:office@ecosolution.com"
                className={css.mail__link}
              >
                office@ecosolution.com
              </a>
            </div>
            <div className={css.adress}>
              <p className={css.contacts__title}>Address:</p>
              <a
                href="https://maps.app.goo.gl/AyT3DNC4Cco23Xoy7"
                className={css.adress__link}
              >
                79005, Ukraine, Lviv, street. 
                Shota Rustaveli, 7
              </a>
            </div>
            <div className={css.social}>
              <p className={css.contacts__title}>Social Networks:</p>
              <a href="./" className={css.social__link}>
                <Facebook/>
              </a>
              <a href="./" className={css.social__link}>
                <Instagram/>
              </a>
            </div>
          </div>
          <div className={css.form}>
            <Form />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contacts;
