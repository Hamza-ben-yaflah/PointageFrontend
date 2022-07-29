import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./identificationCode.scss";
import NumPad from "react-numpad";
import { useState } from "react";
import KeyboardIcon from "@mui/icons-material/Keyboard";

export default function IdentificationCode() {
  const [value, setValue] = useState<number>();

  return (
    <div className="wrap">
      <Container component="main" maxWidth="xs" className="container">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "40vh",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#ADD8E6" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Indetification
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                name="code"
                type="code"
                id="code"
                autoComplete="current-password"
                value={value}
              />
              <NumPad.Number onChange={(value: number) => setValue(value)}>
                <KeyboardIcon color="primary" fontSize="large" sx={{ ml: 1 }} />
              </NumPad.Number>
            </Box>
            <Link to="/employee" style={{ textDecoration: "none" }}>
              <button className="button-22">OK</button>
            </Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
