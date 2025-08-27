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

export const aiFeedBackCard = css`
  width: 100%;
  height: auto;
  background-color: #fff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 0.15rem 1.75rem #21283226;
  margin-bottom: 20px;
  color: #333;

  & > p {
    margin: 5px 0 10px;
    font-size: 25px;
    font-weight: 500;
  }
`;

export const cardContainer = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const card = (color) => css`
  padding: 22px;
  width: 260px;
  height: 120px;
  border-radius: 12px;
  background-color: #fff;
  border-left: 5px solid ${color};
  box-sizing: border-box;
  box-shadow: 0 0.15rem 1.75rem #21283226;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    & > span {
      color: ${color};
      font-size: 14px;
    }

    & > p {
      margin: 8px 0 8px;
      font-size: 18px;
      color: #363d47;
    }
  }

  #sign {
    font-size: 62px;
    color: #68686880;
  }
`;

export const chartContainer = css`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  height: 350px;
  gap: 30px;
`;

export const chartCard = css`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 0.15rem 1.75rem #21283226;
`;

export const transactionContainer = css`
  margin-bottom: 20px;
`;