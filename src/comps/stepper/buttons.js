import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Footer({ steps, handleNext, handleBack, index }) {
  return (
    <Box sx={{ mb: 2 }}>
      <div>
        <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
          {index === steps.length - 1 ? "Finish" : "Continue"}
        </Button>
        <Button
          disabled={index === 0}
          onClick={handleBack}
          sx={{ mt: 1, mr: 1 }}
        >
          Back
        </Button>
      </div>
    </Box>
  );
}
