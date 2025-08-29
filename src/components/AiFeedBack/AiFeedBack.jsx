/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import dayjs from "dayjs";
import { fetchAiFeedback } from "../../apis/chatGPT/chatGPTApis";
import { useState } from "react";
import { marked } from "marked";
import AiFeedBackLoading from "./AiFeedBackLoading/AiFeedBackLoading";

function AiFeedBack({ allTransactionList, date }) {
  const [loadingFeedback, setLoadingFeedback] = useState(false);
  const [aiFeedback, setAiFeedback] = useState("");
  const getFeedBackBtnOnClickHandler = async () => {
    setLoadingFeedback(true);
    const selectedMonth = dayjs(date).format("YYYY-MM");
    const previousMonth = dayjs(date).subtract(1, "month").format("YYYY-MM");

    const currentMonthData = allTransactionList.filter(
      (tx) => dayjs(tx.transactionDt).format("YYYY-MM") === selectedMonth
    );
    const previousMonthData = allTransactionList.filter(
      (tx) => dayjs(tx.transactionDt).format("YYYY-MM") === previousMonth
    );

    if (currentMonthData.length > 0 || previousMonthData.length > 0) {
      const result = await fetchAiFeedback(currentMonthData, previousMonthData);
      setAiFeedback(result);
    }
    setLoadingFeedback(false);
  };
  return (
    <div css={s.aiFeedBackCard}>
      <div css={s.header}>
        <p>Smart Feedback</p>
        <div css={s.toggleContainer}>
          <p>EN/KR</p>
          <label css={s.switchStyle} className="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
        </div>
      </div>

      <div css={s.contentContainer}>
        {loadingFeedback ? (
          <AiFeedBackLoading />
        ) : (
          <div
            dangerouslySetInnerHTML={{
              __html: marked.parse(
                aiFeedback || "Click the button to get feedback"
              ),
            }}
          />
        )}
      </div>
      <div css={s.btnContainer}>
        <button onClick={getFeedBackBtnOnClickHandler}>Get feedback</button>
      </div>
    </div>
  );
}

export default AiFeedBack;
