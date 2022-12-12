import "./list.scss";
import CreateWorker from "../CreateWorker";
import Customer from "../Customer";
import SideBar from "../../components/SideBar";
const ListCreateWorker = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <CreateWorker />
      </div>
    </div>
  );
};

export default ListCreateWorker;
