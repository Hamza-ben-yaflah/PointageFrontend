import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import "./Employee.scss";
import {
  DateRangePicker,
  DateRange,
} from "@mui/x-date-pickers-pro/DateRangePicker";
const EmployeeId = () => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 600,
    bgcolor: "background.paper",

    boxShadow: 24,
    p: 4,
  };
  const stylePopup = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const [valuee, setValuee] = React.useState<DateRange<Date>>([null, null]);

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  const [age, setAge] = React.useState("");

  const handleChangeInput = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Box sx={style}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Bonjour FATHI
          </Typography>
          <div className="cellWithImg">
            <img className="cellImg" src="/images/imag.jpg" alt="avatar" />
          </div>
        </Box>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "40vh",
          }}
        >
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            sx={{ width: "100" }}
          >
            <TimePicker
              ampm={false}
              className="size"
              label="Time"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  multiline
                  rows={2}
                  {...params}
                  sx={{ m: 1, width: "50ch", color: "white" }}
                />
              )}
            />
          </LocalizationProvider>
          <div className="btn-container">
            <Link to="/login/employee" style={{ textDecoration: "none" }}>
              <button className="btn-entre">Entrer</button>
            </Link>
            <Link to="#" style={{ textDecoration: "none" }}>
              <button className="btn-sortie">Sortie</button>
            </Link>
            <Link to="#" style={{ textDecoration: "none" }}>
              <button className="btn-demande" onClick={handleOpenModal}>
                Demande
              </button>
            </Link>
          </div>
          <Box>
            <Stack spacing={2}>
              <Alert
                sx={{
                  color: "rgb(95, 33, 32)",
                }}
                severity="error"
              >
                Demande de sortie — Rejected!
              </Alert>
              <Alert severity="info">Demande de maladie — En cours!</Alert>
              <Alert severity="success">Demande de congé — Accpted!</Alert>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylePopup}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Demande
          </Typography>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "40vh",
            }}
          >
            <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
              <InputLabel id="demo-select-small">Type</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChangeInput}
              >
                <MenuItem value={10}>Congé</MenuItem>
                <MenuItem value={20}>Maladie</MenuItem>
                <MenuItem value={30}>Avance</MenuItem>
                <MenuItem value={30}>Sortie</MenuItem>
              </Select>
            </FormControl>
            <Stack
              component="form"
              noValidate
              spacing={3}
              sx={{ mt: 2, mb: 1 }}
            >
              <TextField
                id="datetime-local"
                label="sortie"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Stack>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Typography sx={{ mt: 2, mb: 1 }}> </Typography>
              <DateRangePicker
                calendars={1}
                value={valuee}
                onChange={(newValue) => {
                  setValuee(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <TextField {...startProps} />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} />
                  </React.Fragment>
                )}
              />
            </LocalizationProvider>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { mt: 2, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Montant"
                variant="outlined"
              />
            </Box>
          </Box>
          <Box>
            <button className="btn-demande" onClick={handleClose}>
              Confirm
            </button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default EmployeeId;
