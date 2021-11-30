import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";

export default function Title() {
  const count = useSelector((state) => state.data.value);

  console.log(count);

  return (
    <Box py={2}>
      <Typography variant="h4" textAlign="center">
        Coterie Insurance
      </Typography>
      <Typography variant="h5" textAlign="center">
        Preferred Policy Finder
      </Typography>
      <Typography variant="h6" textAlign="center">
        {count > 3 && "Final"} Step {count <= 3 && count}
      </Typography>
    </Box>
  );
}
