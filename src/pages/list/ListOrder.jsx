import "./list.scss";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import Order from "../Order";
const ListOrder = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <Order />
      </div>
    </div>
  );
};

export default ListOrder;
