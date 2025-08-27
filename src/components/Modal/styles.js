import { css, keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const overlay = css`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.3);  
  backdrop-filter: blur(5px);   
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;

  animation: ${fadeIn} 0.25s ease-out;
`;

