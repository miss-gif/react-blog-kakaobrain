import React, { useEffect, useRef } from "react";

const MbHeader = ({ mbMenuOpen }) => {
  // 모바일 메뉴 관련
  const mbBg = useRef(null);
  const mbMenu = useRef(null);

  // 모바일 메뉴 관련 HTML 처리
  useEffect(() => {
    // 메뉴 보이고, 숨기기를 합니다.
    if (mbMenuOpen) {
      mbBg.current.classList.add("mb-header-bg-show");
      mbMenu.current.classList.add("mb-header-menu-show");
    } else {
      mbBg.current.classList.remove("mb-header-bg-show");
      mbMenu.current.classList.remove("mb-header-menu-show");
    }
    return () => {};
  }, [mbMenuOpen]);

  useEffect(() => {
    // mbBt.current.addEventListener("click", function (event) {
    //   // a 태그 이므로 웹브라우저가 갱신 된다.
    //   // a 태그가 작동이 안되도록 기능을 막는다.
    //   event.preventDefault();
    //   // 아이콘 바꾸기
    //   if (mbMenuOpen) {
    //     mbBt.classList.remove("mobile-menu-open");
    //     mbBg.classList.remove("mb-header-bg-show");
    //     mbMenu.classList.remove("mb-header-menu-show");
    //     mbMenuOpen = false;
    //   } else {
    //     // 메뉴가 펼침이 아닌데 사용자가 클릭하면 메뉴를 펼침.
    //     mbBt.classList.add("mobile-menu-open");
    //     mbBg.classList.add("mb-header-bg-show");
    //     mbMenu.classList.add("mb-header-menu-show");
    //     mbMenuOpen = true;
    //   }
    // });
    window.addEventListener("resize", function () {
      // 브라우저의 너비를 알아낸다.
      const winWidth = window.innerWidth;

      if (winWidth > 1024) {
        if (mbMenuOpen) {
          // mbBt.classList.remove("mobile-menu-open");
          mbBg.current.classList.remove("mb-header-bg-show");
          mbMenu.current.classList.remove("mb-header-menu-show");
          // mbMenuOpen = false;
        }
      }
    });
    // cleanUp 함수
    return () => {};
  }, []);
  return (
    <>
      <div className="mb-header-bg" ref={mbBg}></div>
      <div className="mb-header-menu" ref={mbMenu}>
        <div className="inner">
          <ul className="mb-nav">
            <li>
              <a href="#">소식</a>
            </li>
            <li>
              <a href="#">팀 & 크루</a>
            </li>
            <li>
              <a href="#">영입</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MbHeader;
