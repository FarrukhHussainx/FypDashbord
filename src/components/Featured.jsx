import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import React, { useContext, useState, useEffect } from "react";
import OrderContext from "../context/OrderContext";
const Featured = () => {
  const context = useContext(OrderContext);
  const { customers, getUserData, order, orderC } = context;
  useEffect(() => {
    getUserData();
    orderC();
  }, []);
  const x = order.map((item) => item.price);
  let today = 0;
  let thisMonth = 0;
  let lastMonth = 0;
  const d = new Date();
  let month = d.getMonth();
  let day = d.getDate();
  let lmonth = month - 1;

  // x.filter((item) => item.price).forEach((element) => {
  //   thisYear += element;
  // });

  order
    .filter((item) => item.month == month)
    .filter((item) => item.date == day)
    .map((item) => item.price)
    .forEach((element) => {
      today += element;
    });

  order
    .filter((item) => item.month == month)
    .map((item) => item.price)
    .forEach((element) => {
      thisMonth += element;
    });

  order
    .filter((item) => item.month == lmonth)
    .map((item) => item.price)
    .forEach((element) => {
      lastMonth += element;
    });
  let a = today / thisMonth;
  let b = a * 100;
  b = b.toFixed();
  console.log(b);

  return (
    <div className="feature">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={b} text={`${b}%`} strokeWidth={8} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">{`Rs${today}`}</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          {/* <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div> */}
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">{`Rs ${lastMonth}`}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">This Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">{`Rs ${thisMonth}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
