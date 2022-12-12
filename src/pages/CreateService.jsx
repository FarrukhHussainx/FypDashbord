import React, { useState, useContext, useEffect } from "react";
import OrderContext from "../context/OrderContext";
const CreateService = () => {
  const context = useContext(OrderContext);
  const { CreateService, services, check } = context;
  const [credentails, setCredentails] = useState({
    name: "",
    iprice: "",
    dprice: "",
  });
  useEffect(() => {
    check();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    CreateService(credentails);
  };

  const onChange = (e) => {
    // console.log([...credentails]);
    setCredentails({ ...credentails, [e.target.name]: e.target.value });
  };
  let num = 0;
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Service Type
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="iprice" className="form-label">
              Weekdays charges
            </label>
            <input
              type="number"
              className="form-control"
              name="iprice"
              id="iprice"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dprice" className="form-label">
              Offdays charges
            </label>
            <input
              type="number"
              className="form-control"
              name="dprice"
              id="dprice"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <hr />
      </div>
      <div className="container mt-4">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Service</th>
              <th scope="col">Weekdays charges</th>
              <th scope="col">Offdays charges</th>
            </tr>
          </thead>
          <tbody>
            {services.map((item) => (
              <tr key={item._id}>
                <th scope="row">{++num}</th>
                <td>{item.name}</td>
                <td>{item.iprice}</td>
                <td>{item.dprice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CreateService;
