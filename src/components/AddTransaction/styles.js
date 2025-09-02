import { css } from "@emotion/react";

export const AddTransactionContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 12px;
  margin-top: 10px;
  border-radius: 12px;
  border-radius: 12px;
  background: #ffffff;

  color: #333;
  transition: all 0.2s ease;
  overflow: hidden;
  padding: 0 10px;
  border: 1px solid #28a745;
  background: #f0fff4;

  & > div {
    height: 65%;
    display: flex;
    gap: 5px;
    align-items: center;

    & > input {
      border-radius: 4px;
      border: 1px solid #dbdbdb;
      height: 100%;
      width: 150px;
      text-align: left;
      overflow: hidden;
      white-space: nowrap;
      box-sizing: border-box;
    }
  }

  #addCost {
    width: 100px;
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  #addDescription {
    width: 230px;
  }

  & > input {
    border-radius: 4px;
    border: 1px solid #dbdbdb;
    height: 65%;
    padding: 8px;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
  }

  & > select {
    border-radius: 4px;
    border: 1px solid #dbdbdb;
    width: 100px;
    height: 65%;
    padding: 5px 0 5px 10px;

    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
  }
`;

export const circle = (color) => css`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${color};
`;

export const addBtn = css`
  border: none;
  padding: 5px 10px;
  background-color: #28a745;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  gap: 8px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: #2d8d43;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
