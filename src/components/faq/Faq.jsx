import React, { useState } from 'react';
import css from './faq.module.scss';

import Container from 'shared/container/Container';
import Title from 'shared/second_title/Title';
import Button from 'shared/buttons/Button';
import Questions from './Questios';

import { useMediaQuery } from "react-responsive";


const Faq = () => {

  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  const [openIndex, setOpenIndex] = useState(1);

  const handleQuestionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Container>
      {isSmallScreen ? <>
        
        <div className={css.faq__container}>
        <div className={css.title}>
            <Title text="Frequently Asked Questions" />
        </div>
        <div className={css.container__questions}>
            <Questions
              index={1}
              isOpen={openIndex === 1}
              onClick={() => handleQuestionClick(1)}
            title="How do wind turbines and solar panels work together in a renewable energy system?"
            text="Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output."
          />
          
            <Questions
              index={2}
              isOpen={openIndex === 2}
              onClick={() => handleQuestionClick(2)}
            title="What sets EcoSolution's renewable energy solutions apart from others on the market?"
            text="Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output."
          />
            <Questions
              index={3}
              isOpen={openIndex === 3}
              onClick={() => handleQuestionClick(3)}
            title="How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?"
            text="Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output."
          />
            <Questions
              index={4}
              isOpen={openIndex === 4}
              onClick={() => handleQuestionClick(4)}
            title="What measures does EcoSolution take to ensure the environmental sustainability of its products?"
            text="Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output."
          />
            <Questions
              index={5}
              isOpen={openIndex === 5}
              onClick={() => handleQuestionClick(5)}
            title="How does EcoSolution engage with local communities and support a just transition to renewable energy?"
            text="Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output."
          />
          </div>
          <div className={css.button}>
            <p className={css.text}>
              Didn't find the answer to your question?{' '}
            </p>
            <Button text="Contact Us" active={true} />
          </div>
        </div>  
      </>
        :
        <>
          <div className={css.faq__container}>
          <div className={css.container__questions}>
            <Questions
              index={1}
              isOpen={openIndex === 1}
              onClick={() => handleQuestionClick(1)}
            title="How do wind turbines and solar panels work together in a renewable energy system?"
            text="Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output."
          />
          
            <Questions
              index={2}
              isOpen={openIndex === 2}
              onClick={() => handleQuestionClick(2)}
            title="What sets EcoSolution's renewable energy solutions apart from others on the market?"
            text="Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output."
          />
            <Questions
              index={3}
              isOpen={openIndex === 3}
              onClick={() => handleQuestionClick(3)}
            title="How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?"
            text="Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output."
          />
            <Questions
              index={4}
              isOpen={openIndex === 4}
              onClick={() => handleQuestionClick(4)}
            title="What measures does EcoSolution take to ensure the environmental sustainability of its products?"
            text="Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output."
          />
            <Questions
              index={5}
              isOpen={openIndex === 5}
              onClick={() => handleQuestionClick(5)}
            title="How does EcoSolution engage with local communities and support a just transition to renewable energy?"
            text="Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output."
          />
          </div>
        <div className={css.container__title}>
          <div className={css.title}>
            <Title text="Frequently Asked Questions" />
          </div>
          <div className={css.button}>
            <p className={css.text}>
              Didn't find the answer to your question?{' '}
            </p>
                <div className={css.button__faq}>
                <Button text="Contact Us" />
            </div>
          </div>
        </div>
      </div>
        </>}
      
    </Container>
  );
};

export default Faq;
