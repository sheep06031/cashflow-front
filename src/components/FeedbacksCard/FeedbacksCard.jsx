/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import YearPicker from "../../components/MonthPicker/YearPicker";
import * as s from "./styles";
import { getTransactionListRequest } from "../../apis/transaction/transactionApis";
import dayjs from "dayjs";
import { getAiFeedbackList } from "../../apis/chatGPT/chatGPTApis";
import { marked } from "marked";
import FeedbackModal from "../Modal/FeedbackModal/FeedbackModal";

function FeedbacksCard({ date }) {
  const [mergedData, setMergedData] = useState([]);
  const [openFeedback, setOpenFeedback] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const txRes = await getTransactionListRequest();
        const fbRes = await getAiFeedbackList();

        if (
          txRes.data.status === "success" &&
          fbRes.data.status === "success"
        ) {
          const selectedYear = dayjs(date).format("YYYY");
          const monthArray = Object.entries(
            txRes.data.data
              .filter(
                (tx) => dayjs(tx.transactionDt).format("YYYY") === selectedYear
              )
              .reduce((acc, tx) => {
                const month = dayjs(tx.transactionDt).format("YYYY-MM");
                acc[month] = (acc[month] || 0) + 1;
                return acc;
              }, {})
          ).map(([month, count]) => ({ month, count }));

          const feedbackList = fbRes.data.data;

          const merged = monthArray.map((m) => {
            const fb = feedbackList.find(
              (f) => dayjs(f.date).format("YYYY-MM") === m.month
            );

            return {
              month: m.month,
              count: m.count,
              feedbackEng: fb?.feedbackEng || null,
              feedbackKr: fb?.feedbackKr || null,
              remainCount: fb?.count || null,
            };
          });

          setMergedData(merged);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [date]);

  return (
    <div css={s.container}>
      {mergedData.map(
        ({ month, count, feedbackEng, feedbackKr, remainCount }) => (
          <div
            key={month}
            css={feedbackKr ? s.cardWithFeedback : s.cardWithoutFeedback}
            onClick={
              feedbackKr
                ? () => {
                    setSelectedData({
                      month,
                      count,
                      feedbackEng,
                      feedbackKr,
                      remainCount,
                    });
                    setOpenFeedback(true);
                  }
                : undefined
            }
          >
            {feedbackEng ? (
              <div
                css={s.preview}
                dangerouslySetInnerHTML={{
                  __html: marked.parse(feedbackEng),
                }}
              />
            ) : (
              <div css={s.noTransactionContainer}>
                <img
                  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Confused%20Face.png"
                  alt="Confused Face"
                  width="150"
                  height="150"
                />
                <p>Oops... Please generate Feedback </p>
              </div>
            )}

            <div css={s.infoContainer}>
              <div css={s.left}>
                <h2>{month}</h2>
                <p>{count} transactions</p>
                <p>Remaining attempts: {3 - remainCount}</p>
              </div>
            </div>
          </div>
        )
      )}
      {openFeedback && (
        <FeedbackModal
          selectedData={selectedData}
          onClose={() => setOpenFeedback(false)}
        />
      )}
    </div>
  );
}

export default FeedbacksCard;
