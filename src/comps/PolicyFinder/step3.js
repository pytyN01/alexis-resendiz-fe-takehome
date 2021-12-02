import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function Step3({ user, handleChange }) {
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
        name="Name"
        label="Name"
        value={user.Name}
        onChange={handleChange}
      />

      <TextField
        type="email"
        name="Email"
        label="Email"
        value={user.Email}
        onChange={handleChange}
      />
    </Box>
  );
}
