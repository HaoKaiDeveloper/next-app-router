"use client";
import { useState, useEffect } from "react";
const PidPage = ({ params }) => {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const resData = await res.json();
      setData(resData);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>productId: {params.id}</h1>
      <div>
        {data &&
          data.map((item) => {
            return (
              <div key={item.id}>
                <p>id {item.id}</p>
                <p>title {item.title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PidPage;
