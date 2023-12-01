import React from 'react';
import css from './faq.module.scss';

const Questions = ({ title, text, isOpen, onClick }) => {
  
  const styleTitle = isOpen ? `${css.q__title} ${css.active}` : `${css.q__title}`;
  const styleParagraph = isOpen ? `${css.q__text} ${css.active}` : `${css.q__text}`;

  return (
    <div className={css.question} onClick={onClick}>
      <h4 className={styleTitle}>
        {title}
      </h4>

        <p className={styleParagraph}>
          {text}
        </p>
      
    </div>
  );
};

export default Questions;