/** @jsxImportSource @emotion/react */
import { GrGraphQl } from "react-icons/gr";
import * as s from "./styles";
import { FaDollarSign, FaPiggyBank, FaTag } from "react-icons/fa";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import MonthPicker from "../../components/MonthPicker/MonthPicker";
import { getTransactionListRequest } from "../../apis/transaction/transactionApis";

function Overview() {
  const [date, setDate] = useState(dayjs());
  const [transactionList, setTransactionList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTransactionList = () => {
    setLoading(true);
    getTransactionListRequest()
      .then((response) => {
        if (response.data.status === "success") {
          const allTx = response.data.data;

          const selectedMonth = dayjs(date).format("YYYY-MM");

          const filtered = allTx.filter(
            (tx) => dayjs(tx.transactionDt).format("YYYY-MM") === selectedMonth
          );

          setTransactionList(filtered);
          return;
        } else if (response.data.status === "failed") {
          console.log(response.data.message);
          return;
        }
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getTransactionList();
  }, [date]);

  return (
    <>
      <div css={s.background}>
        <div css={s.defaultForm}>
          <div css={s.headerContainer}>
            <div>
              <div>
                <GrGraphQl />
                <span>Overview</span>
              </div>
              <p>something ~~~~</p>
            </div>
            <div>
              <MonthPicker value={date} onChange={(prev) => setDate(prev)} />
            </div>
          </div>
          <div css={s.aiFeedBackCard}>
            <p>Smart Feedback</p>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad cum
              nobis voluptate minima voluptas consequatur error, quisquam ut
              rerum perferendis eaque natus doloribus fugit distinctio, hic
              incidunt eum dolorem dolor.
            </div>
          </div>
          <div css={s.cardContainer}>
            <div css={s.card("#0061f2")}>
              <div>
                <span>Salary (expected)</span>
                <p>$4,390</p>
              </div>
              <div id="sign">
                <FaDollarSign />
              </div>
            </div>
            <div css={s.card("red")}>
              <div>
                <span>Spending</span>
                <p>$1,200</p>
              </div>
              <div id="sign">
                <FaTag />
              </div>
            </div>
            <div css={s.card("#00ac69")}>
              <div>
                <span>Savings</span>
                <p>$200</p>
              </div>
              <div id="sign">
                <FaPiggyBank />
              </div>
            </div>
            <div css={s.card("red")}>
              <div>
                <span>Spending</span>
                <p>$1,200</p>
              </div>
              <div id="sign">
                <FaDollarSign />
              </div>
            </div>
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : transactionList && transactionList.length > 0 ? (
            transactionList.map((tx) => (
              <div key={tx.transactionId}>
                <p>
                  {tx.transactionDt} - {tx.spendingType}
                </p>
                <p>
                  {tx.cost}원 : {tx.description}
                </p>
              </div>
            ))
          ) : (
            <p>There are no Transactions to show up</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Overview;
