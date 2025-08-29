import { css } from "@emotion/react";

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
