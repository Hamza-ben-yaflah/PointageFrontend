import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid/Grid";
import InputLabel from "@mui/material/InputLabel";
import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { StepWizardChildProps } from "react-step-wizard";

interface ISubscription extends Partial<StepWizardChildProps> {
  Item: any;
  handleForm: (event: any) => void;
  packs: any[];
}

const PackageForm = ({
  Item,
  handleForm,
  previousStep,
  packs,
}: ISubscription) => {
  const [pack, setPack] = useState<string>();
  const [duration, setDuration] = useState<string>();

  const handleSubmit = () => {
    const price = 200;
    handleForm({ pack, duration, price });
  };

  const handleChangePack = (event: SelectChangeEvent) => {
    setPack(event.target.value as string);
  };

  const handleChangeDuration = (event: SelectChangeEvent) => {
    setDuration(event.target.value as string);
  };

  return (
    <>
      <Item>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          SUBSCRIPTION
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
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={24}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="grouped-select">Package</InputLabel>
                    <Select
                      defaultValue=""
                      id="grouped-select"
                      label="Grouping"
                      name="pack"
                      onChange={handleChangePack}
                    >
                      <ListSubheader>{50}</ListSubheader>
                      <MenuItem value={50}>60</MenuItem>
                      {packs.map((pack) => (
                        <div>
                          <ListSubheader>{pack.name}</ListSubheader>
                          <MenuItem value={pack.id}>
                            {pack.users_number}
                          </MenuItem>
                        </div>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={24} sm={24}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="grouped-select">Duration</InputLabel>
                    <Select
                      defaultValue=""
                      id="grouped-select"
                      label="Grouping"
                      name="duration"
                      onChange={handleChangeDuration}
                    >
                      <MenuItem value="month">month</MenuItem>
                      <MenuItem value="3 month">3 months</MenuItem>
                      <MenuItem value="year">Year</MenuItem>
                    </Select>
                  </FormControl>
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
                    color="success"
                    sx={{ mt: 3, mb: 2 }}
                    // href="/login"
                  >
                    Confirm
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

export default PackageForm;
