import AppBar from "@mui/material/AppBar";
import Paper from "@mui/material/Paper";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import StepWizard from "react-step-wizard";
import ClientForm from "./ClientForm";
import OrganizationForm from "./OrganizationForm";
import PackageForm from "./PackageForm";

interface UserDTO {
  firstName: string;
  lastName: string;
  cin: string;
  organizationName: string;
  phoneNumber: string;
  sex: string;
  subscription: {
    price: number;
    startsAt: string;
    endsAt: string;
    packageId: string;
  };
  address: {
    country: string;
    state: string;
  };
  email: string;
  password: string;
}

const theme = createTheme();

const Signup = () => {
  const [userState, setUserState] = useState<UserDTO>();
  const [clientInfo, setClientInfo] =
    useState<Omit<UserDTO, "address" | "subscription" | "organizationName">>();
  const [organizationInfo, setOrganizationInfo] =
    useState<Pick<UserDTO, "organizationName" | "address">>();

  const handleClientInfo = (
    event: React.FormEvent<HTMLFormElement> & { sex: string }
  ) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setClientInfo({
      email: data.get("email")!.toString(),
      firstName: data.get("firstName")!.toString(),
      lastName: data.get("lastName")!.toString(),
      cin: data.get("cin")!.toString().toString(),
      password: data.get("password")!.toString().toString(),
      phoneNumber: data.get("PhoneNumber")!.toString(),
      sex: data.get("sex")!.toString(),
    });
  };

  const handleOrganizationInfo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setOrganizationInfo({
      organizationName: data.get("organizationName")!.toString(),
      address: {
        country: data.get("country")!.toString(),
        state: data.get("state")!.toString(),
      },
    });
  };

  const handleSubscriptionInfo = ({ pack, duration, price }: any) => {
    setUserState({
      ...userState!,
      subscription: {
        packageId: pack,
        price: price,
        startsAt: duration,
        endsAt: duration,
      },
    });
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const packs = [
    { id: "1", name: "silver", price: 23, users_number: 50 },
    { id: "1", name: "silver", price: 23, users_number: 50 },
  ];

  useEffect(() => {
    console.log(userState);
  }, [userState]);

  const onStepChange = (stepChange: {
    previousStep: number;
    activeStep: number;
  }) => {
    switch (stepChange.previousStep) {
      case 1:
        setUserState({ ...userState!, ...clientInfo });
        break;

      case 2:
        setUserState({ ...userState!, ...organizationInfo });
        break;

      default:
        break;
    }
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
        <ClientForm
          Item={Item}
          handleForm={handleClientInfo}
          hashKey={"client"}
        />
        <OrganizationForm
          Item={Item}
          handleForm={handleOrganizationInfo}
          hashKey={"organization"}
        />
        <PackageForm
          packs={packs}
          Item={Item}
          handleForm={handleSubscriptionInfo}
          hashKey={"subscription"}
        />
      </StepWizard>
    </ThemeProvider>
  );
};

export default Signup;
