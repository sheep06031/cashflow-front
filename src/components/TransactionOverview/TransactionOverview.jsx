/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./styles";
import TransactionOverviewModal from "../Modal/TransactionOverviewModal/TransactionOverviewModal";

function TransactionOverview({ transaction }) {
  const [open, setOpen] = useState(false);
  const { transactionDt, cost, spendingType, category, description } =
    transaction;

  return (
    <>
      <div css={s.container} onClick={() => setOpen(true)}>
        <div css={s.date}>
          <div
            css={s.circle(
              spendingType === "Income"
                ? "green"
                : spendingType === "Expend"
                ? "red"
                : "blue"
            )}
          />
          <p>{transactionDt}</p>
        </div>
        <p>${cost}</p>
        <p>{spendingType}</p>
        <p>{category}</p>
        <p>{description}</p>
      </div>

      {open && (
        <TransactionOverviewModal
          transaction={transaction}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default TransactionOverview;
