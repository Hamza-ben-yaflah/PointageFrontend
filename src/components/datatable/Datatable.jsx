import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = ({ Columns, Rows, type }) => {
  const [data, setData] = useState(Rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
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
      {type === "user" ? (
        <div className="datatable">
          <div className="datatableTitle">
            Employee list
            <Link to="/users/new" className="link">
              Add Employee
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
            columns={Columns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </div>
      ) : type === "Magasin" ? (
        <div className="datatable">
          <div className="datatableTitle">
            Magasin list
            <Link to="/users/new" className="link">
              Add Magasin
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
            columns={Columns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </div>
      ) : (
        <div className="datatable">
          <div className="datatableTitle">
            Demande list
            <Link to="/users/new" className="link">
              Add Demande
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
            columns={Columns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </div>
      )}
    </>
  );
};

export default Datatable;
