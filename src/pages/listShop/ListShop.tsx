import Sidebar from "../../components/sidebar/Sidebar";
import "./listShop.scss";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { MagasinR, MagasinRows } from "../../datatablesource";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  console.log(row);

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
        <Modal
          open={openEdit}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ mb: 2 }}
            >
              Edit Shop
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmitEdit}
              sx={{
                "& > :not(style)": { m: 1, width: "35ch" },
              }}
              noValidate
            >
              <TextField
                required
                id="shopname"
                name="shopname"
                label="Shop Name"
                variant="outlined"
                defaultValue={row?.name}
              />
              <TextField
                required
                id="adresse"
                name="adresse"
                label="Adresse"
                variant="outlined"
                defaultValue={row?.adresse}
              />
              <TextField
                required
                id="phonenumber"
                name="phonenumber"
                label="Phone Number"
                variant="outlined"
                defaultValue={row?.phonenumber}
              />
              <TextField
                required
                id="number"
                name="number"
                label="Number of employees"
                variant="outlined"
                defaultValue={row?.nombre}
              />
              <Button
                type="submit"
                disableElevation
                sx={{ mr: 1 }}
                className="btn"
              >
                Save
              </Button>
              <Button
                variant="contained"
                disableElevation
                onClick={() => setOpenEdit(false)}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Modal>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ mb: 2 }}
            >
              {t("newShop")}
            </Typography>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "35ch" },
              }}
              noValidate
              onSubmit={handleSubmitAdd}
              autoComplete="off"
            >
              <TextField
                required
                id="shopname"
                name="shopname"
                label="Shop Name"
                variant="outlined"
              />
              <TextField
                required
                id="adresse"
                name="adresse"
                label="Adresse"
                variant="outlined"
              />
              <TextField
                required
                id="phonenumber"
                name="phonenumber"
                label="Phone Number"
                variant="outlined"
              />
              <TextField
                required
                id="number"
                name="number"
                label="Number of employees"
                variant="outlined"
              />
              <Button
                variant="contained"
                disableElevation
                sx={{ ml: 35, mt: 5 }}
                type="submit"
              >
                {t("Add")}
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default ListShop;
