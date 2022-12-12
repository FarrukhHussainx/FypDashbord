import "./home.scss";
import React, { useContext, useEffect } from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import Widget from "../../components/Widget";
import Chart from "../../components/Chart";
import Featured from "../../components/Featured";
import List from "../list/List";
import OrderContext from "../../context/OrderContext";
const Home = () => {
  const context = useContext(OrderContext);
  const {
    customers,
    getUserData,
    order,
    getAllOrders,
    workers,
    getcompanies,
    orderC,
    checkx,
  } = context;
  useEffect(() => {
    getUserData();
    orderC();
    checkx();
  }, []);
  const d = new Date();
  let month = d.getMonth();
  let day = d.getDate();
  let lmonth = month - 1;
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
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        {/* <NavBar /> */}
        <div className="widgets">
          {/* <Widget
            type="user"
            amount={customers.length}
            url="http://localhost:3000/users"
          /> */}
          <Widget
            type="order"
            amount={order.length}
            url="http://localhost:3000/orders"
          />
          <Widget type="earning" amount={`${fullYear}`} />
          <Widget
            type="company"
            amount={workers.length}
            // url="http://localhost:3000/createworker"
          />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
