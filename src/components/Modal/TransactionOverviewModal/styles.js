import { css } from "@emotion/react";

export const container = css`
  width: 400px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h2 {
    font-size: 20px;
    margin: 0;
    color: #333;
  }
`;

export const closeBtn = css`
  background: none;
  border: none;
  font-size: 24px;
  color: #666;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

export const content = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #444;
  font-size: 15px;


  & > p {
    display: flex;
    gap: 15px;
    margin: 0;
    line-height: 1.5;
  }

  & > p > strong {
    display: inline-block;
    width: 70px;
    color: #0061f2;
  }
`;

