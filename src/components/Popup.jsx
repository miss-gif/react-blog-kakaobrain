import React from "react";
import "../css/popup.css";

const Popup = () => {
  const handleClosePopup = (event) => {
    const popup = event.currentTarget.closest(".popup");
    if (popup) {
      popup.style.display = "none";
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <p>
          <strong>
            해당 사이트는 스터디용으로 제작되었으며, 모든 리소스의 저작권은
            원저작자에게 있습니다. <br />
          </strong>
          * 본 사이트는 Chrome 에 최적화되어 있습니다. <br />* 해당 사이트와
          관련한 문제가 있으면 여기로 연락바랍니다
        </p>

        <button
          className="popup-close"
          title="창닫기"
          onClick={handleClosePopup}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Popup;
