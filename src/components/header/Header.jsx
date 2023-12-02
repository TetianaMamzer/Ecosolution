import css from './header.module.scss';
import Logo from '../../shared/logo/Logo';
import Button from '../../shared/buttons/Button';

import { ReactComponent as Facebook } from '../../img/contacts/facebook.svg';
import { ReactComponent as Instagram } from '../../img/contacts/instagram.svg';
import { ReactComponent as Arrow } from '../../img/header/arrow.svg';
import { ReactComponent as Close } from '../../img/header/close.svg';
import { ReactComponent as Burger } from '../../img/header/menu.svg';

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    const contactSection = document.getElementById('contacts');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickBurger = () => {
    setIsOpen(!isOpen);
  };

  const handleClickMenu = ( id ) => {
    const contactSection = document.getElementById(id);
    contactSection.scrollIntoView({ behavior: 'smooth' });
    handleClickBurger();
  }

  return (
    <div
      className={isScrolled ? `${css.container} ${css.fixed}` : css.container}
    >
      <div className={css.header}>
        <Logo />
        <div className={css.nav}>
          <div className={css.burger} onClick={handleClickBurger}>
            <Burger />
          </div>
          <div className={css.button} onClick={handleClick}>
            <Button text="Get in touch" />
          </div>
        </div>
        <>
          <div className={isOpen ? `${css.backdrop} ${css.active}` : `${css.backdrop}`}></div>
          <div className={isOpen ? `${css.menu__container} ${css.active}` : `${css.menu__container}`}>
          <div className={css.menu}>
            <div className={css.menu__nav}>
              <div className={css.cros__button} onClick={handleClickBurger}>
                <Close />
                <p>close</p>
              </div>
              <div className={css.menu__list}>
                <div className={css.menu__link} onClick={() => handleClickMenu('hero')}>
                  Main  
                  <Arrow/>
                </div>
                <div className={css.menu__link} onClick={() => handleClickMenu('about')}>
                  About 
                  <Arrow/>
                </div>
                <div className={css.menu__link} onClick={() => handleClickMenu('cases')}>
                  Cases 
                  <Arrow/>
                </div>
                <div className={css.menu__link} onClick={() => handleClickMenu('faq')}>
                  FAQ 
                  <Arrow/>
                </div>
                <div className={css.menu__link} onClick={() => handleClickMenu('contacts')}>
                  Contact Us 
                  <Arrow/>
                </div>
              </div>
            </div>
            <div className={css.menu__social}>
              <a href="./" className={css.social__link}>
                <Facebook />
              </a>
              <a href="./" className={css.social__link}>
                <Instagram />
              </a>
            </div>
          </div>
          </div>
        </>

      </div>
      
    </div>
  );
};

export default Header;
