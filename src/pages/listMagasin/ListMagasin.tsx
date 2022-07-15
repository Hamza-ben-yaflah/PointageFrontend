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
        <Datatable Columns={MagasinColumns} Rows={MagasinRows} type="Magasin" />
      </div>
    </div>
  );
};

export default ListMagasin;
