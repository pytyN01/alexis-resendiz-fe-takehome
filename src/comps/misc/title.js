import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Title() {
  return (
    <Box py={2}>
      <img alt="Coterie Insurance Logo" src="/logo.webp" width="150px" />
      <Typography variant="h5" textAlign="center">
        Preferred Policy Finder
      </Typography>
    </Box>
  );
}
