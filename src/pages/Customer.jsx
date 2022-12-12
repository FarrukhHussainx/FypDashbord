import React, { useContext, useEffect } from "react";
import OrderContext from "../context/OrderContext";
const Customer = () => {
  const context = useContext(OrderContext);
  const { customers, getUserData } = context;
  useEffect(() => {
    getUserData();
  }, []);
  let num = 0;
  return (
    <>
      <div className="container mt-4">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((item) => (
              <tr key={item._id}>
                <th scope="row">{++num}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Customer;
