import { css } from "@emotion/react";

export const overlay = css`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.3);  
  backdrop-filter: blur(5px);   
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

