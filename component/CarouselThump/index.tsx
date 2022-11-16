import React from "react";
import { Image } from "@mantine/core";

type Carousel = {
  img: string[];
  setActive: (index: number) => void;
  active: number;
};
export default function index({ img, setActive, active }: Carousel) {
  const slides = img.map((item, index) => (
    <div
      key={index}
      className={active === index ? "mySlides active" : "mySlides"}
    >
      <Image width={"100%"} height={"20rem"} src={item} alt="Norway" />
    </div>
  ));
  const changeSlide = (index: number) => {
    setActive(index);
  };
  const nextPrevSlide = (type: string) => {
    if (type === "next") {
      if (active === slides.length - 1) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    } else {
      if (active === 0) {
        setActive(slides.length - 1);
      } else {
        setActive(active - 1);
      }
    }
  };
  const showThum = img.map((item, index) => (
    <div
      key={index}
      onClick={() => {
        changeSlide(index);
      }}
      className={active === index ? "column activeThum mr-1" : "column mr-1"}
    >
      <Image width={"100%"} src={item} alt="Norway" />
    </div>
  ));
  return (
    <div>
      <div className="main-slide">
        {slides}
        <div className="sideNextPrev">
        <a
          className="prev"
          onClick={() => {
            nextPrevSlide("prev");
          }}
          href="#"
        >
          &#10094;
        </a>
        <a
          className="next"
          onClick={() => {
            nextPrevSlide("next");
          }}
          href="#" 

        >
          &#10095;
        </a>
        </div>
      </div>
      <div className="row flex justify-center mt-5">{showThum}</div>
    </div>
  );
}
