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


