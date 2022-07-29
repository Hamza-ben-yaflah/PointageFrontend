import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IndetificationCode from "../../components/identificationCode/IdentificationCode";

import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <>
      <Box>
        <AppBar position="static" sx={{ mb: 20 }}>
          <Toolbar sx={{ backgroundColor: "#1976d2", color: "#fff" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              SidratSoft
            </Typography>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button color="inherit">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <IndetificationCode />
      </Box>
    </>
  );
}
