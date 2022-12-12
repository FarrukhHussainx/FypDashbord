import "./list.scss";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import Companies from "../Companies";

const ListCompanies = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <Companies />
      </div>
    </div>
  );
};

export default ListCompanies;
