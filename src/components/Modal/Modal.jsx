/** @jsxImportSource @emotion/react */
import React from "react";
import ReactDOM from "react-dom";
import * as s from "./styles";

function Modal({ onClose, children }) {
  return ReactDOM.createPortal(
    <div css={s.overlay} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>,
    document.body
  );
}

export default Modal;
