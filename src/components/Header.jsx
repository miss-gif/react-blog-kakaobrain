import { useEffect, useRef } from "react";
import "../css/header.css";
import SlideLogo from "./SlideLogo";

const Header = function ({ clickMbbt, mbMenuOpen }) {
  // js 코딩 자리
  const header = useRef(null);
  // 모바일 메뉴 관련
  const mbBt = useRef(null);

  // JSX Element  렌더링 완료시
  useEffect(() => {
    // const header = document.querySelector(".header");
    const headerActiveClass = "line-active";
    const headerActiveValue = 0;

    function showLine(_html, _tgY, _active, _scY) {
      if (_scY > _tgY) {
        _html.classList.add(_active);
      } else {
        _html.classList.remove(_active);
      }
    }
    showLine(
      header.current,
      headerActiveValue,
      headerActiveClass,
      window.scrollY
    );

    window.addEventListener("scroll", function () {
      showLine(
        header.current,
        headerActiveValue,
        headerActiveClass,
        window.scrollY
      );
    });
    return () => {
      window.removeEventListener("scroll", function () {
        showLine(
          header.current,
          headerActiveValue,
          headerActiveClass,
          window.scrollY
        );
      });
    };
  }, []);

  // JSON 연동시
  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    mbBt.current.addEventListener("click", (e) => {
      // a태그 막기
      e.preventDefault();
      // 상위 컴포넌트로부터 Props 전달 받아 실행
      clickMbbt();
    });
    return () => {
      // 이벤트 삭제 함수 추가해야함
    };
  }, []);

  // 버튼의 디자인을 위한 클래스 추가 / 제거
  useEffect(() => {
    // 업데이트 기능
    if (mbMenuOpen) {
      mbBt.current.classList.remove("mobile-menu-open");
    } else {
      mbBt.current.classList.remove("mobile-menu-open");
    }
    return () => {};
  }, [mbMenuOpen]);

  return (
    <header className="header" ref={header}>
      <div className="inner">
        {/* <!-- 상단 로고 --> */}
        <div className="header-logo">
          <a href="index.html" className="header-logo-link">
            <img
              src="./images/etc/logo-kakao.png"
              alt="카카오브레인 블로그"
              className="header-logo-img"
            />
            <SlideLogo />
          </a>
        </div>

        {/* <!-- 상단 메뉴 --> */}
        <nav className="header-navi">
          <ul className="navi-list">
            <li>
              <a href="#">소식</a>
            </li>
            <li>
              <a href="#">팀&크루</a>
            </li>
            <li>
              <a href="#">영입</a>
            </li>
            <li className="navi-search">
              <a href="#"></a>
            </li>
            <li className="mobile-menu">
              <a href="https://www.naver.com/" ref={mbBt}></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
