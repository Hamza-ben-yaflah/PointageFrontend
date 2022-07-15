import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { DemandeColumn, DemandeRows } from "../../datatablesource";
const ListDemande = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable
          columns={DemandeColumn}
          rows={DemandeRows}
          type="demande"
          title="Demande list"
          link={{ title: "Add Demande", path: "/users/new" }}
        />
      </div>
    </div>
  );
};

export default ListDemande;
