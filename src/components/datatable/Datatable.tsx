import Button from "@mui/material/Button";
import { DataGrid, frFR } from "@mui/x-data-grid";
import { clientR, Demande, MagasinR, userR } from "../../datatablesource";
import { userC } from "../../pages/listEmployee/ListEmployee";
import "./datatable.scss";

type DatatabelProps = {
  columns: userC[];
  rows: (userR | Demande | MagasinR | clientR)[];
  type: string;
  title: string;
  link?: {
    path: string;
    title: string;
  };
  handleOpen?: (e: any) => void;
  handleEdit?: (id: number) => void;
  handleDelete?: (id: number) => void;
  // handleUpdate() :void;
};

const Datatable = ({
  columns,
  rows,
  type,
  link,
  title,
  handleOpen,
  handleEdit,
  handleDelete,
}: // handleUpdate
DatatabelProps) => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: any) => {
        return (
          <div className="cellAction">
            <div
              className="viewButton"
              onClick={() => handleEdit && handleEdit(params.row.id)}
            >
              Edit
            </div>

            <div
              className="deleteButton"
              onClick={() => handleDelete && handleDelete(params.row.id)}
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
          {link ? (
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button className="link" onClick={handleOpen}>
                {link.title}
              </Button>
            </div>
          ) : null}
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
          rows={rows || []}
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
