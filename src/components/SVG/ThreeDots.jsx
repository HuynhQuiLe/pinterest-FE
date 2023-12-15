import React from "react";

const ThreeDots = ({ width, height }) => {
  return (
    <svg
      className="gUZ R19 U9O kVc"
      height={height ? height : 20}
      width={width ? width : 20}
      viewBox="0 0 24 24"
      aria-hidden="true"
      aria-label
      role="img"
    >
      <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
    </svg>
  );
};

export default ThreeDots;
