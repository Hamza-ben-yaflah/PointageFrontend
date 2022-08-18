import Box from "@mui/material/Box";
import Button from "@mui/material/Button/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { StepWizardChildProps } from "react-step-wizard";
import ImageUpload from "../../components/imageUpload/ImageUpload";

interface ISignupClient extends Partial<StepWizardChildProps> {
  Item: any;
  handleForm: (
    event: React.FormEvent<HTMLFormElement> & { sex: string }
  ) => void;
}

const ClientForm = ({
  Item,
  handleForm,
  nextStep,
  previousStep,
  currentStep,
}: ISignupClient) => {
  const [sex, setSex] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setSex(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    handleForm({ ...event, sex });
    nextStep!();
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
            <ImageUpload />
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
                <Grid item sm={24}>
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
                <Grid item xs={12} sm={6}>
                  <Button
                    disabled={currentStep === 1}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => previousStep!()}
                  >
                    Previous
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Item>
    </>
  );
};

export default ClientForm;
