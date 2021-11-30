import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Header from "./header";
import Body from "./body";
import Complete from "./complete";
import { useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../redux/slice";

const steps = [
  {
    label: "Introduce us to your business.",
    description: `Select the option that best describes your business.`,
  },
  {
    label: "Tell us a bit more about your business.",
    description:
      "This information gives us the information needed to provide you with the best policy.",
  },
  {
    label: "What is the best way to get a hold of you?",
    description: `We want to send you detailed information about each recommended policy and what they can do for you.`,
  },
];

export default function Main() {
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    dispatch(increment());
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    dispatch(decrement());
  };

  const handleReset = () => {
    setActiveStep(0);
    dispatch(incrementByAmount(-3));
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "0 auto" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <Header step={step} index={index} />

            <Body
              handleNext={handleNext}
              handleBack={handleBack}
              steps={steps}
              index={index}
              step={step}
            />
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && <Complete handleReset={handleReset} />}
    </Box>
  );
}
