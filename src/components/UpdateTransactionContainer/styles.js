import { css } from "@emotion/react";

export const container = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 12px;
  margin-top: 10px;
  border-radius: 12px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 7px 7px 15px #dce0e5, -7px -7px 15px #ffffff;
  color: #333;
  transition: all 0.2s ease;
  cursor: pointer;
  overflow: hidden;
  padding: 0 10px;
  &:hover {
    transform: translateY(-2px);
  }

  & > p {
    flex: 1;
    max-width: 200px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & > div {
    width: 12%;
  }
`;

export const circle = (color) => css`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${color};
`;

export const date = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const btnBox = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 5px;
  & > button {
    font-size: 15px;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    border-radius: 4px;
    border: none;
  }
`;

export const editBox = css`
  background-color: #98e9bc;
  &:hover {
    background-color: #74c599;
  }
`;

export const deleteBox = css`
  background-color: #f7ab9f;
  &:hover {
    background-color: #bf766b;
  }
`;

export const editContainer = css`
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
  box-shadow: 7px 7px 15px #dce0e5, -7px -7px 15px #ffffff;
  color: #333;
  transition: all 0.2s ease;
  cursor: pointer;
  overflow: hidden;
  padding: 0 10px;
  border: 2px dashed #0061f2;

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

  #editCost {
    width: 100px;
  }

  #editDescription {
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


