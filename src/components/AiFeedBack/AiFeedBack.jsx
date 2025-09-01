/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import dayjs from "dayjs";
import {
  generateAiFeedback,
  getAiFeedback,
} from "../../apis/chatGPT/chatGPTApis";
import { useEffect, useState } from "react";
import { marked } from "marked";
import AiFeedBackLoading from "./AiFeedBackLoading/AiFeedBackLoading";

function AiFeedBack({ allTransactionList, date }) {
  const [loadingFeedback, setLoadingFeedback] = useState(false);
  const [aiFeedback, setAiFeedback] = useState({ english: "", korean: "" });
  const [count, setCount] = useState(3);
  const [isEnglish, setIsEnglish] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
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

    if (currentMonthData.length === 0 && previousMonthData.length === 0) {
    alert("There are no transactions available for AI feedback.\nPlease add transactions first!"); 
    setLoadingFeedback(false); 
    return; 
  }

    if (currentMonthData.length > 0 || previousMonthData.length > 0) {
      generateAiFeedback({
        date: selectedMonth,
        currentMonthData: currentMonthData,
        previousMonthData: previousMonthData,
      })
        .then((response) => {
          if (response.data.status === "success") {
            const AiResponse = response.data.data;
            setAiFeedback({
              english: AiResponse.english,
              korean: AiResponse.korean,
            });
            setCount(AiResponse.count);
            return;
          } else if (response.data.status === "expired") {
            setBtnDisabled(true);
            return;
          } else if (response.data.status === "failed") {
            setAiFeedback({
              english: response.data.message,
              korean: response.data.message,
            });
            setCount(3);
            return;
          }
        })
        .catch((error) => {
          console.log(error.message);
        })
        .finally(() => setLoadingFeedback(false));
    }
  };
  const changeLanOnClickHandler = () => {
    setIsEnglish((prev) => !prev);
  };
  useEffect(() => {
    setLoadingFeedback(true);
    getAiFeedback(dayjs(date).format("YYYY-MM"))
      .then((response) => {
        if (response.data.status === "success") {
          const AiResponse = response.data.data;
          setAiFeedback({
            english: AiResponse.english,
            korean: AiResponse.korean,
          });
          setCount(AiResponse.count);
          if (AiResponse.count === 0) {
            setBtnDisabled(true);
          } else {
            setBtnDisabled(false);
          }
          return;
        } else if (response.data.status === "failed") {
          setAiFeedback({ english: "", korean: "" });
          setCount(3);
          setBtnDisabled(false);
          return;
        }
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setLoadingFeedback(false));
  }, [date]);
  return (
    <div css={s.aiFeedBackCard}>
      <div css={s.header}>
        <h2>Smart Feedback</h2>
        <div css={s.toggleContainer}>
          <p>EN/KR</p>
          <label css={s.switchStyle} className="switch">
            <input
              type="checkbox"
              checked={!isEnglish}
              onChange={changeLanOnClickHandler}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      {loadingFeedback ? (
        <div css={s.loadingContainer}>
          <AiFeedBackLoading />
        </div>
      ) : (
        <div css={s.contentContainer(expanded)}>
          {!aiFeedback.english && !aiFeedback.korean ? (
            <div css={s.noFeedbackdiv}>
              <p>Click the button to get feedback</p>
            </div>
          ) : (
            <div>
              <button
                css={s.toggleBtn}
                onClick={() => setExpanded((prev) => !prev)}
              >
                {expanded ? "▲ Show less" : "▼ Show more"}
              </button>
              <div
                dangerouslySetInnerHTML={{
                  __html: marked.parse(
                    (isEnglish ? aiFeedback?.english : aiFeedback?.korean) || ""
                  ),
                }}
              />
            </div>
          )}
        </div>
      )}

      <div css={s.btnContainer}>
        <p>
          Remaining AI feedback attempts:{" "}
          {count !== null ? count : "Loading..."}
        </p>
        <button
          onClick={getFeedBackBtnOnClickHandler}
          disabled={count === 0 || loadingFeedback || btnDisabled}
        >
          Get feedback
        </button>
      </div>
    </div>
  );
}

export default AiFeedBack;
