import "./list.scss";
import CreateService from "../CreateService";
import Customer from "../Customer";
import SideBar from "../../components/SideBar";
const ListCreateService = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <CreateService />
      </div>
    </div>
  );
};

export default ListCreateService;
