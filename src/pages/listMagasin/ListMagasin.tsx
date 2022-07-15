import Sidebar from "../../components/sidebar/Sidebar";
import "./listMagasin.scss";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { MagasinColumns, MagasinRows } from "../../datatablesource";
const ListMagasin = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable
          columns={MagasinColumns}
          rows={MagasinRows}
          type="Magasin"
          title="Magasin List"
          link={{ title: "Add Magasin", path: "/users/new" }}
        />
      </div>
    </div>
  );
};

export default ListMagasin;
