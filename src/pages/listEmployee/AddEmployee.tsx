import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { ChangeEvent, useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@mui/material/Link";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const AddEmployee = ({
  age,
  style,
  row,
  open,
  handleClose,
  handleChange,
  t,
}: any) => {
  const [file, setFile] = useState<any>();
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {" "}
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
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
            />

            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
            />
            <TextField required fullWidth id="cin" label="CIN" name="cin" />
            <TextField
              required
              fullWidth
              id="privatephone"
              label="Private Phone"
              name="privatephone"
            />
            <TextField
              required
              fullWidth
              id="workphone"
              label="Work Phone"
              name="workphone"
            />
            <FormControlLabel
              control={<Switch />}
              label="Add to Superviseur List"
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                cursor: "pointer",
              }}
            >
              {" "}
              <Link variant="body2" onClick={() => setShowMore(!showMore)}>
                Show More
              </Link>
            </Box>

            {showMore ? (
              <>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                <TextField
                  required
                  fullWidth
                  name="cin"
                  label="CIN"
                  autoComplete="cin"
                />
                <TextField
                  required
                  fullWidth
                  name="phonenumber"
                  label="PhoneNumber"
                  autoComplete="phoneNumber"
                />
                <TextField
                  required
                  fullWidth
                  name="phonenumber"
                  label="PhoneNumber"
                  autoComplete="phoneNumber"
                />
                <TextField
                  required
                  fullWidth
                  name="phonenumber"
                  label="PhoneNumber"
                  autoComplete="phoneNumber"
                />
                <TextField
                  required
                  fullWidth
                  name="phonenumber"
                  label="PhoneNumber"
                  autoComplete="phoneNumber"
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Situation
                  </InputLabel>
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
              </>
            ) : null}

            <Button variant="contained" disableElevation sx={{ ml: 35, mt: 5 }}>
              {t("Add")}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AddEmployee;
