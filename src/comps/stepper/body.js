import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import ActionButtons from "./buttons";
import Box from "@mui/material/Box";
import * as React from "react";

const Industries = [
  {
    value: "10537",
    label: "Plumber",
  },
  {
    value: "10391",
    label: "Software developer",
  },
  {
    value: "10415",
    label: "Lawyer",
  },
  {
    value: "10109",
    label: "Handyman",
  },
];

const Options = [
  {
    value: "50000",
    label: "$50k",
  },
  {
    value: "75000",
    label: "$75k",
  },
  {
    value: "100000",
    label: "$100k",
  },
  {
    value: "150000",
    label: "$150k",
  },
  {
    value: "200000",
    label: "$200k",
  },
];

export default function Body({ steps, handleNext, handleBack, step, index }) {
  const [info, setInfo] = React.useState({
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
    setInfo({
      ...info,
      [evt.target.name]: value,
    });
  };

  return (
    <StepContent>
      <Typography>{step.description}</Typography>
      {index === 0 ? (
        <Box
          noValidate
          component="form"
          autoComplete="off"
          sx={{
            "& > :not(style)": { m: 1, width: "30ch" },
          }}
        >
          <TextField
            name="Business"
            label="Business Name"
            value={info.Business}
            onChange={handleChange}
          />

          <TextField
            select
            name="Industry"
            value={info.Industry}
            onChange={handleChange}
            label="Industry"
          >
            {Industries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            name="Location"
            label="Zip Code"
            type="number"
            value={info.Location}
            onChange={handleChange}
          />
        </Box>
      ) : index === 1 ? (
        <Box
          noValidate
          component="form"
          autoComplete="off"
          sx={{
            "& > :not(style)": { m: 1, width: "30ch" },
          }}
        >
          <TextField
            select
            name="Sales"
            value={info.Sales}
            onChange={handleChange}
            label="Sales"
          >
            {Options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            name="Payroll"
            value={info.Payroll}
            onChange={handleChange}
            label="Payroll"
          >
            {Options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            type="number"
            name="Employees"
            label="Number of Employees"
            value={info.Employees}
            onChange={handleChange}
          />
        </Box>
      ) : index === 2 ? (
        <Box
          noValidate
          component="form"
          autoComplete="off"
          sx={{
            "& > :not(style)": { m: 1, width: "30ch" },
          }}
        >
          <TextField
            name="Name"
            label="Name"
            value={info.Name}
            onChange={handleChange}
          />

          <TextField
            type="email"
            name="Email"
            label="Email"
            value={info.Email}
            onChange={handleChange}
          />
        </Box>
      ) : null}

      <ActionButtons
        handleNext={handleNext}
        handleBack={handleBack}
        steps={steps}
        index={index}
      />
    </StepContent>
  );
}
