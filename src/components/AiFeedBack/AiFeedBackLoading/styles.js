import { css, keyframes } from "@emotion/react";

const circleOuter135 = keyframes`
  0% { stroke-dashoffset: 25; }
  25% { stroke-dashoffset: 0; }
  65% { stroke-dashoffset: 301; }
  80% { stroke-dashoffset: 276; }
  100% { stroke-dashoffset: 276; }
`;

const circleMiddle6123 = keyframes`
  0% { stroke-dashoffset: 17; }
  25% { stroke-dashoffset: 0; }
  65% { stroke-dashoffset: 204; }
  80% { stroke-dashoffset: 187; }
  100% { stroke-dashoffset: 187; }
`;

const circleInner162 = keyframes`
  0% { stroke-dashoffset: 9; }
  25% { stroke-dashoffset: 0; }
  65% { stroke-dashoffset: 106; }
  80% { stroke-dashoffset: 97; }
  100% { stroke-dashoffset: 97; }
`;

const textAnimation76 = keyframes`
  0% { clip-path: inset(0 100% 0 0); }
  50% { clip-path: inset(0); }
  100% { clip-path: inset(0 0 0 100%); }
`;

export const wifiLoader = css`
  --background: #62abff;
  --front-color: #4f29f0;
  --back-color: #c3c8de;
  --text-color: #414856;
  width: 300px;
  height: 100px;
  border-radius: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    circle {
      position: absolute;
      fill: none;
      stroke-width: 6px;
      stroke-linecap: round;
      stroke-linejoin: round;
      transform: rotate(-100deg);
      transform-origin: center;

      &.back {
        stroke: var(--back-color);
      }

      &.front {
        stroke: var(--front-color);
      }
    }

    &.circle-outer {
      height: 86px;
      width: 86px;

      circle {
        stroke-dasharray: 62.75 188.25;

        &.back {
          animation: ${circleOuter135} 1.8s ease infinite 0.3s;
        }
        &.front {
          animation: ${circleOuter135} 1.8s ease infinite 0.15s;
        }
      }
    }

    &.circle-middle {
      height: 60px;
      width: 60px;

      circle {
        stroke-dasharray: 42.5 127.5;

        &.back {
          animation: ${circleMiddle6123} 1.8s ease infinite 0.25s;
        }
        &.front {
          animation: ${circleMiddle6123} 1.8s ease infinite 0.1s;
        }
      }
    }

    &.circle-inner {
      height: 34px;
      width: 34px;

      circle {
        stroke-dasharray: 22 66;

        &.back {
          animation: ${circleInner162} 1.8s ease infinite 0.2s;
        }
        &.front {
          animation: ${circleInner162} 1.8s ease infinite 0.05s;
        }
      }
    }
  }

  .text {
    position: absolute;
    bottom: -40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: lowercase;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.2px;

    &::before,
    &::after {
      content: attr(data-text);
    }

    &::before {
      color: var(--text-color);
    }

    &::after {
      color: var(--front-color);
      animation: ${textAnimation76} 3.6s ease infinite;
      position: absolute;
      left: 0;
    }
  }
`;
