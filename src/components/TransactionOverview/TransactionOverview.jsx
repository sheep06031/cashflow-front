/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./styles";
import Modal from "../Modal/Modal";
import TransactionOverviewModal from "../Modal/TransactionOverviewModal/TransactionOverviewModal";


function TransactionOverview({ transaction }) {
  const [open, setOpen] = useState(false);
  const { transactionDt, cost, spendingType, description } = transaction;

  return (
    <>
      <div css={s.container} onClick={() => setOpen(true)}>
        <div css={s.date}>
          <div css={s.circle(cost >= 0 ? "green" : "red")} />
          <p>{transactionDt}</p>
        </div>
        <p>{cost}</p>
        <p>{spendingType}</p>
        <p>{description}</p>
      </div>

      {open && <TransactionOverviewModal transaction={transaction} onClose={() => setOpen(false)} />}
    </>
  );
}

export default TransactionOverview;
