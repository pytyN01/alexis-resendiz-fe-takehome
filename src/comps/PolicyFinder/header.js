import Typography from "@mui/material/Typography";
import StepLabel from "@mui/material/StepLabel";

export default function Header({ index, step }) {
  return (
    <StepLabel
      optional={
        index === 2 ? (
          <Typography variant="caption">Final step</Typography>
        ) : null
      }
    >
      {step.label}
    </StepLabel>
  );
}
