import React from "react";
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const LoadingSpinner = () => {
  return (
    <PulseLoader color={"black"} loading={true} css={override} size={12} />
  );
};

export default LoadingSpinner;
