import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import React, { useContext, useState, useEffect } from "react";
import OrderContext from "../context/OrderContext";

// const data = [
//   { name: "January", Total: 1200 },
//   { name: "February", Total: 2100 },
//   { name: "March", Total: 800 },
//   { name: "April", Total: 1600 },
//   { name: "May", Total: 900 },
//   { name: "June", Total: 1700 },
// ];

const Chart = ({ aspect, title }) => {
  const context = useContext(OrderContext);
  const { customers, getUserData, order, orderC } = context;
  useEffect(() => {
    getUserData();
    orderC();
  }, []);
  const x = order.map((item) => item.price);
  let january = 0;
  order
    .filter((item) => item.month == 0)
    .map((item) => item.price)
    .forEach((element) => {
      january += element;
    });
  let february = 0;
  order
    .filter((item) => item.month == 1)
    .map((item) => item.price)
    .forEach((element) => {
      february += element;
    });
  let march = 0;
  order
    .filter((item) => item.month == 2)
    .map((item) => item.price)
    .forEach((element) => {
      march += element;
    });
  let april = 0;
  order
    .filter((item) => item.month == 3)
    .map((item) => item.price)
    .forEach((element) => {
      april += element;
    });
  let may = 0;
  order
    .filter((item) => item.month == 4)
    .map((item) => item.price)
    .forEach((element) => {
      may += element;
    });
  let june = 0;
  order
    .filter((item) => item.month == 5)
    .map((item) => item.price)
    .forEach((element) => {
      june += element;
    });
  let july = 0;
  order
    .filter((item) => item.month == 6)
    .map((item) => item.price)
    .forEach((element) => {
      july += element;
    });
  let august = 0;
  order
    .filter((item) => item.month == 7)
    .map((item) => item.price)
    .forEach((element) => {
      august += element;
    });
  let september = 0;
  order
    .filter((item) => item.month == 8)
    .map((item) => item.price)
    .forEach((element) => {
      september += element;
    });
  let october = 0;
  order
    .filter((item) => item.month == 9)
    .map((item) => item.price)
    .forEach((element) => {
      october += element;
    });
  let november = 0;
  order
    .filter((item) => item.month == 10)
    .map((item) => item.price)
    .forEach((element) => {
      november += element;
    });
  let december = 0;
  order
    .filter((item) => item.month == 11)
    .map((item) => item.price)
    .forEach((element) => {
      december += element;
    });
  const data = [
    { name: "January", Total: january },
    { name: "February", Total: february },
    { name: "April", Total: april },
    { name: "May", Total: may },
    { name: "June", Total: june },
    { name: "July", Total: july },
    { name: "August", Total: august },
    { name: "September", Total: september },
    { name: "October", Total: october },
    { name: "November", Total: november },
    { name: "December", Total: december },
  ];
  const fullYear =
    january +
    february +
    march +
    april +
    may +
    june +
    july +
    august +
    october +
    september +
    november +
    december;
  console.log(fullYear);
  //const x2 = x1.
  //console.log(x1);
  //console.log(junu);
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
