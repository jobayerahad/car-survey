import { useForm, Controller } from "react-hook-form";
import PropTypes from "prop-types";
import Stepper from "../Stepper";
import { Box, FormHelperText, Grid, TextField, Typography } from "@material-ui/core";

const CarColor = ({ maxSteps, activeStep, handleNext, handleData }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const hasErrors = Object.keys(errors).length !== 0;

  const onSubmit = (data) => {
    handleData(data);
    handleNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box padding={3}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Car Information
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="carColor"
              control={control}
              defaultValue=""
              rules={{ required: "Please tell us your name" }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  id="user-name"
                  label="What is the color of your car?"
                  value={value}
                  onChange={onChange}
                  fullWidth
                />
              )}
            />

            {errors?.carColor && (
              <FormHelperText id="user-name" error>
                {errors?.carColor?.message}
              </FormHelperText>
            )}
          </Grid>
        </Grid>
      </Box>

      <Stepper maxSteps={maxSteps} activeStep={activeStep} handleNext={handleNext} hasErrors={hasErrors} />
    </form>
  );
};

CarColor.propTypes = {
  maxSteps: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleData: PropTypes.func.isRequired,
};

export default CarColor;
