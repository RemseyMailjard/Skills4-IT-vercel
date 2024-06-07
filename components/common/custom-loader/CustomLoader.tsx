import React from "react";

export const CustomLoader = () => {
  return (
    <div className="spinner-main w-screen">
      <div className="spinner-container">
        <div className="spinner-loader" />
      </div>
    </div>
  );
};

export const CustomAuthLoader = () => {
  return (
    <div className="spinner-main !h-[calc(100vh_-_76px)]">
      <div className="spinner-container">
        <div className="spinner-loader" />
      </div>
    </div>
  );
};
