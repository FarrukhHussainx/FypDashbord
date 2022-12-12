import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import OrderContext from "../context/OrderContext";
const Login = () => {
  const context = useContext(OrderContext);
  const {
    customers,
    getUserData,
    order,
    getAllOrders,
    company,
    getcompanies,
    tokenUser,
  } = context;
  // useEffect(() => {
  //   // getUserData();
  //   // getAllOrders();
  //   // getcompanies();
  //   tokenUser();
  // }, []);
  const [credentails, setCredentails] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  //let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/companies/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: credentails.email,
        password: credentails.password,
      }),
    });
    const json = await response.json();

    // console.log(json);
    if (json.success) {
      //redirect
      //localStorage.setItem("token", json.token);
      tokenUser(json.token, json.id);
      navigate("/");
      //console.log("redirect");
    } else {
      alert("invalid");
    }
  };
  const onChange = (e) => {
    // console.log([...credentails]);
    setCredentails({ ...credentails, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
