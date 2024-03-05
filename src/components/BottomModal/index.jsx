import React, { useEffect, useRef, useState } from "react";

import "./bottomModal.css";

const BottomModal = ({ isVisible, toggleBottomModal, children }) => {
  const bottomModalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        bottomModalRef.current &&
        !bottomModalRef.current.contains(event.target)
      ) {
        toggleBottomModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bottom-modal-container">
      <div
        className={`bottom-modal-content ${isVisible ? "show" : ""}`}
        ref={bottomModalRef}
      >
        <div className="sheetSeparator"></div>
        {children}
      </div>
      <div className={`overlay ${isVisible ? "active" : ""}`}></div>
    </div>
  );
};

export default BottomModal;
