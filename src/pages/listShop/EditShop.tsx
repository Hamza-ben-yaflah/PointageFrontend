import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";

const EditShop = ({ handleSubmitEdit, style, row, open, handleClose }: any) => {
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
              id="shopname"
              name="shopname"
              label="Shop Name"
              variant="outlined"
              defaultValue={row?.name}
            />
            <TextField
              required
              id="adresse"
              name="adresse"
              label="Adresse"
              variant="outlined"
              defaultValue={row?.adresse}
            />
            <TextField
              required
              id="phonenumber"
              name="phonenumber"
              label="Phone Number"
              variant="outlined"
              defaultValue={row?.phonenumber}
            />
            <TextField
              required
              id="number"
              name="number"
              label="Number of employees"
              variant="outlined"
              defaultValue={row?.nombre}
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

export default EditShop;
