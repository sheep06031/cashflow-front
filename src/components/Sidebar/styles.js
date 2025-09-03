import { css } from "@emotion/react";

export const sidebar = (toggled) => css`
  position: fixed;
  margin: 58px 0 0 0;
  top: 0;
  left: 0;
  width: 240px;
  height: calc(100% - 58px);
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #212832;
  box-sizing: border-box;
  border: none;

  transition: all 0.2s ease-in-out;
  transform: ${toggled ? "translateX(0)" : "translateX(-100%)"};
  box-shadow: ${toggled ? "0 2px 1.75rem rgba(33, 40, 50, 0.15)" : "none"};

  z-index: 500;
`;

export const footer = css`
  margin-top: auto;
  background-color: #f5f6f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  height: 5rem;
`;

export const subtitle = css`
  font-size: 12px;
  color: #60757a;
`;

export const title = css`
  font-size: 14px;
`;

export const menuItem = (num) => css`
  padding: 20px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;


  & > span {
    font-size: 16px;
    color: #a7aeb8;
    font-weight: 600;
    padding: 15px 0 0 5px;;

  }

  & > div {
    padding: 10px 0 0 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    height: 40px;
    gap: 14px;
    color: #333;
  }

  & > div:nth-of-type(${num}) {
    font-weight: 600;
    color: #0061f2;
  }
`;
