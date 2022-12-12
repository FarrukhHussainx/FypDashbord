import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import OrderContext from "../context/OrderContext";
import "./model.css";
import maid from "../assets/maid.png";
import welder from "../assets/welder.png";
import plumber from "../assets/plumber.png";
import engineering from "../assets/engineering.png";
import carpenter from "../assets/carpenter.png";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
const ModalOverlay = (props) => {
  const context = useContext(OrderContext);

  const { company, getcompanies, check, services } = context;

  useEffect(() => {
    getcompanies();
  }, []);
  const show = (item) => {
    const result = item.name.toLowerCase();
    //const name = item.name.toUpperCase();
    if (result === "maid") {
      return (
        <div className="divh2">
          <img
            src={maid}
            alt="maid"
            style={{ width: "30px", height: "30px" }}
          />
          <span>{result}</span>
        </div>
      );
    } else if (result === "carpenter") {
      return (
        <div className="divh2">
          <img
            src={carpenter}
            alt="maid"
            style={{ width: "30px", height: "30px" }}
          />
          <span>{result}</span>
        </div>
      );
    } else if (result === "engineer") {
      return (
        <div className="divh2">
          <img
            src={engineering}
            alt="maid"
            style={{ width: "30px", height: "30px" }}
          />
          <span>{result}</span>
        </div>
      );
    } else if (result === "welder") {
      return (
        <div className="divh2">
          <img
            src={welder}
            alt="maid"
            style={{ width: "30px", height: "30px" }}
          />
          <span>{result}</span>
        </div>
      );
    } else if (result === "plumber") {
      return (
        <div className="divh2">
          <img
            src={plumber}
            alt="maid"
            style={{ width: "30px", height: "30px" }}
          />
          <span>{result}</span>
        </div>
      );
    }
  };
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {services.map((item) => show(item))}
        <button className="btn" onClick={props.onClose}>
          Clsoe
        </button>
      </div>
    </div>
  );
};
const Modal = (props) => {
  const protalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        protalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose}></ModalOverlay>,
        protalElement
      )}
      {/* <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay> */}
    </>
  );
};

export default Modal;
