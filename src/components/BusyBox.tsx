import React from 'react';
import { styled } from '../theme';

const BusyBoxLgWrapper = styled.div`
  padding: 64px 0;
  margin: 0 auto;
  width: 200px;
  box-sizing: content-box;
  svg {
    background: none;
  }
`;
/**
 * Loader used(mostly) for the async calls
 */

export default () => (
  <BusyBoxLgWrapper>
    <svg
      width="200px"
      height="200px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className="lds-rolling"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#b7b7b7"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        transform="rotate(229.847 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1.8s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </BusyBoxLgWrapper>
);
