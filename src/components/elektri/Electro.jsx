import css from "./electro.module.scss";
import Container from "../../shared/container/Container";
import React, { useState, useEffect } from 'react';


const Electro = () => {

  const [counter, setCounter] = useState(1134147814);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatNumberWithDots = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <Container>
      <div className={css.section}>
      <div className={css.container__title}>
        <h2 className={css.title}>Electricity we produced for all time</h2>
      </div>
      <div className={css.container__number}>
          <p className={css.number}>{formatNumberWithDots(counter)}</p>
          <p className={css.text}>kWh</p>
        
      </div>
      </div>
    </Container>
  )
}

export default Electro;