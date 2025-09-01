import { css } from "@emotion/react";

export const aiFeedBackCard = css`
  width: 100%;
  height: auto;
  background-color: #fff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 0.15rem 1.75rem #21283226;
  margin-bottom: 20px;
  color: #333;

  & > p {
    margin: 5px 0 10px;
    font-size: 25px;
    font-weight: 500;
  }
`;

export const contentContainer = (expanded) => css`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  min-height: 200px;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #eee;
  margin-bottom: 10px;

  max-height: ${expanded ? "none" : "300px"};
  overflow: hidden;
  transition: max-height 0.3s ease;

  ${!expanded &&
  `
    &::after {
      content: '...';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      text-align: center;
      padding: 10px 0;
      font-size: 40px;
      font-weight: bold;
      color: #666;
      background: linear-gradient(transparent, #fff 70%);
    }
  `}

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const btnContainer = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;

  & > button {
    height: 36px;
    padding: 0 20px;
    border: none;
    border-radius: 6px;
    background-color: #0061f2;
    cursor: pointer;
    color: white;
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      background-color: #0154d0;
    }
    &:disabled {
      background-color: #ccc; 
      cursor: not-allowed; 
      transform: none; 
    }
  }
`;

export const header = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const noFeedbackdiv = css`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const loadingContainer = css`
  border-radius: 8px;
  border: 1px solid #eee;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
