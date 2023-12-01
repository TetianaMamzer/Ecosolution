import css from "./header.module.scss";
import Logo from "../../shared/logo/Logo";
import Button from "../../shared/buttons/Button";
import { ReactComponent as Burger } from "../../img/header/menu.svg";

import React, { useState, useEffect } from 'react';

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div className={isScrolled ? `${css.container} ${css.fixed}` : css.container}>
      <div className={css.header}>
        <Logo />
        <div className={css.nav}>
          <div className={css.burger}>
            <Burger />
          </div>
          <div className={css.button}>
          <Button text='Get in touch'/>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Header;
