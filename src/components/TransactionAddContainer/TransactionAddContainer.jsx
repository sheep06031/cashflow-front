/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./styles";
import TransactionOverviewModal from "../Modal/TransactionOverviewModal/TransactionOverviewModal";
import { IoTrash } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { removeTransactionRequest } from "../../apis/transaction/transactionApis";
import { FaCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function TransactionAddContainer({ transaction, setOnChange }) {
  const {
    transactionId,
    transactionDt,
    cost,
    spendingType,
    category,
    description,
  } = transaction;

  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState(transaction);

  const deleteBtnOnClickHandler = (transactionId) => {
    removeTransactionRequest(transactionId).then((response) => {
      if (response.data.status === "success") {
        setOnChange(transactionId);
        alert(response.data.message);
        return;
      } else if (response.data.status === "falied") {
        alert(response.data.message);
        return;
      }
    });
  };

  const handleChange = (field, value) => {
    setEditData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {editMode ? (
        <>
          <div css={s.editContainer} onClick={() => setOpen(true)}>
            <div css={s.date}>
              <div
                css={s.circle(
                  editData.spendingType === "Income"
                    ? "green"
                    : editData.spendingType === "Expend"
                    ? "red"
                    : "blue"
                )}
              />
              <input
                id="dateInput"
                type="date"
                value={editData.transactionDt}
                onChange={(e) => handleChange("transactionDt", e.target.value)}
              />
            </div>
            <div>
              $
              <input
                id="editCost"
                value={editData.cost}
                onChange={(e) => handleChange("cost", e.target.value)}
              />
            </div>

            <select
              value={editData.spendingType}
              onChange={(e) => handleChange("spendingType", e.target.value)}
            >
              <option value="Income">Income</option>
              <option value="Expend">Expend</option>
              <option value="Save">Save</option>
            </select>
            <input
              value={editData.category}
              onChange={(e) => handleChange("category", e.target.value)}
            />
            <input
              id="editDescription"
              value={editData.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
            <div css={s.btnBox}>
              <button
                css={s.editBox}
                onClick={(e) => {
                  e.stopPropagation();
                  setEditMode(true);
                }}
              >
                <FaCheck />
              </button>
              <button
                css={s.deleteBox}
                onClick={(e) => {
                  e.stopPropagation();
                  setEditMode(false);
                }}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </>
      ) : (
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
            <div css={s.btnBox}>
              <button
                css={s.editBox}
                onClick={(e) => {
                  e.stopPropagation();
                  setEditMode(true);
                }}
              >
                <MdEdit />
              </button>
              <button
                css={s.deleteBox}
                onClick={(e) => {
                  e.stopPropagation();
                  deleteBtnOnClickHandler(transactionId);
                }}
              >
                <IoTrash />
              </button>
            </div>
          </div>
          {open && (
            <TransactionOverviewModal
              transaction={transaction}
              onClose={() => setOpen(false)}
            />
          )}
        </>
      )}
    </>
  );
}

export default TransactionAddContainer;
