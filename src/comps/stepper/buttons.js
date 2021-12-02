import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/counterSlice";
import {
  updateBusiness,
  updateIndustry,
  updateLocation,
  updateSales,
  updatePayroll,
  updateEmployees,
  updateName,
  updateEmail,
} from "../../redux/userSlice";

export default function Buttons({ index, user }) {
  const Steps = useSelector((state) => state.data.Steps);
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(increment());

    if (index === 0) {
      dispatch(updateBusiness(user.Business));
      dispatch(updateIndustry(user.Industry));
      dispatch(updateLocation(user.Location));
    }
    if (index === 1) {
      dispatch(updateSales(user.Sales));
      dispatch(updatePayroll(user.Payroll));
      dispatch(updateEmployees(user.Employees));
    }
    if (index === 2) {
      dispatch(updateName(user.Name));
      dispatch(updateEmail(user.Email));
    }
  };

  const handleBack = () => {
    dispatch(decrement());
  };

  return (
    <Box sx={{ mb: 2 }}>
      <div>
        <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
          {index === Steps.length - 1 ? "Finish" : "Continue"}
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
