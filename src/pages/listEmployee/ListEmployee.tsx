import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { userR, userRows } from "../../datatablesource";
import { SelectChangeEvent } from "@mui/material/Select";
import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useTranslation } from "react-i18next";
import EditEmployee from "./EditEmployee";
import AddEmployee from "./AddEmployee";

export interface userC {
  field: string;
  headerName: string;
  width: number;
  renderCell?: (params?: any) => ReactElement;
}

const List = () => {
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const [row, setRow] = useState<any>();
  const [file, setFile] = useState<any>();
  const [dataRow, setDataRow] = useState<userR[]>(userRows);
  const [openEdit, setOpenEdit] = useState(false);

  const { t } = useTranslation(["listemployee"]);

  const userColumns: userC[] = [
    {
      field: "id",
      headerName: t("id"),
      width: 70,
    },
    {
      field: "employee",
      headerName: t("employee"),
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              {params.row.username}
            </Link>
          </div>
        );
      },
    },
    {
      field: "shop",
      headerName: t("shop"),

      width: 230,
    },

    {
      field: "phonenumber",
      headerName: t("phonenumber"),

      width: 100,
    },
    {
      field: "notification",
      headerName: t("notification"),

      width: 160,
      renderCell: () => {
        return (
          <div>
            <NotificationsNoneOutlinedIcon />
          </div>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params: any) => {
        return (
          <div className="cellAction">
            <div>{dataRow.find((row) => row.id === params.row.id)?.status}</div>
            {params.row.status === "active" ? (
              <button
                className="deleteButton"
                onClick={() => handleDecision(params.row.id, "passive")}
              >
                P
              </button>
            ) : (
              <button
                className="viewButton"
                style={{ color: "green" }}
                onClick={() => handleDecision(params.row.id, "active")}
              >
                A
              </button>
            )}
          </div>
        );
      },
    },
  ];

  const handleSubmitEdit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const updatedEmployee: userR = {
      id: row.id,
      username: row.username,
      img: row.img,
      phonenumber: Number(data.get("phoneNumber")),
      shop: data.get("shop")?.toString()!,
      status: row.status,
    };
    const copyEmployee = userRows.map((obj) => {
      if (obj.id === row.id) {
        return updatedEmployee;
      }
      return obj;
    });
    setDataRow(copyEmployee);
    setOpenEdit(false);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const handleEdit = (id: number) => {
    setRow(userRows.find((el) => el.id === id));
    setOpenEdit(true);
  };

  const handleDelete = (id: number) => {
    setDataRow(dataRow.filter((el) => el.id !== id));
  };

  const handleDecision = (id: number, decision: string) => {
    const copyRequest = dataRow.map((obj) => {
      if (obj.id === id) {
        obj.status = decision;
      }
      return obj;
    });
    setDataRow(copyRequest);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
  };

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable
          columns={userColumns}
          rows={dataRow}
          type="user"
          title={t("employeeslist")}
          link={{ title: t("AddEmployee"), path: "/users/new" }}
          handleOpen={handleOpen}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
      <div>
        <AddEmployee
          style={style}
          row={row}
          open={open}
          handleClose={() => setOpen(false)}
          t={t}
          age={age}
          handleChange={handleChange}
        />

        <EditEmployee
          handleSubmitEdit={handleSubmitEdit}
          style={style}
          row={row}
          open={openEdit}
          handleClose={() => setOpenEdit(false)}
        />
      </div>
    </div>
  );
};

export default List;
