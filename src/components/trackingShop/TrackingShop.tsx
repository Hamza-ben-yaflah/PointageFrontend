import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";

const TrackingShop = () => {
  const userColumns = [
    // {
    //   field: "id",
    //   headerName: "ID",
    //   height: 50,
    //   width: 100,
    // },
    {
      field: "date",
      headerName: "Date",

      height: 50,
      width: 200,
    },

    {
      field: "name",
      headerName: "Name",
      height: 50,
      width: 230,
    },

    {
      field: "entrer",
      headerName: "Entrer",
      height: 50,
      width: 200,
    },
    {
      field: "sortie",
      headerName: "Sortie",
      height: 50,
      width: 200,
    },
  ];

  const userRows = [
    {
      id: 1,
      date: "25/11/2014",
      name: "Fathi",
      entrer: "9:00",
      sortie: "19:00",
    },
    {
      id: 2,
      date: "25/11/2019",
      name: "Mongi",
      entrer: "9:00",
      sortie: "19:00",
    },
    {
      id: 3,
      date: "25/11/2014",
      name: "Ali",
      entrer: "9:00",
      sortie: "16:00",
    },
    {
      id: 4,
      date: "25/11/2014",
      name: "Salah",
      entrer: "10:00",
      sortie: "19:00",
    },
    {
      id: 5,
      date: "25/11/2020",
      name: "Fathi",
      entrer: "9:00",
      sortie: "19:00",
    },
    {
      id: 6,
      date: "25/11/2014",
      name: "Salah",
      entrer: "9:00",
      sortie: "19:00",
    },
    {
      id: 7,
      date: "25/11/2014",
      name: "Salah",
      entrer: "9:00",
      sortie: "19:00",
    },
  ];

  return (
    <div>
      <div className="datagrid">
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
          rows={userRows}
          columns={userColumns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          components={{ Toolbar: GridToolbar }}
        />
      </div>
    </div>
  );
};

export default TrackingShop;
