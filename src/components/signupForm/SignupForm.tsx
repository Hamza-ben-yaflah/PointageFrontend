import * as React from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import PackageModal from "./PackageModal";
import SignupClient from "./SignupClient";
import SignupOrganization from "./SignupOrganization";
import { SelectChangeEvent } from "@mui/material/Select";

const theme = createTheme();

const SignupForm = () => {
  const [pack, setPack] = useState("");
  const [delay, setDelay] = useState("");
  const [price, setPrice] = useState("200");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

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
          <SignupOrganization Item={Item} />
        </Grid>
        <Grid item xs={6}>
          <SignupClient Item={Item} />
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

      <PackageModal
        handleClose={handleClose}
        open={open}
        style={style}
        pack={pack}
        handleChangePack={handleChangePack}
        delay={delay}
        handleChangeDelay={handleChangeDelay}
      />
    </ThemeProvider>
  );
};

export default SignupForm;
