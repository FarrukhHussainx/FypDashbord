import React, { useContext, useEffect } from "react";
import OrderContext from "../context/OrderContext";

const Order = () => {
  const context = useContext(OrderContext);
  const { order, orderC, services, check } = context;
  useEffect(() => {
    orderC();
  }, []);
  let num = 0;
  return (
    <>
      <div className="container mt-4">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Service</th>
              <th scope="col">Customer</th>
              <th scope="col">Company</th>
              <th scope="col">Customer_Address</th>
              <th scope="col">Service_Type</th>
              <th scope="col">Price</th>
              <th scope="col">Order_Date</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item) => (
              <tr key={item._id}>
                <th scope="row">{++num}</th>
                <td>{item.name}</td>
                <td>{item.nameU}</td>
                <td>{item.nameC}</td>
                <td>{item.customerAddress}</td>
                <td>{item.type}</td>
                <td>{item.price}</td>
                <td>
                  {item.date}/{item.month}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Order;
