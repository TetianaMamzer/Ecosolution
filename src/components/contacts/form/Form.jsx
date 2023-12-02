import React, { useState } from 'react';
import ButtonSecond from 'shared/buttons/ButtonSecond';

import css from './form.module.scss'

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const ukrainianPhoneNumberRegex = /^\+38\s?\(0[1-9][0-9]\)\s?[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

    if (!formData.fullName.trim() || !nameRegex.test(formData.fullName)) {
      newErrors.fullName = 'Wrong Fullname';
    }

    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Wrong Email';
    }

    if (!formData.phone.trim() || !ukrainianPhoneNumberRegex.test(formData.phone) || (formData.phone.length >= 10 && formData.phone.length <= 13 )) {
      newErrors.phone = 'Wrong Phone';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form is valid:', formData);
      e.target.reset();
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: '',
      });
      setErrors({});
    } else {
      console.log('Form has errors:', errors);
    }
  };

  const style = errors.phone ? `${css.error} ${css.active}` : `${css.error}`;
  const row = errors.phone ? `${css.form__row} ${css.active}` : `${css.form__row}`;


  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={row}>
        <label htmlFor="fullName" className={css.form__label}>* Full name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={css.form__input}
          placeholder='John Rosie'
        />
      </div>
       <span className={style}>{errors.fullName}</span>
      <div className={row}>
        <label htmlFor="email" className={css.form__label}>* E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={css.form__input}
          placeholder="johnrosie@gmail.com"
        />
      </div>
      <span className={style}>{errors.email}</span>
      <div className={row}>
        <label htmlFor="phone" className={css.form__label}>* Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={css.form__input}
          placeholder="380961234567"
        />
      </div>
      <span className={style}>{errors.phone}</span>
      <div className={css.textarea}>
        <label htmlFor="message" className={css.form__label}>Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={css.form__input}
          placeholder="Your message"
        />
      </div>
      <div className={css.button}>
        <ButtonSecond text="Send"/>
      </div>
    </form>
  );
};

export default Form;