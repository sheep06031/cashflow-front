import { css } from "@emotion/react";

export const filterContainer = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  & > div {
    display: flex;
    gap: 10px;
    align-items: flex-end;
  }

  & > div > div {
    display: flex;
    align-items: center;
    gap: 5px;
    & > select {
      text-align: center;
    }
  }

  & > div > input {
    height: 36px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
  }

  & > div > button {
    height: 36px;
    padding: 0 20px;
    border: none;
    border-radius: 6px;
    background-color: #0061f2;
    cursor: pointer;
    color: white;
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      background-color: #0154d0;
    }
  }

  select {
    height: 36px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    cursor: pointer;
  }

  label {
    font-size: 16px;
    font-weight: 500;
    color: #333;
  }
`;