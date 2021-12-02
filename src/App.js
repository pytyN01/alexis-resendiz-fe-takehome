import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PolicyFinder from "./comps/PolicyFinder";
import Box from "@mui/material/Box";

function App() {
  return (
    <Container>
      <Box py={2}>
        <img alt="Coterie Insurance Logo" src="/logo.webp" width="150px" />
        <Typography pt={1} variant="h5" textAlign="center">
          Preferred Policy Finder
        </Typography>
      </Box>

      <PolicyFinder />
    </Container>
  );
}

export default App;
