import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { userColumns, userRows } from "../../datatablesource";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { ChangeEvent, useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const ListUsers = () => {
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<any>();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
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
          rows={userRows}
          type="user"
          title="Users list"
          link={{ title: "Add User", path: "/users/new" }}
          handleOpen={handleOpen}
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
              New User
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
              Ajouter
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default ListUsers;
