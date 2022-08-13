import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

function Copyright({ price, handleClose }: any) {
  return (
    <Box sx={{ mt: 4, display: "flex", justifyContent: "space-around" }}>
      <Typography sx={{ mt: 1 }}>Price</Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { width: "10ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          variant="standard"
          value={`${price} dt`}
        />
      </Box>
      <Button variant="contained" disableElevation onClick={handleClose}>
        Confirm
      </Button>
    </Box>
  );
}
const PackageModal = ({
  open,
  handleClose,
  style,
  pack,
  handleChangePack,
  delay,
  handleChangeDelay,
}: any) => {
  const [showPrice, setShowPrice] = useState(false);
  const [price, setPrice] = useState("200");
  return (
    <>
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
            Choose your Package
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "35ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Typography sx={{ mb: 2 }}>Number of employees :</Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped-select">Package</InputLabel>
              <Select
                defaultValue=""
                id="grouped-select"
                label="Grouping"
                value={pack}
                onChange={handleChangePack}
              >
                <ListSubheader>Gold</ListSubheader>
                <MenuItem value={50}>50</MenuItem>

                <ListSubheader>Silver</ListSubheader>
                <MenuItem value={30}>30</MenuItem>
              </Select>
            </FormControl>
            <Typography sx={{ mb: 2 }}>Delay of Package :</Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped-select">Delay</InputLabel>
              <Select
                defaultValue=""
                id="grouped-select"
                label="Grouping"
                value={delay}
                onChange={handleChangeDelay}
              >
                <MenuItem value="month">month</MenuItem>
                <MenuItem value="3 month">3 months</MenuItem>
                <MenuItem value="year">Year</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            variant="contained"
            disableElevation
            sx={{ ml: 15, mt: 5 }}
            onClick={() => setShowPrice(true)}
          >
            Validate
          </Button>
          <Divider sx={{ borderColor: "black", mt: 4 }} />
          {showPrice ? (
            <Copyright price={price} handleClose={handleClose} />
          ) : null}
        </Box>
      </Modal>
    </>
  );
};

export default PackageModal;
