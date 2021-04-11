import styles from "./slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, onClick, style } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "30px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "30px", zIndex: 10 }}
      onClick={onClick}
    />
  );
}

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: true,
      infinite: false,
      className: styles.slide,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <SampleNextArrow props={styles.nextArrow} />,
      prevArrow: <SamplePrevArrow props={styles.prevArrow} />,
      responsive: [
        {
          breakpoint: 1180,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 860,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
      ],
    };
    return (
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          <div>
            <div className={styles.slide1}>
              <h2 className={styles.title}>Меблі преміум класу</h2>
              <span className={styles.dash}></span>
            </div>
          </div>
          <div>
            <div className={styles.slide2}>
              <h2 className={styles.title}>Надійність</h2>
              <span className={styles.dash1}></span>
              <p className={styles.subTitle}>
                За 14 років на ринку меблів для дому ми стали надійними
                партнерами на ринку Вінницької області та України
              </p>
            </div>
          </div>
          <div>
            <div className={styles.slide3}>
              <h2 className={styles.title}>Безкоштовна доставка</h2>
              <span className={styles.dash3}></span>
            </div>
          </div>
          <div>
            <div className={styles.slide4}></div>
          </div>
          <div>
            <div className={styles.slide4}></div>
          </div>
          <div>
            <div className={styles.slide4}></div>
          </div>
        </Slider>
      </div>
    );
  }
}
