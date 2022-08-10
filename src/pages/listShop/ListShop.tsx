import Sidebar from "../../components/sidebar/Sidebar";
import "./listShop.scss";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { MagasinR, MagasinRows } from "../../datatablesource";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AddShop from "./AddShop";
import EditShop from "./EditShop";
const ListShop = () => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [row, setRow] = useState<any>();
  const [dataRow, setDataRow] = useState<MagasinR[]>(MagasinRows);
  const { t } = useTranslation(["listMagasin"]);

  const handleOpen = () => setOpen(true);
  const handleEdit = (id: number) => {
    setRow(MagasinRows.find((el) => el.id === id));
    setOpenEdit(true);
  };
  const handleClose = () => setOpen(false);

  const handleDelete = (id: number) => {
    setDataRow(dataRow.filter((el) => el.id !== id));
  };

  const handleSubmitEdit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const updatedMagasin: MagasinR = {
      id: row.id,
      name: data.get("shopname")?.toString()!,
      adresse: data.get("adresse")?.toString()!,
      phonenumber: Number(data.get("phonenumber")),
      nombre: Number(data.get("number")),
    };
    const copyMagasin = dataRow.map((obj) => {
      if (obj.id === row.id) {
        return updatedMagasin;
      }
      return obj;
    });
    setDataRow(copyMagasin);
    setOpenEdit(false);
  };

  const handleSubmitAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const AddeddMagasin: MagasinR = {
      id: dataRow.length + 1,
      name: data.get("shopname")?.toString()!,
      adresse: data.get("adresse")?.toString()!,
      phonenumber: Number(data.get("phonenumber")),
      nombre: Number(data.get("number")),
    };

    setDataRow([...dataRow, AddeddMagasin]);
    setOpen(false);
  };

  const MagasinColumns = [
    {
      field: "id",
      headerName: t("id"),
      width: 70,
    },
    {
      field: "name",
      headerName: t("name"),

      width: 230,
      renderCell: (params: any) => {
        return (
          <div className="cellWithImg">
            <Link to="/products/test" style={{ textDecoration: "none" }}>
              {params.row.name}
            </Link>
          </div>
        );
      },
    },
    {
      field: "adresse",
      headerName: t("adress"),
      width: 230,
    },

    {
      field: "phonenumber",
      headerName: t("phoneNumber"),
      width: 100,
    },
    {
      field: "nombre",
      headerName: t("employeeNumber"),
      width: 160,
    },
  ];

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable
          columns={MagasinColumns}
          rows={dataRow}
          type="Magasin"
          title={t("ShopList")}
          link={{ title: t("AddShop"), path: "/users/new" }}
          handleOpen={handleOpen}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
      <div>
        <AddShop
          handleSubmitAdd={handleSubmitAdd}
          style={style}
          row={row}
          open={open}
          handleClose={handleClose}
        />
        <EditShop
          handleSubmitEdit={handleSubmitEdit}
          style={style}
          row={row}
          open={openEdit}
          handleClose={() => setOpenEdit(false)}
        />
      </div>
    </div>
  );
};

export default ListShop;
