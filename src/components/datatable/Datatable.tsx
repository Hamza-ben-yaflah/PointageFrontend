import "./datatable.scss";
import { DataGrid, frFR } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { userC, userR, Demande, MagasinR } from "../../datatablesource";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

type DatatabelProps = {
  columns: userC[];
  rows: (userR | Demande | MagasinR)[];
  type: string;
  title: string;
  link: {
    path: string;
    title: string;
  };
  handleOpen: any;
};

const Datatable = ({
  columns,
  rows,
  type,
  link,
  title,
  handleOpen,
}: DatatabelProps) => {
  const [data, setData] = useState(rows || []);

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: any) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Edit</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <div className="datatable">
        <div className="datatableTitle">
          {title}

          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <input className="search" type="text" placeholder="Search..." />
            <Button className="link" onClick={handleOpen}>
              {link.title}
            </Button>
          </div>
        </div>

        <DataGrid
          sx={{
            "& .MuiDataGrid-virtualScrollerRenderZone": {
              "& .MuiDataGrid-row": {
                "&:nth-child(2n)": {
                  backgroundColor: "rgba(235, 235, 235, .7)",
                },
              },
            },
          }}
          className="datagrid"
          rows={data}
          columns={columns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
        />
      </div>
    </>
  );
};

export default Datatable;
