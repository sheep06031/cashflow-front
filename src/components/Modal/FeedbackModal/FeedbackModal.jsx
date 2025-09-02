/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import Modal from "../Modal";
import { IoClose } from "react-icons/io5";
import { marked } from "marked";
import { useState } from "react";

function FeedbackModal({ selectedData, onClose }) {
  const { feedbackEng, feedbackKr } = selectedData;
  const [englsih, setEnglish] = useState(true);

  const changeLanOnClickHandler = () => {
    setEnglish((prev) => !prev);
  };

  return (
    <Modal onClose={onClose}>
      <div css={s.feedbackBox}>
        <div css={s.headerRow}>
          <div css={s.toggleContainer}>
            <p>EN/KR</p>
            <label css={s.switchStyle} className="switch">
              <input
                type="checkbox"
                checked={!englsih}
                onChange={changeLanOnClickHandler}
              />
              <span className="slider"></span>
            </label>
          </div>
          <button css={s.closeBtn} onClick={onClose}>
            <IoClose />
          </button>
        </div>

        <div
          css={s.content}
          dangerouslySetInnerHTML={{
            __html: marked.parse(englsih ? feedbackEng : feedbackKr),
          }}
        />
      </div>
    </Modal>
  );
}

export default FeedbackModal;
