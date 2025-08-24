import { css } from "@emotion/react";

export const navBar = css`
  position: fixed;
  z-index: 1000;
  width: 100vw;
  height: 58px;
  padding: 8px 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(33, 40, 50, 0.15);

  & > ul {
    margin: 0 10px;
    width: 100%;
    height: 100%;

    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    & > li {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
`;

export const sideBarToggleBtn = (toggled) => css`
  font-size: 16px;
  padding: 0px;
  margin: 0 0 0 8px;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #eee;
    border-radius: 25px;
  }

  &:active {
    background-color: #cfcccc;
  }

  ${toggled &&
  css`
    background-color: #eee;
    color: black;
    border-radius: 25px;
    border: 1px solid gray;
  `}
`;

export const user = css`
  width: 42px;
  height: 42px;
  transition: all 0.2s ease;
  border-radius: 25px;
  &:hover {
    background-color: #eee;
    
  }
`;
