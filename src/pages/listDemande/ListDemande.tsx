import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { Demande, DemandeRows } from "../../datatablesource";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const ListDemande = () => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation(["listDemande"]);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [row, setRow] = useState<any>();
  const [dataRow, setDataRow] = useState<Demande[]>(DemandeRows);

  const handleEdit = (id: number) => {
    setRow(DemandeRows.find((el) => el.id === id));
    setOpenEdit(true);
  };

  const handleDelete = (id: number) => {
    setDataRow(dataRow.filter((el) => el.id !== id));
  };

  const handleSubmitEdit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const updatedDemande: Demande = {
      id: row.id,
      name: data.get("name")?.toString()!,
      type: data.get("type")?.toString()!,
      status: data.get("status")?.toString()!,
      date: data.get("date")?.toString()!,
      dateTreatment: data.get("treatement")?.toString()!,
    };
    const copyMagasin = dataRow.map((obj) => {
      if (obj.id === row.id) {
        return updatedDemande;
      }
      return obj;
    });
    setDataRow(copyMagasin);
    setOpenEdit(false);
  };

  const handleSubmitAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const AddedDemanede: Demande = {
      id: dataRow.length + 1,
      name: data.get("name")?.toString()!,
      type: data.get("type")?.toString()!,
      status: data.get("status")?.toString()!,
      date: data.get("date")?.toString()!,
      dateTreatment: data.get("dateTreatment")?.toString()!,
    };
    setDataRow([...dataRow, AddedDemanede]);
    setOpen(false);
  };

  const DemandeColumn = [
    {
      field: "date",
      headerName: t("date"),
      width: 230,
    },
    {
      field: "name",
      headerName: t("name"),
      width: 230,
    },
    {
      field: "type",
      headerName: t("type"),
      width: 230,
    },
    {
      field: "status",
      headerName: t("status"),
      width: 230,
      renderCell: (params: any) => {
        return (
          <div className="cellAction">
            <div>{dataRow.find((row) => row.id === params.row.id)?.status}</div>
            <div className="viewButton" style={{ color: "green" }}>
              ✓
            </div>

            <div className="deleteButton">X</div>
          </div>
        );
      },
    },
    {
      field: "dateTreatment",
      headerName: t("Date of Treatment"),
      width: 230,
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
          columns={DemandeColumn}
          rows={dataRow}
          type="demande"
          title={t("demandeslist")}
          link={{ title: t("AddDemand"), path: "/users/new" }}
          handleOpen={handleOpen}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
      <div>
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
              {t("newDemande")}
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmitAdd}
              sx={{
                "& > :not(style)": { m: 1, width: "35ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                required
                id="name"
                name="name"
                label="Name"
                variant="outlined"
              />
              <TextField
                required
                id="type"
                name="type"
                label="Type"
                variant="outlined"
                defaultValue={row?.type}
              />
              <TextField
                required
                id="status"
                name="status"
                label="Status"
                variant="outlined"
              />
              <TextField
                required
                id="date"
                name="date"
                label="Date"
                variant="outlined"
              />
              <TextField
                required
                id="dateTreatment"
                name="dateTreatment"
                label="Date of Treatement"
                variant="outlined"
              />
              <Button
                variant="contained"
                type="submit"
                disableElevation
                sx={{ ml: 35, mt: 5 }}
              >
                {t("Add")}
              </Button>
            </Box>
          </Box>
        </Modal>

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
              {t("newDemande")}
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmitEdit}
              sx={{
                "& > :not(style)": { m: 1, width: "35ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                required
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                defaultValue={row?.name}
              />
              <TextField
                required
                id="type"
                name="type"
                label="Type"
                variant="outlined"
                defaultValue={row?.type}
              />
              <TextField
                required
                id="status"
                name="status"
                label="Status"
                variant="outlined"
                defaultValue={row?.status}
              />
              <TextField
                required
                id="date"
                name="date"
                label="Date"
                variant="outlined"
                defaultValue={row?.date}
              />
              <TextField
                required
                id="dateTreatment"
                name="dateTreatment"
                label="Date of Treatement"
                variant="outlined"
                defaultValue={row?.dateTreatment}
              />
              <Button
                type="submit"
                variant="contained"
                disableElevation
                sx={{ ml: 35, mt: 5 }}
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

export default ListDemande;
