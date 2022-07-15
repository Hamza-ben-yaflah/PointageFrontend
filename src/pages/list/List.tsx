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
        <Datatable
          columns={userColumns}
          rows={userRows}
          type="user"
          title="Employee list"
          link={{ title: "Add Employee", path: "/users/new" }}
        />
      </div>
    </div>
  );
};

export default List;
