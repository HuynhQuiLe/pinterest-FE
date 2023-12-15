import React from "react";

const Heard = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5.93992 6C6.85992 6 7.76992 6.37 8.42992 7.02L9.90992 8.46L11.9999 10.5L14.0899 8.46L15.5699 7.02C16.2399 6.37 17.1399 6 18.0599 6C18.5499 6 19.2599 6.11 19.9099 6.63C20.5699 7.16 20.9599 7.9 20.9999 8.71C21.0399 9.52 20.7299 10.28 20.1399 10.86L20.0699 10.93L19.9999 11.01C19.9399 11.08 14.4099 17.23 11.9999 19.76C9.58992 17.22 4.05992 11.07 3.99992 11.01L3.93992 10.93L3.85992 10.86C3.26992 10.28 2.96992 9.52 2.99992 8.71C3.03992 7.9 3.42992 7.16 4.08992 6.63C4.72992 6.11 5.44992 6 5.93992 6ZM18.0599 3C16.3999 3 14.7299 3.65 13.4799 4.87C13.1099 5.23 11.9999 6.31 11.9999 6.31C11.9999 6.31 10.8899 5.23 10.5199 4.87C9.26992 3.65 7.59992 3 5.93992 3C4.60992 3 3.28992 3.42 2.20992 4.29C-0.580081 6.54 -0.730081 10.57 1.76992 13.01C1.76992 13.01 8.05992 20.02 10.2499 22.27C10.7199 22.76 11.3599 23 11.9999 23C12.6399 23 13.2799 22.76 13.7499 22.27C15.9399 20.02 22.2299 13.01 22.2299 13.01C24.7299 10.58 24.5799 6.54 21.7899 4.29C20.7099 3.42 19.3899 3 18.0599 3Z"
        fill="#111111"
      />
    </svg>
  );
};

export default Heard;
