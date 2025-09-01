/** @jsxImportSource @emotion/react */

import * as s from "./styles";
import { useEffect, useState } from "react";
import { addTransactionRequest } from "../../apis/transaction/transactionApis";
import { FaPlus } from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";

function AddTransaction({ setOnChange, date }) {
  const queryClient = useQueryClient();
  const principalData = queryClient.getQueryData(["getPrincipal"]);
  const [newTransaction, setNewTransaction] = useState({
    userId: principalData.data.data.userId,
    transactionDt: dayjs(date).startOf("month").format("YYYY-MM-DD"),
    cost: "",
    spendingType: "Income",
    category: "",
    description: "",
  });
  const handleChange = (field, value) => {
    setNewTransaction((prev) => ({ ...prev, [field]: value }));
  };

  const addTransaction = () => {
    if (
      !newTransaction.transactionDt ||
      !newTransaction.spendingType ||
      !newTransaction.category.trim() ||
      !newTransaction.description.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (!newTransaction.cost || Number(newTransaction.cost) <= 0) {
      alert("Cost must be greater than 0.");
      return;
    }
    addTransactionRequest(newTransaction)
      .then((response) => {
        if (response.data.status === "success") {
          setOnChange((prev) => prev + 1);
          setNewTransaction({
            userId: principalData.data.data.userId,
            transactionDt: dayjs(date).startOf("month").format("YYYY-MM-DD"),
            cost: "",
            spendingType: "Income",
            category: "",
            description: "",
          });
          return;
        } else if (response.data.status === "failed") {
          alert(response.data.message);
          return;
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    setNewTransaction((prev) => ({
      ...prev,
      transactionDt: dayjs(date).startOf("month").format("YYYY-MM-DD"),
    }));
  }, [date]);

  return (
    <div css={s.AddTransactionContainer}>
      <div css={s.date}>
        <div
          css={s.circle(
            newTransaction.spendingType === "Income"
              ? "blue"
              : newTransaction.spendingType === "Expend"
              ? "red"
              : "green"
          )}
        />
        <input
          id="dateInput"
          type="date"
          value={newTransaction.transactionDt}
          onChange={(e) => handleChange("transactionDt", e.target.value)}
        />
      </div>
      <div>
        $
        <input
          id="addCost"
          type="number"
          value={newTransaction.cost}
          placeholder="Cost"
          onChange={(e) => handleChange("cost", Number(e.target.value))}
        />
      </div>

      <select
        value={newTransaction.spendingType}
        onChange={(e) => handleChange("spendingType", e.target.value)}
      >
        <option value="Income">Income</option>
        <option value="Expend">Expend</option>
        <option value="Save">Save</option>
      </select>
      <input
        value={newTransaction.category}
        placeholder="Category"
        onChange={(e) => handleChange("category", e.target.value)}
      />
      <input
        id="addDescription"
        value={newTransaction.description}
        placeholder="Description"
        onChange={(e) => handleChange("description", e.target.value)}
      />
      <div css={s.btnBox}>
        <button css={s.addBtn} onClick={addTransaction}>
          Add<FaPlus />
        </button>
      </div>
    </div>
  );
}

export default AddTransaction;
