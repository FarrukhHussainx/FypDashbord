import React, { useState } from "react";
import OrderContext from "./OrderContext";
const OrderState = (props) => {
  const notesInitial = [];
  const localhostx = "192.168.18.3";
  const [customers, setCustomers] = useState([]);
  const [order, setOrder] = useState([]);
  const [company, setCompany] = useState([]);
  const [services, setServices] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [token, setToken] = useState();
  const [id, setId] = useState();
  //geting all customers
  const getUserData = async () => {
    try {
      const reponse = await fetch(
        "http://localhost:5000/api/customers/getallcustomers",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const myData = await reponse.json();

      setCustomers(myData);
    } catch (error) {
      console.log(error.message);
    }
  };
  ////get all companies
  //geting all customers
  const getcompanies = async () => {
    try {
      const reponse = await fetch(
        "http://localhost:5000/api/companies/getallcompanies",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const myData = await reponse.json();

      setCompany(myData);
    } catch (error) {
      console.log(error.message);
    }
  };
  ////get all orders
  const getAllOrders = async () => {
    try {
      const reponse = await fetch("http://localhost:5000/api/orders/orders", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const myData = await reponse.json();

      setOrder(myData);
    } catch (error) {
      console.log(error.message);
    }
  };
  //geting services related to company
  const check = async () => {
    const url = `http://localhost:5000/api/services/fetchallservicesx/${id}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "auth-token":
        //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGEzZjRiYzk3NjcyYTMyZmE0YzJhZCIsImlhdCI6MTY2NTgzNTM5MH0.RWYdP4xR0GD9M_6g4nmhmAsDjRsWCGQco8hZ7uaK96c",
      },
    });
    const json = await response.json();
    setServices(json);
  };
  //get worker of related company
  const checkx = async () => {
    const url = `http://localhost:5000/api/workers/fetchallworker/${id}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "auth-token":
        //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGEzZjRiYzk3NjcyYTMyZmE0YzJhZCIsImlhdCI6MTY2NTgzNTM5MH0.RWYdP4xR0GD9M_6g4nmhmAsDjRsWCGQco8hZ7uaK96c",
      },
    });
    const json = await response.json();
    setWorkers(json);
  };
  ///////////////////////
  const addOrder = async (big) => {
    const url = "http://192.168.18.3:5000/api/orders/createorder";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },
      body: JSON.stringify({
        name: big.name,
        company_id: big.company_id,
        nameC: big.nameC,
        price: big.price,
        type: big.type,
      }),
    });
    //fetchAllNote();
    getOrder();
    console.log({
      name: big.name,
      company_id: big.company_id,
      nameC: big.nameC,
      price: big.price,
      type: big.type,
    });
  };
  const tokenUser = (token, id) => {
    console.log("token");
    console.log(token);
    console.log(id);
    setToken(token);
    setId(id);
  };
  //geting all oders of customer
  const getOrder = async () => {
    try {
      // "http://192.168.18.3:5000/api/services/getallservices"
      const reponse = await fetch(
        "http://192.168.18.3:5000/api/orders/fetchallorders",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": `${token}`,
          },
        }
      );
      const myData = await reponse.json();
      //console.log(myData);
      setOrder(myData);
    } catch (error) {
      console.log(error.message);
    }
  };
  ///////delete order
  const deleteOrder = async (notex) => {
    const url = `http://192.168.18.3:5000/api/orders/deleteOrder/${notex}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },
    });
    const json = await response.json();
    // console.log("delete is called " + notex);
    // const newNote = notes.filter((note) => note._id !== notex);
    getOrder();
    // setNotes(newNote);
    // console.log(notes);

    //setNotes(json);
  };
  ///update company status
  const updateNote = async (item) => {
    const url = `http://localhost:5000/api/companies/updatecompany/${item._id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: item.status }),
    });
    const json = response.json();
    console.log(json);
    getcompanies();
    // for (let index = 0; index < company.length; index++) {
    //   const element = company[index];
    //   if (element._id === item.id) {
    //     element.status = item.status;
    //   }
    // }
  };
  ///update worker status
  const updateNotex = async (item) => {
    const url = `http://localhost:5000/api/workers//updateworker/${item._id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: item.status }),
    });
    const json = response.json();
    console.log(json);
    checkx();
    // for (let index = 0; index < company.length; index++) {
    //   const element = company[index];
    //   if (element._id === item.id) {
    //     element.status = item.status;
    //   }
    // }
  };
  /////create service by company
  const CreateService = async (credentails) => {
    console.log(token);
    console.log(credentails);
    const url = "http://localhost:5000/api/services/createservice";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },

      body: JSON.stringify({
        name: credentails.name,
        iprice: credentails.iprice,
        dprice: credentails.dprice,
      }),
    });
    const json = await response.json();
    check();
  };
  /////create service by company
  const CreateWorker = async (credentails) => {
    console.log(token);
    console.log(credentails);
    const url = "http://localhost:5000/api/workers/createworker";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },

      body: JSON.stringify({
        name: credentails.name,
        service: credentails.iprice,
      }),
    });
    const json = await response.json();
    checkx();
  };
  //////getting all oders by company
  const orderC = async () => {
    console.log(id);
    const url = `http://localhost:5000/api/orders/fetchallordersx/${id}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "auth-token":
        //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGEzZjRiYzk3NjcyYTMyZmE0YzJhZCIsImlhdCI6MTY2NTgzNTM5MH0.RWYdP4xR0GD9M_6g4nmhmAsDjRsWCGQco8hZ7uaK96c",
      },
    });
    const json = await response.json();
    setOrder(json);
  };
  return (
    <OrderContext.Provider
      value={{
        id,
        tokenUser,
        customers,
        getUserData,
        order,
        getAllOrders,
        company,
        services,
        check,
        getcompanies,
        orderC,
        updateNote,
        CreateService,
        token,
        workers,
        CreateWorker,
        checkx,
        updateNotex,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderState;

///////////////////
////////////
/////////////////
//////////////////////
///////////////////////
//////////////////Add a note
//   const addNote = async (noteq) => {
//     const url = "http://localhost:5000/api/notes/createnotes";
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token":
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGEzZjRiYzk3NjcyYTMyZmE0YzJhZCIsImlhdCI6MTY2NTgzNTM5MH0.RWYdP4xR0GD9M_6g4nmhmAsDjRsWCGQco8hZ7uaK96c",
//       },
//       body: JSON.stringify({
//         title: noteq.title,
//         description: noteq.description,
//         tag: noteq.tag,
//       }),
//     });
//     fetchAllNote();
//     //const note={
//     //   name:"" only for understanding
//     // }
//     // setNotes(notes.concat(note));
//   };

//   const deleteNote = async (notex) => {
//     const url = `http://localhost:5000/api/notes/deletenote/${notex}`;
//     const response = await fetch(url, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token":
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGEzZjRiYzk3NjcyYTMyZmE0YzJhZCIsImlhdCI6MTY2NTgzNTM5MH0.RWYdP4xR0GD9M_6g4nmhmAsDjRsWCGQco8hZ7uaK96c",
//       },
//     });
//     const json = await response.json();
//     // console.log("delete is called " + notex);
//     const newNote = notes.filter((note) => note._id !== notex);
//     fetchAllNote();
//     // setNotes(newNote);
//     // console.log(notes);

//     //setNotes(json);
//   };
//   const updateNote = async (id, title, description, tag) => {
//     const url = `http://localhost:5000/api/notes/updatenote/${id}`;
//     const response = await fetch(url, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token":
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGEzZjRiYzk3NjcyYTMyZmE0YzJhZCIsImlhdCI6MTY2NTgzNTM5MH0.RWYdP4xR0GD9M_6g4nmhmAsDjRsWCGQco8hZ7uaK96c",
//       },
//       body: JSON.stringify({ title, description, tag }),
//     });
//     const json = response.json();
//     console.log(json);
//     for (let index = 0; index < notes.length; index++) {
//       const element = notes[index];
//       if (element._id === id) {
//         element.title = title;
//         element.description = description;
//         element.tag = tag;
//       }
//     }
//   };
