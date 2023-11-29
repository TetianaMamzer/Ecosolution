import css from "./values.module.scss";
import Container from "../../shared/container/Container";
import Title from "../../shared/second_title/Title";
import Paragraph from "../../shared/paragraph/Paragraph";
import { ReactComponent as Icons1 } from "../../img/about/icon1.svg";
import { ReactComponent as Icons2 } from "../../img/about/icon2.svg";
import { ReactComponent as Icons3 } from "../../img/about/icon3.svg";
import { ReactComponent as Icons4 } from "../../img/about/icon4.svg";

const Values = ({ text }) => {
  return (
    <Container>
      <div className="">
        <div className={css.container__value}>
          <div className={css.title__container}>
            <div className={css.title__size}>
            <Title text="Main values of our company"/>
              </div>
          </div>
          <div className={css.container__paragraph}>
            <Paragraph text="EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world`s energy needs." />
          </div>
        </div>
        <div className={css.container__card}>
        <div className={css.container__about}>
          <div className={css.card}>
            <div className={css.title}>
              <Icons1 />
              <h4>Openness</h4>
            </div>
            <div className={css.paragraph}>
              <p>to the world, people, new ideas and projects</p>
            </div>
          </div>
          <div className={css.card}>
            <div className={css.title}>
              <Icons2 />
              <h4>Responsibility</h4>
            </div>
            <div className={css.paragraph}>
              <p>
                we are aware that the results of our work have an impact on our
                lives and the lives of future generations
              </p>
            </div>
          </div>
          <div className={css.card__img1}></div>
        </div>
        <div className={css.container__about}>
        <div className={css.card__img2}></div>
          <div className={css.card}>
            <div className={css.title}>
              <Icons3 />
              <h4>Innovation</h4>
            </div>
            <div className={css.paragraph}>
              <p>we use the latest technology to implement non-standard solutions</p>
            </div>
          </div>
          <div className={css.card}>
            <div className={css.title}>
              <Icons4 />
              <h4>Quality</h4>
            </div>
            <div className={css.paragraph}>
              <p>
              we do not strive to be the first among others, but we want to be the best in our business
              </p>
            </div>
          </div>
          
        </div>
        </div>
      </div>
    </Container>
  );
};

export default Values;
