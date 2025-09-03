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
  width: 650px;
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
  padding: 22px 22px 0 22px;
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
  color: #fff;
  background-color: #0061f2;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
    background-color: #0154d0;
  }
  &:active {
    transform: translateY(0);
  }
`;

export const footer = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
  padding: 0 22px 22px 22px;
  
  & > p {
    padding: 0;
    margin: 0px;
    font-size: 12px;
    color: red;
  }
`;
