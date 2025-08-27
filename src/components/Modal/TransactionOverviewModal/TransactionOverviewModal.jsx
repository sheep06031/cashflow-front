/** @jsxImportSource @emotion/react */
import { IoClose } from "react-icons/io5";
import Modal from "../Modal";
import * as s from "./styles";

function TransactionOverviewModal({ onClose, transaction }) {
  const { transactionDt, cost, spendingType, description } = transaction;
  return (
    <Modal onClose={onClose}>
      <div css={s.container}>
        <div css={s.header}>
          <h2>Transaction Detail</h2>
          <button css={s.closeBtn} onClick={onClose}>
            <IoClose />
          </button>
        </div>
        <div css={s.content}>
          <p>
            <strong>Date:</strong> {transactionDt}
          </p>
          <p>
            <strong>Cost:</strong> {cost}원
          </p>
          <p>
            <strong>Type:</strong> {spendingType}
          </p>
          <p>
            <strong>Detail:</strong> {description}
          </p>
        </div>
      </div>
    </Modal>
  );
}

export default TransactionOverviewModal;
