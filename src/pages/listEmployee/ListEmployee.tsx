import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { userR, userRows } from "../../datatablesource";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { ChangeEvent, ReactElement, useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Link } from "react-router-dom";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useTranslation } from "react-i18next";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

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
  const [checkedStatus, setCheckedStatus] = useState<boolean>();
  const [status, setStatus] = useState("");
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
      width: 100,
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
    setOpenEdit(false);
  };
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const handelChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedStatus(event.target.checked);
    if (row?.status === "active") {
      setRow({ ...row, status: "passive" });
    }
  };

  const handleEdit = (id: number) => {
    setRow(userRows.find((el) => el.id === id));
    if (row?.status === "passive") {
      setCheckedStatus(true);
    }
    setOpenEdit(true);
  };

  const handleDelete = (id: number) => {
    setDataRow(dataRow.filter((el) => el.id !== id));
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ mb: 2 }}
            >
              {t("newEmployee")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="cellWithImg">
                <img
                  className="cellImg"
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  alt=""
                />
              </div>
              <div className="formInput">
                <label htmlFor="file">
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    e.target?.files && setFile(e.target.files[0])
                  }
                  style={{ display: "none" }}
                />
              </div>
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "35ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                required
                id="outlined-basic"
                label="First name"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-basic"
                label="Last name"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-basic"
                label="Adress"
                variant="outlined"
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Situation</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Situation"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button variant="contained" disableElevation sx={{ ml: 35, mt: 5 }}>
              {t("Add")}
            </Button>
          </Box>
        </Modal>
        <Modal
          open={openEdit}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ mb: 2 }}
            >
              Edit Employee
            </Typography>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "35ch" },
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmitEdit}
            >
              <TextField
                required
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                variant="outlined"
                defaultValue={row?.phonenumber}
              />
              <TextField
                required
                id="shop"
                name="shop"
                label="Shop"
                variant="outlined"
                defaultValue={row?.shop}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={checkedStatus}
                    onChange={handelChangeCheck}
                  />
                }
                label="Change the status to passive"
              />
              <FormControlLabel
                control={<Switch />}
                label="Add to Superviseur List"
              />
              <Button
                type="submit"
                variant="contained"
                disableElevation
                sx={{ ml: 5, mt: 5 }}
              >
                Save
              </Button>
              <Button
                variant="contained"
                disableElevation
                sx={{ ml: 35, mt: 5 }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default List;
