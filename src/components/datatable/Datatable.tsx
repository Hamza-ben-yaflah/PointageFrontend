import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { userC, userR, Demande, MagasinR } from "../../datatablesource";

type DatatabelProps = {
  columns: userC[];
  rows: any;
  type: string;
  title: string;
  link: {
    path: string;
    title: string;
  };
};

const Datatable = ({ columns, rows, type, link, title }: DatatabelProps) => {
  const [data, setData] = useState(rows);

  const handleDelete = (id: number) => {
    setData(data.filter((item: any) => item.id !== id));
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
          <Link to={link.path} className="link">
            {link.title}
          </Link>
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
          checkboxSelection
        />
      </div>
    </>
  );
};

export default Datatable;
