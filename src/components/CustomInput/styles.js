import { css } from "@emotion/react";

export const input = css`
  display: flex;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > label {
    font-size: 14px;
    color: #69707a;
    margin-bottom: 4px;
  }
  & > input {
    color: #333;
    width: 100%;
    padding: 14px 18px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 6px;
    border: 1px solid #dbdbdb;
    transition: all 0.2s ease;

    &:focus {
        border: 1px solid #0061f2;
    }
  }
`;
