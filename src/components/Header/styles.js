import { css } from "@emotion/react";

export const navBar = css`
  position: fixed;
  z-index: 900;
  width: 100vw;
  height: 58px;
  padding: 8px 10px;
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
    box-sizing: border-box;

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

export const userContainer = css`
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    gap: 10px;

    & > P {
      width: 42px;
      height: 42px;
      transition: all 0.2s ease;
      border-radius: 25px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: #eee;
      }
    }
  }
`;

export const authBtnContainer = css`
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 5px;

    & > button {
      border: none;
      border-radius: 12px;
      padding: 12px 20px;
      box-shadow: 0px 0px 6px 0.5px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      transition: all 0.1s ease-in;

      &:hover {
        transform: translateY(-2px);
      }

      &:active {
        transform: translateY(0);
      }
    }

    & > #signinBtn {
      background-color: #0061f2;
      color: #fff;

      &:active {
        background-color: #0c5dd7;
        color: #eee;
      }
    }

    & > #signupBtn {
      background-color: #eee;

      &:active {
        background-color: #c6c6c6;
      }
    }
  }
`;

export const logo = css`
  width: 150px;
  height: auto;
  object-fit: cover;
`;
