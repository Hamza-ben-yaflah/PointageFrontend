import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box/Box";
import Modal from "@mui/material/Modal/Modal";
import Paper from "@mui/material/Paper";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import StepWizard from "react-step-wizard";
import { calculateEndsAt, formatDate } from "../../utils/dates";
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

export interface IPackage {
  id: string;
  name: string;
  price: number;
  usersNumber: number;
}

const theme = createTheme();

const packages: IPackage[] = [
  { id: "1", name: "silver", price: 23, usersNumber: 50 },
  { id: "2", name: "silver", price: 23, usersNumber: 60 },
];

const Signup = () => {
  const [userState, setUserState] = useState<UserDTO>();
  const [clientInfo, setClientInfo] =
    useState<Omit<UserDTO, "address" | "subscription" | "organizationName">>();
  const [organizationInfo, setOrganizationInfo] =
    useState<Pick<UserDTO, "organizationName" | "address">>();
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClientInfo = (
    event: React.FormEvent<HTMLFormElement>,
    sex: string
  ) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setClientInfo({
      email: data.get("email")!.toString(),
      firstName: data.get("firstName")!.toString(),
      lastName: data.get("lastName")!.toString(),
      cin: data.get("cin")!.toString().toString(),
      password: data.get("password")!.toString().toString(),
      phoneNumber: data.get("phoneNumber")!.toString(),
      sex,
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

  const handleSubscriptionInfo = ({ packageId, duration, price }: any) => {
    const subscriptionStartsAtDate = new Date();
    setUserState({
      ...userState!,
      subscription: {
        packageId,
        price: price,
        startsAt: formatDate(subscriptionStartsAtDate),
        endsAt: calculateEndsAt(subscriptionStartsAtDate, duration),
      },
    });
    handleOpenModal();
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
        setUserState({ ...userState!, ...clientInfo });
        break;

      case 2:
        setUserState({ ...userState!, ...organizationInfo });
        break;

      default:
        break;
    }
  };

  const handleSignup = async () => {
    await fetch(`http://localhost:5000/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      mode: "cors",
      body: JSON.stringify(userState),
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const stylePopup = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 500,
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
          packages={packages}
          Item={Item}
          handleForm={handleSubscriptionInfo}
          hashKey={"subscription"}
        />
      </StepWizard>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylePopup}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Demande
          </Typography>

          <Box>
            {JSON.stringify(userState, undefined, 9)}
            <button className="btn-demande" onClick={handleSignup}>
              Confirm
            </button>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default Signup;
