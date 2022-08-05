import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import Divider from "@mui/material/Divider";

function Copyright({ price, handleClose }: any) {
  return (
    <Box sx={{ mt: 4, display: "flex", justifyContent: "space-around" }}>
      <Typography sx={{ mt: 1 }}>Price</Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { width: "10ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          variant="standard"
          value={`${price} dt`}
        />
      </Box>
      <Button variant="contained" disableElevation onClick={handleClose}>
        Confirm
      </Button>
    </Box>
  );
}

const theme = createTheme();

const SignupForm = () => {
  const [sex, setSexge] = useState("");
  const [fileClient, setFileClient] = useState<any>();
  const [fileShop, setFileShop] = useState<any>();
  const [pack, setPack] = useState("");
  const [delay, setDelay] = useState("");
  const [price, setPrice] = useState("200");
  const [showPrice, setShowPrice] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChangeDelay = (event: SelectChangeEvent) => {
    setDelay(event.target.value);
  };
  console.log(pack, delay, price);

  const calculatePrice = () => {
    if (pack == "50" && delay == "month") {
      setPrice("500");
    }
    if (pack == "30" && delay == "month") {
      setPrice("200");
    }
    if (pack == "30" && delay == "year") {
      setPrice("1000");
    }
  };

  const handleChangePack = (event: SelectChangeEvent) => {
    setPack(event.target.value);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSexge(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

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
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ mb: 1 }}>
        <Toolbar sx={{ backgroundColor: "#1976d2", color: "#fff" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SidratSoft
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              CUSTOMER
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
                        console.log(fileShop);
                        console.log(fileClient);
                      }}
                      style={{ display: "none" }}
                    />
                  </div>
                </Box>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
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
                        autoFocus
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
                    <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={6}>
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
                  onSubmit={handleSubmit}
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
        </Grid>
      </Grid>
      <Box
        sx={{
          marginTop: 8,

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid>
          <Grid item>
            <Link href="#" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => setOpen(true)}
        >
          Confirm
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
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
            Choose your Package
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "35ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Typography sx={{ mb: 2 }}>Number of employees :</Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped-select">Package</InputLabel>
              <Select
                defaultValue=""
                id="grouped-select"
                label="Grouping"
                value={pack}
                onChange={handleChangePack}
              >
                <ListSubheader>Gold</ListSubheader>
                <MenuItem value={50}>50</MenuItem>

                <ListSubheader>Silver</ListSubheader>
                <MenuItem value={30}>30</MenuItem>
              </Select>
            </FormControl>
            <Typography sx={{ mb: 2 }}>Delay of Package :</Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped-select">Delay</InputLabel>
              <Select
                defaultValue=""
                id="grouped-select"
                label="Grouping"
                value={delay}
                onChange={handleChangeDelay}
              >
                <MenuItem value="month">month</MenuItem>
                <MenuItem value="3 month">3 months</MenuItem>
                <MenuItem value="year">Year</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            variant="contained"
            disableElevation
            sx={{ ml: 15, mt: 5 }}
            onClick={() => setShowPrice(true)}
          >
            Validate
          </Button>
          <Divider sx={{ borderColor: "black", mt: 4 }} />
          {showPrice ? (
            <Copyright price={price} handleClose={() => setOpen(false)} />
          ) : null}
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default SignupForm;
