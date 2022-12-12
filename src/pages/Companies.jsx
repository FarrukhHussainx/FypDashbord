import React, { useContext, useEffect } from "react";
import OrderContext from "../context/OrderContext";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Modal from "./Modal";
import rating0 from "../assets/rating-0.png";
import rating1 from "../assets/rating-1.png";
import rating2 from "../assets/rating-2.png";
import rating3 from "../assets/rating-3.png";
import rating4 from "../assets/rating-4.png";
import rating5 from "../assets/rating-5.png";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useState } from "react";

const Companies = () => {
  const context = useContext(OrderContext);
  const [modalc, setModalC] = useState(false);
  const { company, getcompanies, check, services, updateNote } = context;
  useEffect(() => {
    getcompanies();
  }, []);
  let num = 0;
  const onclick = (item) => {
    if (item.status === "enable") {
      item.status = "disable";
      console.log(item.status);
      updateNote(item);
    } else {
      item.status = "enable";
      console.log(item.status);
      updateNote(item);
    }
  };
  const close = () => {
    setModalC(false);
  };
  const onclickx = async (id) => {
    check(id);

    setModalC(true);
  };
  return (
    <>
      {/* <img src={rating2} alt="" /> */}
      {modalc ? (
        <Modal onClose={close} />
      ) : (
        <div className="container mt-4">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">NTN</th>
                <th scope="col">Rating</th>
                <th scope="col">Status</th>
                <th scope="col">Services</th>
              </tr>
            </thead>
            <tbody>
              {company.map((item) => (
                <tr key={item._id}>
                  <th scope="row">{++num}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.ntn}</td>
                  {item.rating == 0 && (
                    <td>
                      <img
                        src={rating0}
                        alt="rating-0"
                        style={{ width: "40px", height: "35px" }}
                      />
                    </td>
                  )}
                  {item.rating == 1 && (
                    <td>
                      <img
                        src={rating1}
                        alt="rating-1"
                        style={{ width: "40px", height: "35px" }}
                      />
                    </td>
                  )}
                  {item.rating == 2 && (
                    <td>
                      <img
                        src={rating2}
                        alt="rating-2"
                        style={{ width: "40px", height: "35px" }}
                      />
                    </td>
                  )}
                  {item.rating == 3 && (
                    <td>
                      <img
                        src={rating3}
                        alt="rating-3"
                        style={{ width: "40px", height: "35px" }}
                      />
                    </td>
                  )}
                  {item.rating == 4 && (
                    <td>
                      <img
                        src={rating4}
                        alt="rating-4"
                        style={{ width: "40px", height: "35px" }}
                      />
                    </td>
                  )}
                  {item.rating == 5 && (
                    <td>
                      <img
                        src={rating5}
                        alt="rating-5"
                        style={{ width: "40px", height: "35px" }}
                      />
                    </td>
                  )}
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
                  <td>
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                      }}
                      onClick={() => onclickx(item.name)}
                    >
                      <LocalOfferIcon
                        style={{
                          width: "25px",
                          height: "25px",
                          color: "",
                        }}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Companies;
