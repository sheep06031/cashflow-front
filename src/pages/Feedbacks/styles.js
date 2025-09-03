import { css } from "@emotion/react";

export const background = css`
  width: 100%;
  height: 100vh;
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
  padding-bottom: 30px;
`;

export const headerContainer = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
`;

export const content = css`
  width: 100%;
  height: auto;
  height: auto;
  padding: 10px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 15px 15px 25px #cccccc, -15px -15px 25px #ffffff;
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

export const headerleft = css`
  & > div {
    display: flex;
    align-items: center;
    margin: 24px 0 0;
    gap: 5px;
    color: #333;
    font-size: 30px;
    font-weight: 500;
    & > span {
      color: #333;
    }
  }
  & > p {
    margin: 4px 0 0;
    font-size: 14px;
    color: #0061f2;
  }
`;
