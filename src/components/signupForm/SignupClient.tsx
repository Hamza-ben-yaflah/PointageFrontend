import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
const SignupClient = ({ Item }: any) => {
  const [fileShop, setFileShop] = useState<any>();
  return (
    <>
      <Item>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          SHOP
        </Typography>
        <Container component="main" sx={{ mb: 11 }}>
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
                    fileShop
                      ? URL.createObjectURL(fileShop)
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  alt=""
                />
              </div>
              <div className="formInput">
                <label htmlFor="fileShop">
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="fileShop"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    e.target?.files && setFileShop(e.target.files[0]);
                    console.log(fileShop);
                  }}
                  style={{ display: "none" }}
                />
              </div>
            </Box>
            <Box
              component="form"
              noValidate
              //   onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="shopname"
                    required
                    fullWidth
                    id="shopname"
                    label="shopname"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="City"
                    label="City"
                    name="City"
                    autoComplete="City"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="state"
                    label="State"
                    name="state"
                    autoComplete="state"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="PostalCode"
                    label="PostalCode"
                    type="PostalCode"
                    id="PostalCode"
                    autoComplete="PostalCode"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="country"
                    label="Country"
                    autoComplete="country"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="street"
                    label="Street"
                    autoComplete="street"
                  />
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
