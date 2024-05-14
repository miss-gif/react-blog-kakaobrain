import React from "react";
import "../css/maintop.css";
import SlideTopMain from "./SlideTopMain";

const MainTop = () => {
  return (
    <>
      <div className="main-top">
        <SlideTopMain />
        <div className="main-top-banner br-20">
          <div className="swiper bannerslide">
            <div className="swiper-wrapper"></div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainTop;
