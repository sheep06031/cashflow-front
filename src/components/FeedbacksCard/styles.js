import { css } from "@emotion/react";

export const container = css`
  display: grid;
  width: 100%;
  height: auto;
  /* grid-template-columns: repeat(auto-fill, 300px); */
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  gap: 10px;
  box-sizing: border-box;
`;

export const cardWithFeedback = css`
  background-color: #fff;
  border-radius: 10px;
  padding: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  box-shadow: 7px 7px 15px #dce0e5;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }

  &:hover > div {
    filter: blur(0);
  }
`;

export const cardWithoutFeedback = css`
  background-color: #fff;
  border-radius: 10px;
  padding: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  box-shadow: 0 0.15rem 1.75rem #21283226;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const preview = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border: 1px solid #333;
  border-radius: 7px;
  filter: blur(1px);
  box-sizing: border-box;
`;

export const infoContainer = css`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const left = css`
  padding: 10px;
  & > p {
    margin: 0;
    padding: 0;
    font-size: 12px;
  }
  & > h2 {
    margin: 0;
    padding: 0;
  }
`;

export const noTransactionContainer = css`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > p {
    font-size: 13px;
    font-weight: 500;
  }
`;
