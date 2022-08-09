import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./tracking.scss";

const TrackingEmployee = () => {
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
      field: "shop",
      headerName: "Shop",
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
      shop: "Bardo",
      entrer: "9:00",
      sortie: "19:00",
    },
    {
      id: 2,
      date: "25/11/2019",
      shop: "Bardo",
      entrer: "9:00",
      sortie: "19:00",
    },
    {
      id: 3,
      date: "25/11/2014",
      shop: "Bardo",
      entrer: "9:00",
      sortie: "16:00",
    },
    {
      id: 4,
      date: "25/11/2014",
      shop: "Bardo",
      entrer: "10:00",
      sortie: "19:00",
    },
    {
      id: 5,
      date: "25/11/2020",
      shop: "Bardo",
      entrer: "9:00",
      sortie: "19:00",
    },
    {
      id: 6,
      date: "25/11/2014",
      shop: "Bardo",
      entrer: "9:00",
      sortie: "19:00",
    },
    {
      id: 7,
      date: "25/11/2014",
      shop: "Bardo",
      entrer: "9:00",
      sortie: "19:00",
    },
  ];

  return (
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
  );
};

export default TrackingEmployee;
