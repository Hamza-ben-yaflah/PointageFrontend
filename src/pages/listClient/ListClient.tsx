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
import EditClient from "./EditClient";

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
          <EditClient
            handleSubmitEdit={handleSubmitEdit}
            style={style}
            row={row}
            open={openEdit}
            handleClose={() => setOpenEdit(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default ListClient;
