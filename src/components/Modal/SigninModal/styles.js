import { css } from "@emotion/react";

export const signInBox = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 350px;
  height: 300px;
  background: white;
  border-radius: 12px;
  padding: 20px;

  & > form {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 10px 0;
    width: 70%;

    & > input {
      outline: none;
      padding: 10px 15px;
      border: 1px solid #ccc;
      border-radius: 6px;
    }
    & > button {
      margin: 10px 0 0 0;
      border: none;
      background-color: #0061f2;
      color: #fff;
      border-radius: 8px;
      padding: 8px 8px;
    }
  }
`;

export const headerRow = css`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    background-color: transparent;
    border: none;
    font-size: 18px;

    &:hover {
      color: red;
    }
  }
`;
