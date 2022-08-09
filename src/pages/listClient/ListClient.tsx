import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Datatable from "../../components/datatable/Datatable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { clientR, clientRows } from "../../datatablesource";

const ListClient = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [row, setRow] = useState<any>();
  const [dataRow, setDataRow] = useState<clientR[]>(clientRows);

  const handleEdit = (id: number) => {
    setRow(clientRows.find((el) => el.id === id));
    setOpenEdit(true);
  };

  const handleClose = () => setOpenEdit(false);

  const handleDelete = (id: number) => {
    setDataRow(dataRow.filter((el) => el.id !== id));
  };

  const handleSubmitEdit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const updatedClient: clientR = {
      id: row.id,
      organizationName: data.get("organizationName")?.toString()!,
      clientName: data.get("clientName")?.toString()!,
      phonenumber: Number(data.get("phonenumber")),
    };
    const copyClient = dataRow.map((obj) => {
      if (obj.id === row.id) {
        return updatedClient;
      }
      return obj;
    });
    setDataRow(copyClient);
    setOpenEdit(false);
  };

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

  const clientColumns = [
    {
      field: "id",
      headerName: "id",
      width: 100,
    },
    {
      field: "organizationName",
      headerName: "Organization Name",
      width: 150,
    },
    {
      field: "clientName",
      headerName: "Client Name",

      width: 230,
    },

    {
      field: "phonenumber",
      headerName: "Phone Number",
      width: 200,
    },
  ];
  return (
    <div>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <Datatable
            columns={clientColumns}
            rows={dataRow}
            type="user"
            title="Liste Client"
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
                  id="organizationName"
                  name="organizationName"
                  label="Organization Name"
                  variant="outlined"
                  defaultValue={row?.organizationName}
                />
                <TextField
                  required
                  id="clientName"
                  name="clientName"
                  label="Client Name"
                  variant="outlined"
                  defaultValue={row?.clientName}
                />
                <TextField
                  required
                  id="phonenumber"
                  name="phonenumber"
                  label="Phone Number"
                  variant="outlined"
                  defaultValue={row?.phonenumber}
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
        </div>
      </div>
    </div>
  );
};

export default ListClient;
