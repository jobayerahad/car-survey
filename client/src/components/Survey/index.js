import { useState } from "react";
import { Box, Container, Paper } from "@material-ui/core";

import UserInfo from "./Steps/UserInfo";
import CarOwn from "./Steps/CarOwn";
import CarColor from "./Steps/CarColor";

const ActiveComponent = ({ ComponentName, ...others }) => <ComponentName {...others} />;

const registerSteps = [UserInfo, CarOwn, CarColor];

const Survey = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = registerSteps.length;

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const [formData, setFormData] = useState({});
  const handleData = (data) => setFormData({ ...formData, ...data });

  console.log(formData);

  return (
    <Container component={Paper} maxWidth="md" disableGutters>
      <Box mt={5}>
        <ActiveComponent
          ComponentName={registerSteps[activeStep]}
          activeStep={activeStep}
          maxSteps={maxSteps}
          handleBack={handleBack}
          handleNext={handleNext}
          formData={formData}
          handleData={handleData}
        />
      </Box>
    </Container>
  );
};

export default Survey;
