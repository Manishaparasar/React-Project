import React from "react";
import style from "./dynamicTable.module.css";
import vrpdetail from "../assests/vrpdetail.png";
const DynamicTable = () => {
  const data = [
    { id: 4, name: "Apple iPhone 6", grade: "2900" },
    { id: 2, name: "Apple iPhone", grade: "2000" },
    { id: 1, name: "Apple iPhone", grade: "4000" },
  ];

  return (
    <div>
      <img src={vrpdetail} alt="icon of vrp" />
      <table className={style.table}>
        {" "}
        <thead>
          <tr>
            <th>Modal</th>
            <th>Name</th>
            <th>Rate Card</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
