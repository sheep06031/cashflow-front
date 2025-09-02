/** @jsxImportSource @emotion/react */

import { useState } from "react";
import YearPicker from "../../components/MonthPicker/YearPicker";
import * as s from "./styles";
import dayjs from "dayjs";
import FeedbacksCard from "../../components/FeedbacksCard/FeedbacksCard";

function Feedbacks() {
  const [date, setDate] = useState(dayjs());
  const [cardView, setCardView] = useState(true);

  const changeLanOnClickHandler = () => {
    setCardView((prev) => !prev);
  };

  return (
    <div css={s.background}>
      <div css={s.defaultForm}>
        <div css={s.headerContainer}>
          <div>
            <span>Feedbacks</span>
            <p>View AI Feedback at a Glance</p>
          </div>
          <div css={s.contentHeader}>
            <div css={s.yearpicker}>
              <YearPicker value={date} onChange={setDate} />
            </div>
          </div>
        </div>
        <div css={s.content}>
          
          <FeedbacksCard date={date} />
        </div>
      </div>
    </div>
  );
}

export default Feedbacks;
