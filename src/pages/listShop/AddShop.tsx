import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { useTranslation } from "react-i18next";
const AddShop = ({ handleSubmitAdd, style, row, open, handleClose }: any) => {
  const { t } = useTranslation(["listMagasin"]);
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
            {t("newShop")}
          </Typography>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "35ch" },
            }}
            noValidate
            onSubmit={handleSubmitAdd}
            autoComplete="off"
          >
            <TextField
              required
              id="shopname"
              name="shopname"
              label="Shop Name"
              variant="outlined"
            />
            <TextField
              required
              id="adresse"
              name="adresse"
              label="Adresse"
              variant="outlined"
            />
            <TextField
              required
              id="phonenumber"
              name="phonenumber"
              label="Phone Number"
              variant="outlined"
            />
            <TextField
              required
              id="number"
              name="number"
              label="Number of employees"
              variant="outlined"
            />
            <Button
              variant="contained"
              disableElevation
              sx={{ ml: 35, mt: 5 }}
              type="submit"
            >
              {t("Add")}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AddShop;
