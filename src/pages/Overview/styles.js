import { css } from "@emotion/react";

export const background = css`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
        to bottom,
        #0061f2 0px,
        #0061f2 260px,
        transparent 260px
      )
      no-repeat,
    #f2f6fc;

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
    & > div {
      margin: 24px 0 0;
      display: flex;
      align-items: center;
      gap: 5px;
      color: #ffffff80;
      font-size: 48px;
      & > span {
        color: #ffffff;
      }
    }
    & > p {
      margin: 4px 0 0;
      color: #ffffff80;
    }
  }
`;



export const chartContainer = css`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;


export const chartCard = css`
  width: 100%;
  height: 350px; 
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 0.15rem 1.75rem #21283226;
`;

export const transactionContainer = css`
  width: 100%;
  margin-bottom: 20px;
`;
