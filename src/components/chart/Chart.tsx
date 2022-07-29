import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DataGrid } from "@mui/x-data-grid";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

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
