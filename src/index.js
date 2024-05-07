import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import MbHeader from "./components/MbHeader";
import Popup from "./components/Popup";

import "./css/reset.css";
import "./css/common.css";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Wrap = () => {
  const [mbMenuOpen, setMbMenuOpen] = useState(false);
  const clickMbbt = () => {
    setMbMenuOpen((prev) => {
      return !prev;
    });
  };

  // js 코드 자리
  return (
    <div className="wrap">
      <Header clickMbbt={clickMbbt} />
      <MbHeader mbMenuOpen={mbMenuOpen} />
      <Main />
      <Footer />
    </div>
  );
};

root.render(
  <>
    <Popup />1
    <Wrap />
  </>
);
