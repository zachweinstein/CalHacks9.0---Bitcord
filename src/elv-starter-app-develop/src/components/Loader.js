import React from "react";

export const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__element loader__element-1" />
      <div className="loader__element loader__element-2" />
      <div className="loader__element loader__element-3" />
      <div className="loader__element loader__element-4" />
    </div>
  );
};

export const PageLoader = ({className=""}) => {
  return (
    <div className={`page-loader ${className}`}>
      <Loader />
    </div>
  );
};
