import styles from "./sliderFade.module.css";
import arrLeft from "../../image/arrLeft.svg";
import arrRight from "../../image/arrRight.svg";
import { ReactSVG } from "react-svg";
import React, { Component } from "react";
import Slider from "react-slick";
import { sliderBanner } from "../../data/categories";

function SampleNextArrow(props) {
  const { className, onClick, style } = props;

  return (
    <>
      <div
        className={className}
        style={{
          ...style,
          borderRadius: "50%",
        }}
      ></div>
      <button className={styles.btnArrSliderRight} onClick={onClick}>
        <ReactSVG src={arrRight} />
      </button>
    </>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick, style } = props;
  return (
    <>
      <div
        className={className}
        style={{
          ...style,
          borderRadius: "50%",
        }}
      ></div>
      <button className={styles.btnArrSliderLeft} onClick={onClick}>
        <ReactSVG src={arrLeft} />
      </button>
    </>
  );
}

export default class SimpleSlider extends Component {
  state = {
    slideIndex: 1,
    updateCount: 0,
  };

  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: () =>
        this.setState((state) => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next + 1 }),
    };
    return (
      <div className={styles.slider}>
        <Slider {...settings}>
          {sliderBanner.map((el) => {
            return (
              <div key={el.name}>
                <div>
                  <p className={styles.news}>{el.title}</p>
                  <h2 className={styles.title}>{el.name}</h2>
                  <p className={styles.subTitle}>{el.info}</p>
                  <button className={styles.btn} type="button">
                    Детальніше
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
        <p className={styles.sliderCount}>
          {this.state.slideIndex}/{sliderBanner.length}
        </p>
      </div>
    );
  }
}
