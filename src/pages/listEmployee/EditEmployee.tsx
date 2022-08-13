import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Modal from "@mui/material/Modal";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";

const EditEmployee = ({
  handleSubmitEdit,
  style,
  row,
  open,
  handleClose,
}: any) => {
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

            <Button
              type="submit"
              variant="contained"
              disableElevation
              sx={{ ml: 5, mt: 5 }}
            >
              Save
            </Button>
            <Button variant="contained" disableElevation sx={{ ml: 35, mt: 5 }}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default EditEmployee;
