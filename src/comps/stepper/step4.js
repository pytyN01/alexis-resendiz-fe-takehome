import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

import { useDispatch } from "react-redux";
import { dataReset } from "../../redux/userSlice";
import { counterReset } from "../../redux/counterSlice";

export default function Step4({ reset }) {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(counterReset());
    dispatch(dataReset());
    reset({
      Business: "",
      Industry: "",
      Location: "",
      Sales: "",
      Payroll: "",
      Employees: "",
      Name: "",
      Email: "",
    });
  };

  return (
    <Paper elevation={10} sx={{ p: 3 }}>
      <Typography>Our Recommended Policy's:</Typography>
      <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
        Reset
      </Button>
    </Paper>
  );
}
