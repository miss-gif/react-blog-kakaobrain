import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import MbHeader from "./components/MbHeader";
import Popup from "./components/Popup";

import "./css/reset.css";
import "./css/common.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Popup />
    <div className="wrap">
      <Header />
      <MbHeader />
      <Main />
      <Footer />
    </div>
  </>
);
