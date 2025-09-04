import { css } from "@emotion/react";

export const background = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;
`;

export const container = css`
  width: 600px;
  height: auto;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0.15rem 1.75rem #21283226;
`;

export const detailCardHeader = css`
  width: 100%;
  height: 55px;
  background-color: #21283208;
  padding: 16px 22px;
  box-sizing: border-box;
  border-bottom: 1px solid #dbdbdb;
  color: #0061f2;
  font-weight: 600;
`;

export const detailContent = css`
  width: 100%;
  height: 100%;
  padding: 22px;
  background-color: #fff;

  & > div {
    margin-bottom: 16px;
  }
`;

export const name = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  & > div {
    width: 47%;
  }
`;

export const birthday = css`
  width: 47%;
`;
export const bottom = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const saveButton = css`
  padding: 10px 14px;
  border: none;
  color: #333;
  background-color: #97e9bc;
  border-radius: 8px;
`;

export const cancelButton = css`
  padding: 10px 14px;
  border: none;
  color: #333;
  background-color: #f7ab9f;
  border-radius: 8px;
`;

export const btnContainer = css`
  display: flex;
  gap: 10px;

  & > button {
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      transform: translateY(-2px);
    }
    &:active {
      transform: translateY(0);
    }
  }
`;

export const editButton = css`
  padding: 10px 14px;
  border: none;
  color: #fff;
  background-color: #0061f2;
  border-radius: 8px;
`;
