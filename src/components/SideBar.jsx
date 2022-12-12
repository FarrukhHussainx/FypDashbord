import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddBusinessOutlinedIcon from "@mui/icons-material/AddBusinessOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import "./sidebar.scss";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img
          style={{ width: 50, height: 50 }}
          src="https://img.freepik.com/premium-vector/hand-with-pointing-finger_112639-96.jpg?w=360"
          alt=""
        />
        <span className="logo">Jusk Click</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className="Icon" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>Dashbord</span>
            </Link>
          </li>
          <p className="title">Lists</p>
          {/* <li>
            <PersonOutlineIcon className="Icon" />
            <Link to="/users" style={{ textDecoration: "none" }}>
              <span>Customers</span>
            </Link>
          </li> */}
          <li>
            <PersonOutlineIcon className="Icon" />
            <Link to="/createservice" style={{ textDecoration: "none" }}>
              <span>CreateService</span>
            </Link>
          </li>
          <li>
            <PersonOutlineIcon className="Icon" />
            <Link to="/createworker" style={{ textDecoration: "none" }}>
              <span>CreateWorker</span>
            </Link>
          </li>
          {/* <li>
            <AddBusinessOutlinedIcon className="Icon" />
            <Link to="/companies" style={{ textDecoration: "none" }}>
              <span>Companies</span>
            </Link>
          </li> */}
          <li>
            <AddShoppingCartOutlinedIcon className="Icon" />
            <Link to="/orders" style={{ textDecoration: "none" }}>
              <span>Orders</span>
            </Link>
          </li>
          {/* <li>
            <DeliveryDiningIcon className="Icon" />
            <span>Delivery</span>
          </li> */}
          {/* <p className="title">UseFul</p>
          <li>
            <AdUnitsIcon className="Icon" />
            <span>stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className="Icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <HealthAndSafetyIcon className="Icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="Icon" />
            <span>Logs</span>
          </li>
          <li>
            <AppSettingsAltIcon className="Icon" />
            <span>Setting</span>
          </li> */}
          <p className="title">USER</p>
          {/* <li>
            <AdminPanelSettingsIcon className="Icon" />
            <span>Profile</span>
          </li> */}
          <li>
            <LogoutIcon className="Icon" />
            <span>Log Out</span>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div> */}
    </div>
  );
};

export default SideBar;
