import { css } from "@emotion/react";

export const background = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const defaultForm = css`
  width: 1100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 80px;
`;

export const headerContainer = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    padding: 24px 0 48px;
    & > span {
      margin: 24px 0 0;
      display: flex;
      align-items: center;
      gap: 5px;
      color: #333;
      font-size: 48px;
      & > span {
        color: #333;
      }
    }
    & > p {
      margin: 4px 0 0;
      color: #333;
    }
  }
`;

export const content = css`
  width: 100%;
  height: auto;
  height: auto;
  padding: 10px;
  background-color: #fff;
  border-radius: 12px;
`;

export const yearpicker = css`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;



export const contentHeader = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 10px;
`;
