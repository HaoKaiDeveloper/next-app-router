import React from "react";

async function getData() {
  let num = Math.random() * 10;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num > 5) {
        resolve();
      }
      reject(new Error("發生錯誤請稍後再試"));
    }, 2000);
  });
}

const ComponentA = async () => {
  const data = await getData();
  return <h1>componentA</h1>;
};

const dashboardInfo = async () => {
  return (
    <div>
      <ComponentA />
    </div>
  );
};

export default dashboardInfo;
