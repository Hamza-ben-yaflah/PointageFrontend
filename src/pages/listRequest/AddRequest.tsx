import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

const AddRequest = ({
  handleSubmitAdd,
  style,
  row,
  open,
  handleClose,
  t,
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
            {t("newDemande")}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmitAdd}
            sx={{
              "& > :not(style)": { m: 1, width: "35ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              variant="outlined"
            />
            <TextField
              required
              id="type"
              name="type"
              label="Type"
              variant="outlined"
              defaultValue={row?.type}
            />
            <TextField
              required
              id="status"
              name="status"
              label="Status"
              variant="outlined"
            />
            <TextField
              required
              id="date"
              name="date"
              label="Date"
              variant="outlined"
            />
            <TextField
              required
              id="dateTreatment"
              name="dateTreatment"
              label="Date of Treatement"
              variant="outlined"
            />
            <Button
              variant="contained"
              type="submit"
              disableElevation
              sx={{ ml: 35, mt: 5 }}
            >
              {t("Add")}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AddRequest;
