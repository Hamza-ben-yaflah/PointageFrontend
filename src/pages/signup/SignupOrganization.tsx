import Box from "@mui/material/Box";
import Button from "@mui/material/Button/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { StepWizardChildProps } from "react-step-wizard";
import ImageUpload from "../../components/imageUpload/ImageUpload";

interface ISignupOrganization extends Partial<StepWizardChildProps> {
  Item: any;
  handleForm: (event: any) => void;
}

const SignupOrganization = ({
  Item,
  handleForm,
  nextStep,
  previousStep,
}: ISignupOrganization) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    handleForm(event);
    nextStep!();
  };

  return (
    <>
      <Item>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          ORGANIZATION
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
                    name="organizationName"
                    required
                    fullWidth
                    id="organizationName"
                    label="organizationName"
                    autoFocus
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
                <Grid item xs={24}>
                  <TextField
                    required
                    fullWidth
                    name="country"
                    label="Country"
                    autoComplete="country"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
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

export default SignupOrganization;
