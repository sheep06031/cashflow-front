/** @jsxImportSource @emotion/react */

import { MdOutlinePayment } from "react-icons/md";
import * as s from "./styles";
import TransactionCardContainer from "../../components/TransactionCardContainer/TransactionCardContainer";
import dayjs from "dayjs";
import { getTransactionListRequest } from "../../apis/transaction/transactionApis";
import { useEffect, useState } from "react";
import MonthPicker from "../../components/MonthPicker/MonthPicker";
import TransactionFilterContainer from "../../components/TransactionFilterContainer/TransactionFilterContainer";
import TransactionAddContainer from "../../components/UpdateTransactionContainer/UpdateTransactionContainer";
import AddTransaction from "../../components/AddTransaction/AddTransaction";

function Transaction() {
  const [date, setDate] = useState(dayjs());
  const [transactionList, setTransactionList] = useState([]);
  const [allTransactionList, setAllTransactionList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [onChange, setOnChange] = useState("");

  useEffect(() => {
    const getTransactionList = () => {
      setLoading(true);
      getTransactionListRequest()
        .then((response) => {
          if (response.data.status === "success") {
            const allTx = response.data.data;
            setAllTransactionList(allTx);
            const selectedMonth = dayjs(date).format("YYYY-MM");

            const filtered = allTx.filter(
              (tx) =>
                dayjs(tx.transactionDt).format("YYYY-MM") === selectedMonth
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
    getTransactionList();
  }, [date, onChange]);

  return (
    <div css={s.background}>
      <div css={s.defaultForm}>
        <div css={s.headerContainer}>
          <div>
            <div>
              <MdOutlinePayment />
              <span>Transactions</span>
            </div>
            <p>Add, edit, or delete your transactions easily</p>
          </div>
          <MonthPicker value={date} onChange={(prev) => setDate(prev)} />
        </div>

        <TransactionCardContainer
          allTransactionList={allTransactionList}
          date={date}
        />

        <div css={s.filterContainer}>
          <TransactionFilterContainer
            allTransactionList={allTransactionList}
            date={date}
            setTransactionList={setTransactionList}
          />
        </div>

        <AddTransaction setOnChange={setOnChange} date={date} />
        <div css={s.transactionContainer}>
          {loading ? (
            <p>Loading...</p>
          ) : transactionList && transactionList.length > 0 ? (
            transactionList.map((transaction) => (
              <TransactionAddContainer
                key={transaction.transactionId}
                transaction={transaction}
                setOnChange={setOnChange}
              />
            ))
          ) : (
            <p>There are no Transactions to show up</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Transaction;
