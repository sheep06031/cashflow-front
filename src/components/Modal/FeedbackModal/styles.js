import { css } from "@emotion/react";

export const feedbackBox = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 800px;
  height: 900px;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-sizing: border-box;

  & > h1 {
    margin: 0 0 5px 0;
    padding: 0;
  }
`;

export const headerRow = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 5px;

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

export const switchStyle = css`
  --button-width: 3.5em;
  --button-height: 2em;
  --toggle-diameter: 1.5em;
  --button-toggle-offset: calc(
    (var(--button-height) - var(--toggle-diameter)) / 2
  );
  --toggle-shadow-offset: 10px;
  --toggle-wider: 3em;
  --color-grey: #cccccc;
  --color-green: #0061f2;

  display: inline-block;

  input[type="checkbox"] {
    display: none;

    &:checked + .slider {
      background-color: var(--color-green);

      &::after {
        transform: translateX(
          calc(
            var(--button-width) - var(--toggle-diameter) -
              var(--button-toggle-offset)
          )
        );
        box-shadow: calc(var(--toggle-shadow-offset) * -1) 0
          calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
      }
    }

    &:active + .slider::after {
      width: var(--toggle-wider);
    }

    &:checked:active + .slider::after {
      transform: translateX(
        calc(
          var(--button-width) - var(--toggle-wider) -
            var(--button-toggle-offset)
        )
      );
    }
  }

  .slider {
    display: inline-block;
    width: var(--button-width);
    height: var(--button-height);
    background-color: var(--color-grey);
    border-radius: calc(var(--button-height) / 2);
    position: relative;
    transition: 0.3s all ease-in-out;

    &::after {
      content: "";
      display: inline-block;
      width: var(--toggle-diameter);
      height: var(--toggle-diameter);
      background-color: #fff;
      border-radius: calc(var(--toggle-diameter) / 2);
      position: absolute;
      top: var(--button-toggle-offset);
      transform: translateX(var(--button-toggle-offset));
      box-shadow: var(--toggle-shadow-offset) 0
        calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
      transition: 0.3s all ease-in-out;
    }
  }
`;

export const toggleContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;

  & > p {
    color: #333;
    font-size: 14px;
    margin: 0;
  }
`;

export const toggleBtn = css`
  background: none;
  border: none;
  color: #0061f2;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
  transition: color 0.2s ease;

  &:hover {
    color: #004bb5;
    text-decoration: underline;
  }
`;



export const content = css`
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  padding: 10px;
  overflow: auto;
`;
