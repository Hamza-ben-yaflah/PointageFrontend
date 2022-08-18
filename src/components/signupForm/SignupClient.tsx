import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const SignupClient = ({ Item }: any) => {
  const [fileClient, setFileClient] = useState<any>();
  const [sex, setSexge] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setSexge(event.target.value);
  };
  return (
    <>
      <Item>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          CLIENT
        </Typography>
        <Container component="main">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="cellWithImg">
                <img
                  className="cellImg"
                  src={
                    fileClient
                      ? URL.createObjectURL(fileClient)
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  alt=""
                />
              </div>
              <div className="formInput">
                <label htmlFor="file">
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    e.target?.files && setFileClient(e.target.files[0]);

                    console.log(fileClient);
                  }}
                  style={{ display: "none" }}
                />
              </div>
            </Box>
            <Box
              component="form"
              noValidate
              // onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="cin"
                    label="CIN"
                    autoComplete="cin"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="phonenumber"
                    label="PhoneNumber"
                    autoComplete="phoneNumber"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    sx={{
                      m: 1,
                      minWidth: 300,
                    }}
                  >
                    <InputLabel id="demo-simple-select-helper-label">
                      Sex
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={sex}
                      label="Sex"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Men"}>Men</MenuItem>
                      <MenuItem value={"Woman"}>Woman</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Item>
    </>
  );
};

export default SignupClient;
