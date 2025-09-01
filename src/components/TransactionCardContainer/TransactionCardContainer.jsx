/** @jsxImportSource @emotion/react */
import dayjs from "dayjs";
import * as s from "./styles";
import { FaDollarSign, FaPiggyBank, FaTag } from "react-icons/fa";

function TransactionCardContainer({ allTransactionList, date }) {
  const selectedMonth = dayjs(date).format("YYYY-MM");

  const transactionList = allTransactionList.filter(
    (tx) => dayjs(tx.transactionDt).format("YYYY-MM") === selectedMonth
  );
  return (
    <div css={s.cardContainer}>
      <div css={s.card("#0061f2")}>
        <div>
          <span>Salary (expected)</span>
          <p>
            $
            {transactionList
              .filter((tx) => tx.spendingType === "Income")
              .reduce((sum, tx) => sum + tx.cost, 0)}
          </p>
        </div>
        <div id="sign">
          <FaDollarSign />
        </div>
      </div>
      <div css={s.card("red")}>
        <div>
          <span>Spending</span>
          <p>
            $
            {transactionList
              .filter((tx) => tx.spendingType === "Expend")
              .reduce((sum, tx) => sum + tx.cost, 0)}
          </p>
        </div>
        <div id="sign">
          <FaTag />
        </div>
      </div>
      <div css={s.card("#00ac69")}>
        <div>
          <span>Savings</span>
          <p>
            $
            {transactionList
              .filter((tx) => tx.spendingType === "Save")
              .reduce((sum, tx) => sum + tx.cost, 0)}
          </p>
        </div>
        <div id="sign">
          <FaPiggyBank />
        </div>
      </div>
      <div css={s.card("purple")}>
        <div>
          <span>Remaining balance</span>
          <p>
            $
            {transactionList
              .filter((tx) => tx.spendingType === "Income")
              .reduce((sum, tx) => sum + tx.cost, 0) -
              transactionList
                .filter((tx) => tx.spendingType === "Expend")
                .reduce((sum, tx) => sum + tx.cost, 0) -
              transactionList
                .filter((tx) => tx.spendingType === "Save")
                .reduce((sum, tx) => sum + tx.cost, 0)}
          </p>
        </div>
        <div id="sign">
          <FaDollarSign />
        </div>
      </div>
    </div>
  );
}

export default TransactionCardContainer;
