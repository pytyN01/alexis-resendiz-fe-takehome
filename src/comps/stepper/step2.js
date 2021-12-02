import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import * as React from "react";

import { useSelector } from "react-redux";

export default function Step2({ user, handleChange }) {
  const data = useSelector((state) => state.data);

  return (
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
        value={user.Sales}
        onChange={handleChange}
        label="Sales"
      >
        {data.Options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        name="Payroll"
        value={user.Payroll}
        onChange={handleChange}
        label="Payroll"
      >
        {data.Options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        type="number"
        name="Employees"
        label="Number of Employees"
        value={user.Employees}
        onChange={handleChange}
      />
    </Box>
  );
}
