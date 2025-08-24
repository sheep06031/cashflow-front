import { css } from "@emotion/react";

const SIDEBAR_WIDTH = 240;
const HEADER_HEIGHT = 58;

export const page = (toggled) => css`
  position: relative;
  top: ${HEADER_HEIGHT}px;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  transition: all 0.2s ease-in-out;

  width: ${toggled ? `calc(100% - ${SIDEBAR_WIDTH}px)` : "100%"};
  margin-left: ${toggled ? `${SIDEBAR_WIDTH}px` : "0"};

  display: flex;
`;
