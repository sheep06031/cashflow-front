/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";

import dayjs from "dayjs";

function TransactionFilterContainer({
  allTransactionList,
  date,
  setTransactionList,
}) {
  const [filterCategory, setFilterCategory] = useState("");
  const [filterSpendingType, setFilterSpendingType] = useState("");
  const [filterDetail, setFilterDetail] = useState("");

  const filterOnClickHandler = () => {
    const selectedMonth = dayjs(date).format("YYYY-MM");
    const filtered = allTransactionList.filter((tx) => {
      const matchMonth =
        dayjs(tx.transactionDt).format("YYYY-MM") === selectedMonth;
      const matchType = filterSpendingType
        ? tx.spendingType === filterSpendingType
        : true;
      const matchCategory = filterCategory
        ? tx.category === filterCategory
        : true;
      const matchDetail = filterDetail
        ? tx.description.toLowerCase().includes(filterDetail.toLowerCase())
        : true;

      return matchMonth && matchType && matchCategory && matchDetail;
    });
    setTransactionList(filtered);
  };



  return (
    <div css={s.filterContainer}>
      <div>
        <div>
          <label htmlFor="spendingType">Spending Type:</label>
          <select
            name="spendingType"
            id="spendingType"
            onChange={(e) => setFilterSpendingType(e.target.value)}
          >
            <option value="">All</option>
            {[...new Set(allTransactionList.map((tx) => tx.spendingType))].map(
              (type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              )
            )}
          </select>
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            name="category"
            id="category"
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">All</option>
            {[
              ...new Set(
                allTransactionList
                  .filter(
                    (tx) =>
                      dayjs(tx.transactionDt).format("YYYY-MM") ===
                      dayjs(date).format("YYYY-MM")
                  )
                  .map((tx) => tx.category)
              ),
            ].map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <input
          type="text"
          value={filterDetail}
          onChange={(e) => setFilterDetail(e.target.value)}
          placeholder="Search by detail"
        />
        <button onClick={filterOnClickHandler}>Filter</button>
      </div>
    </div>
  );
}

export default TransactionFilterContainer;
