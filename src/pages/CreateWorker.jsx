import React, { useState, useContext, useEffect } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import OrderContext from "../context/OrderContext";
const CreateService = () => {
  const context = useContext(OrderContext);
  const { services, checkx, workers, CreateWorker, updateNotex } = context;
  const [credentails, setCredentails] = useState({
    name: "",
    iprice: "",
  });
  useEffect(() => {
    checkx();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    CreateWorker(credentails);
  };

  const onChange = (e) => {
    // console.log([...credentails]);
    setCredentails({ ...credentails, [e.target.name]: e.target.value });
  };
  const onclick = (item) => {
    if (item.status === "available") {
      item.status = "unavailable";
      console.log(item.status);
      updateNotex(item);
    } else {
      item.status = "available";
      console.log(item.status);
      updateNotex(item);
    }
  };
  let num = 0;
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
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
              Service
            </label>
            <input
              type="text"
              className="form-control"
              name="iprice"
              id="iprice"
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
              <th scope="col">Name</th>
              <th scope="col">Service</th>
              <th scope="col">status</th>
            </tr>
          </thead>
          <tbody>
            {workers.map((item) => (
              <tr key={item._id}>
                <th scope="row">{++num}</th>
                <td>{item.name}</td>
                <td>{item.service}</td>

                <td>
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                    }}
                    onClick={() => onclick(item)}
                  >
                    {item.status}
                    <AutorenewIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CreateService;
