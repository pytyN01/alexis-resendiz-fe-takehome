import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import ActionButtons from "./buttons";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import React from "react";

export default function Body({ user, handleChange, step, index }) {
  return (
    <React.Fragment>
      <StepContent>
        <Typography>{step.description}</Typography>
        {index === 0 && (
          <Step1 user={user} handleChange={(x) => handleChange(x)} />
        )}

        {index === 1 && (
          <Step2 user={user} handleChange={(x) => handleChange(x)} />
        )}

        {index === 2 && (
          <Step3 user={user} handleChange={(x) => handleChange(x)} />
        )}

        <ActionButtons user={user} index={index} />
      </StepContent>
    </React.Fragment>
  );
}
