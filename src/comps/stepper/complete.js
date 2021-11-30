import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function Complete({ handleReset }) {
  return (
    <Paper elevation={10} sx={{ p: 3 }}>
      <Typography>Our Recommended Policy's:</Typography>
      <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
        Reset
      </Button>
    </Paper>
  );
}
