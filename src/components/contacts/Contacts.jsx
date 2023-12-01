import css from './contacts.module.scss';

import Container from 'shared/container/Container';
import Title from 'shared/second_title/Title';
import ButtonSecond from 'shared/buttons/ButtonSecond';
import Form from './form/Form';


const Contacts = () => {
  return (
    <Container>
      <div className={css.container}>
      <div className={css.title}>
        <Title text="Contact us"/>
      </div>

      <div className={css.contacts__container}>
        <div className={css.contacts}>

        </div>
        <div className={css.form}>
          <Form/>
        </div>
      </div>
      </div>
    </Container>
  )
}

export default Contacts;