import css from "./cases.module.scss";

import Container from "../../shared/container/Container";
import Title from "../../shared/second_title/Title";
import Card from "../../shared/cards/Card";
import { useMediaQuery } from "react-responsive";

import Img1 from "../../img/cases/beautiful1.png";
import Img2 from "../../img/cases/beautiful2.png";
import Img3 from "../../img/cases/beautiful3.png";
import Img4 from "../../img/cases/beautiful4.png";
import Img5 from "../../img/cases/beautiful5.png";
import { ReactComponent as RowR } from "../../img/cases/arrow-right.svg";
import { ReactComponent as RowL } from "../../img/cases/arrow-left.svg";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";


const Cases = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const isBigScreen = useMediaQuery({ minWidth: 1280 });

  const slidesPerView = isSmallScreen ? 1 : 2;
  const margSlider = isBigScreen ? 48 : 24;

  const [activeSlide, setActiveSlide] = React.useState(null);

  const handleSlideChange = (swiper) => {
    const activeSlideData = swiper.slides[swiper.activeIndex].dataset;
    setActiveSlide(activeSlideData);
  };


  return (
    <Container id="cases">
      <div className={css.container__cases}>
        <div className={css.container__info}>
          <div className={css.container__title}>
            <div className={css.text__size}>
              <Title text="Successful cases of our company" />
            </div>
          </div>
          <div className={css.container__buttons}>
            <div className={css.numbers}>
              <p className={css.number__first}>{activeSlide ? activeSlide.id : ""}</p>
              <p>/</p>
              <p className={css.number__second}>5</p>
            </div>
            <div className={css.buttons}>
              <button className={`row__p ${css.row}`}>
                <RowL />
              </button>
              <button className={`row__n ${css.row}`}>
                <RowR />
              </button>
            </div>
          </div>
        </div>
        <Swiper
          className={css.container__card}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={margSlider}
          slidesPerView={slidesPerView}
          navigation={{
            nextEl: ".row__n",
            prevEl: ".row__p",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide data-id='1'>
            <Card
              image={Img1}
              text="Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”"
              location="Wind Power for auto field irrigation"
              date="July 2023"
            />
          </SwiperSlide>
          <SwiperSlide data-id='2'>
            <Card
              image={Img2}
              text="Zhytomyr city Private Enterprise “Bosch”"
              location="Solar Panels for industrial use"
              date="November 2023"
            />
          </SwiperSlide>
          <SwiperSlide data-id='3'>
            <Card
              image={Img3}
              text="Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”"
              location="Wind Power for auto field irrigation"
              date="July 2023"
            />
          </SwiperSlide>
          <SwiperSlide data-id='4'>
            <Card
              image={Img4}
              text="Kherson city
              Private Enterprise “HealthyFarm”"
              location="Wind power"
              date="September 2021"
            />
          </SwiperSlide>

          <SwiperSlide data-id='5'>
            <Card
              image={Img5}
              text="Zaporizhia city
              Private Enterprise “Biotech”"
              location="Mini nuclear stations"
              date="May 2021"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default Cases;
