import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { userColumns, userRows } from "../../datatablesource";
const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable Columns={userColumns} Rows={userRows} type="user" />
      </div>
    </div>
  );
};

export default List;
