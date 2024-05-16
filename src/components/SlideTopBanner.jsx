import React, { useEffect, useRef, useState } from "react";
import SlideTopBannerItem from "./SlideTopBannerItem";

const SlideTopBanner = () => {
  // js 코드 자리
  const whereTag = useRef(null);
  // 데이터
  const [list, setList] = useState([]);

  useEffect(() => {
    const dataUrl = "./apis/banner.json";
    fetch(dataUrl)
      .then(respose => {
        const result = respose.json();
        return result;
      })
      .then(result => {
        setList(result);
        // let tagS = "";
        // for (let i = 0; i < result.length; i++) {
        //   const obj = result[i];
        //   const temp = `<div class="swiper-slide">
        //     <a href="${obj.url}" style="background: url('./images/${obj.pic}') no-repeat center; background-size:cover;">
        //     <p class="slide-title">${obj.title}</p>
        //     </a>
        // </div>`;
        //   tagS = tagS + temp;
        // }
        // result.forEach((item, index, arr) => {
        //   const temp = `<div class="swiper-slide">
        //         <a href="${item.url}" style="background: url('./images/${item.pic}') no-repeat center; background-size:cover;">
        //         <p class="slide-title">${item.title}</p>
        //         </a>
        //     </div>`;
        //   tagS = tagS + temp;
        // });

        // const whereTag = document.querySelector(".bannerslide .swiper-wrapper");
        // whereTag.current.innerHTML = tagS;
        const bannerSlide = new Swiper(".bannerslide", {
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      })
      .catch(error => {
        console.log(error);
      });
    // cleanUp 함수
    return () => {};
  }, []);
  return (
    <div className="main-top-banner br-20">
      <div className="swiper bannerslide">
        <div className="swiper-wrapper" ref={whereTag}>
          {/* 데이터 출력 */}
          {list.map((item, index, arr) => (
            <SlideTopBannerItem
              key={index}
              url={item.url}
              pic={item.pic}
              title={item.title}
            ></SlideTopBannerItem>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default SlideTopBanner;
