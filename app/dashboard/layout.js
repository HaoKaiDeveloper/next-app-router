import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <h1> error 為隨機出現，請多refresh幾次</h1>
      {children}
    </div>
  );
};

export default layout;
