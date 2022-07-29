import Sidebar from "../../components/sidebar/Sidebar";
import "./listMagasin.scss";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { MagasinColumns, MagasinRows } from "../../datatablesource";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const ListMagasin = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          columns={MagasinColumns}
          rows={MagasinRows}
          type="Magasin"
          title="Magasin List"
          link={{ title: "Add Magasin", path: "/users/new" }}
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
              New Shop
            </Typography>
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

export default ListMagasin;
