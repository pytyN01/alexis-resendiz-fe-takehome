import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Header from "./header";
import Body from "./body";
import Step4 from "./step4";

import { useSelector } from "react-redux";

export default function Main() {
  const ActiveStep = useSelector((state) => state.counter.ActiveStep);
  const Steps = useSelector((state) => state.data.Steps);

  const [user, setUser] = React.useState({
    Business: "",
    Industry: "",
    Location: "",
    Sales: "",
    Payroll: "",
    Employees: "",
    Name: "",
    Email: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setUser({
      ...user,
      [evt.target.name]: value,
    });
  };

  const reset = (x) => {
    setUser(x);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "0 auto" }}>
      <Stepper activeStep={ActiveStep} orientation="vertical">
        {Steps.map((step, index) => (
          <Step key={step.label}>
            <Header step={step} index={index} />
            <Body
              handleChange={(x) => handleChange(x)}
              index={index}
              user={user}
              step={step}
            />
          </Step>
        ))}
      </Stepper>
      {ActiveStep === Steps.length && <Step4 reset={(x) => reset(x)} />}
    </Box>
  );
}
