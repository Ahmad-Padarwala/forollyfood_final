import React from "react";

const ShimerUi = (props) => {
  const { width, height, borderRadius } = props;
  const shimmerStyle = {
    width,
    height,
    borderRadius: borderRadius || 10,
  };
  return (
    <>
      <div className="shimmer" style={shimmerStyle}></div>
    </>
  );
};

export default ShimerUi;
