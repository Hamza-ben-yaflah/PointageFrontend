import AppBar from "@mui/material/AppBar";
import Paper from "@mui/material/Paper";
import { SelectChangeEvent } from "@mui/material/Select";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import StepWizard from "react-step-wizard";
import SignupPackage from "./PackageModal";
import SignupClient from "./SignupClient";
import SignupOrganization from "./SignupOrganization";

const theme = createTheme();

const Signup = () => {
  const [pack, setPack] = useState("");
  const [delay, setDelay] = useState("");
  const [userState, setUserState] = useState<any>();
  const [clientInfo, setClientInfo] = useState<any>();
  const [organizationInfo, setOrganizationInfo] = useState<any>();

  const handleChangeDelay = (event: SelectChangeEvent) => {
    setDelay(event.target.value);
  };

  const handleChangePack = (event: SelectChangeEvent) => {
    setPack(event.target.value);
  };

  const handleClientInfo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setClientInfo({ email: data.get("email") });
  };

  const handleOrganizationInfo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setOrganizationInfo({ organizationName: data.get("organizationName") });
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const onStepChange = (stepChange: {
    previousStep: number;
    activeStep: number;
  }) => {
    switch (stepChange.previousStep) {
      case 1:
        setUserState({ ...userState, ...clientInfo });
        break;

      case 2:
        setUserState({ ...userState, ...organizationInfo });
        break;

      default:
        break;
    }
    console.log(userState);
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

      <StepWizard onStepChange={onStepChange} isHashEnabled={true}>
        <SignupClient
          Item={Item}
          handleForm={handleClientInfo}
          hashKey={"client"}
        />
        <SignupOrganization
          Item={Item}
          handleForm={handleOrganizationInfo}
          hashKey={"organization"}
        />
        <SignupPackage
          pack={pack}
          handleChangePack={handleChangePack}
          delay={delay}
          handleChangeDelay={handleChangeDelay}
          hashKey={"package"}
        />
      </StepWizard>
    </ThemeProvider>
  );
};

export default Signup;
