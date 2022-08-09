import "./chart.scss";

import { DataGrid } from "@mui/x-data-grid";

type ChartProps = {
  title: string;
};

const Chart = ({ title }: ChartProps) => {
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
      field: "type",
      headerName: "Type",
      height: 50,
      width: 230,
    },

    {
      field: "status",
      headerName: "Status",
      height: 50,
      width: 200,
    },
  ];

  const userRows = [
    {
      id: 1,
      date: "25/11/2014",
      type: "sortie",
      status: "En cours",
    },
    {
      id: 2,
      date: "25/11/2019",
      type: "avance",
      status: "Accepted",
    },
  ];

  return (
    <div className="chart">
      <div className="title">{title}</div>
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
        hideFooterPagination
      />
    </div>
  );
};

export default Chart;
