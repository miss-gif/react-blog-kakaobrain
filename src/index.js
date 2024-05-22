import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import MbHeader from "./components/MbHeader";
import Popup from "./components/Popup";

import "./css/reset.css";
import "./css/common.css";
import { useState } from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Wrap = () => {
  const [mbMenuOpen, setMbMenuOpen] = useState(false);
  const clickMbbt = () => {
    setMbMenuOpen(prev => {
      return !prev;
    });
  };

  // js 코드 자리
  return (
    <div className="wrap">
      <App />
      <Header clickMbbt={clickMbbt} mbMenuOpen={mbMenuOpen} />
      <MbHeader mbMenuOpen={mbMenuOpen} setMbMenuOpen={setMbMenuOpen} />
      <Main />
      <Footer />
    </div>
  );
};

root.render(
  <>
    <Popup />
    <Wrap />
  </>,
);
