import "./list.scss";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";

import Customer from "../Customer";
//import Datatable from "../../components/datatable/Datatable";

const List = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <Customer />
      </div>
    </div>
  );
};

export default List;
