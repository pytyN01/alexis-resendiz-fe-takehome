import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

import { useSelector } from "react-redux";

export default function Step1({ user, handleChange }) {
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
        name="Business"
        label="Business Name"
        value={user.Business}
        onChange={handleChange}
      />

      <TextField
        select
        name="Industry"
        value={user.Industry}
        onChange={handleChange}
        label="Industry"
      >
        {data.Industries.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        name="Location"
        label="Zip Code"
        type="number"
        value={user.Location}
        onChange={handleChange}
      />
    </Box>
  );
}
