/** @jsxImportSource @emotion/react */
import { GrGraphQl } from "react-icons/gr";

import * as s from "./styles";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import MonthPicker from "../../components/MonthPicker/MonthPicker";
import { getTransactionListRequest } from "../../apis/transaction/transactionApis";
import TransactionOverview from "../../components/TransactionOverview/TransactionOverview";
import AreaChart from "../../components/AreaChart/AreaChart";
import TransactionCardContainer from "../../components/TransactionCardContainer/TransactionCardContainer";
import TransactionFilterContainer from "../../components/TransactionFilterContainer/TransactionFilterContainer";
import PieChartByCategory from "../../components/PieChart/PieChartByCategory";

import AiFeedBack from "../../components/AiFeedBack/AiFeedBack";

function Overview() {
  const [date, setDate] = useState(dayjs());
  const [transactionList, setTransactionList] = useState([]);
  const [allTransactionList, setAllTransactionList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTransactionList = () => {
    setLoading(true);
    getTransactionListRequest()
      .then((response) => {
        if (response.data.status === "success") {
          const allTx = response.data.data;
          setAllTransactionList(allTx);
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
          {/* -------------------AiFeedBack------------------- */}
          <AiFeedBack allTransactionList={allTransactionList} date={date} />
          {/* -------------------ChartContainer------------------- */}
          <div css={s.chartContainer}>
            <div css={s.chartCard}>
              <AreaChart transactions={allTransactionList} date={date} />
            </div>
            <div css={s.chartCard}>
              <PieChartByCategory
                transactions={allTransactionList}
                date={date}
              />
            </div>
          </div>
          {/* -------------------CardContainer------------------- */}
          <TransactionCardContainer
            allTransactionList={allTransactionList}
            date={date}
          />
          {/* -------------------TransactionContainer------------------- */}
          <div css={s.transactionContainer}>
            <TransactionFilterContainer
              allTransactionList={allTransactionList}
              date={date}
              setTransactionList={setTransactionList}
            />
            {loading ? (
              <p>Loading...</p>
            ) : transactionList && transactionList.length > 0 ? (
              transactionList.map((transaction) => (
                <TransactionOverview
                  key={transaction.transactionId}
                  transaction={transaction}
                />
              ))
            ) : (
              <p>There are no Transactions to show up</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
