import { css } from "@emotion/react";

export const signupBox = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 350px;
  height: auto;
  background: white;
  border-radius: 12px;
  padding: 20px;

  & > h1 {
    margin: 0 0 5px 0;
    padding: 0;
  }

  & > form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    margin: 10px 0;
    width: 100%;

    & > input {
      width: 60%;
      outline: none;
      padding: 10px 15px;
      border: 1px solid #ccc;
      border-radius: 6px;
      transition: all 0.2s ease-in-out;

      &:focus {
        border: 1px solid #0061f2;
      }
    }
    & > button {
      margin-top: 10px;
      border: none;
      background-color: #0061f2;
      color: #fff;
      border-radius: 8px;
      padding: 12px 25px;
      transition: all 0.2s ease;
      cursor: pointer;

      &:hover {
        background-color: #0456d0;
        transform: translateY(-2px);
      }

      &:active {
        transform: translateY(0);
      }
    }
    & > .error-box {
      width: 100%;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
      text-align: center;

      & > p {
        margin: 10px 0 0;
        font-size: 12px;
        color: red;
      }
    }

    & > .error-box.show {
      max-height: 40px;
    }
  }
`;

export const headerRow = css`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    background-color: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      color: red;
    }
  }
`;

export const loadingBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  & > h1 {
    margin: 5px 0;
  }
`;

export const successBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > h1 {
    margin: 5px 0;
  }
`;

export const timer = css`
  margin: 0;
  padding: 0;
  width: 70%;
  text-align: right;
  color: #333;
  font-size: 12px;
`;

export const btnContainer = css`
  width: 70%;
  justify-content: space-between;

  display: flex;
  & > button {
    width: 47%;
    height: 40px;
    margin-top: 10px;
    border: none;
    background-color: #0061f2;
    color: #fff;
    border-radius: 8px;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      background-color: #0456d0;
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;

export const codeContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  margin: 10px 0;
  width: 100%;

  & > span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    outline: none;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 6px;
    transition: all 0.2s ease-in-out;

    &:focus-within {
      border: 1px solid #0061f2;
    }

    & > input {
      outline: none;
      border: none;
    }
  }
  & > button {
    margin-top: 10px;
    border: none;
    background-color: #0061f2;
    color: #fff;
    border-radius: 8px;
    padding: 12px 25px;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      background-color: #0456d0;
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }
  & > .error-box {
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    text-align: center;

    & > p {
      margin: 10px 0 0;
      font-size: 12px;
      color: red;
    }
  }

  & > .error-box.show {
    max-height: 40px;
  }
`;
