import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";

const EditClient = ({
  style,
  row,
  open,
  handleClose,
  handleSubmitEdit,
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
            Edit Shop
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmitEdit}
            sx={{
              "& > :not(style)": { m: 1, width: "35ch" },
            }}
            noValidate
          >
            <TextField
              required
              id="organizationName"
              name="organizationName"
              label="Organization Name"
              variant="outlined"
              defaultValue={row?.organizationName}
            />
            <TextField
              required
              id="clientName"
              name="clientName"
              label="Client Name"
              variant="outlined"
              defaultValue={row?.clientName}
            />
            <TextField
              required
              id="phonenumber"
              name="phonenumber"
              label="Phone Number"
              variant="outlined"
              defaultValue={row?.phonenumber}
            />

            <Button
              type="submit"
              disableElevation
              sx={{ mr: 1 }}
              className="btn"
            >
              Save
            </Button>
            <Button variant="contained" disableElevation onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default EditClient;
