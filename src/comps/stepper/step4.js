import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

import { useDispatch, useSelector } from "react-redux";
import { dataReset } from "../../redux/userSlice";
import { counterReset } from "../../redux/counterSlice";
import React from "react";

export default function Step4({ reset }) {
  const user = useSelector((state) => state.user);

  const [response, setResponse] = React.useState([]);

  const userData = {
    businessName: user.Business,
    contactEmail: user.Email,
    grossAnnualSales: user.Sales,
    annualPayroll: user.Payroll,
    numEmployees: user.Employees,
    industryId: user.Industry,
    locations: [{ zip: user.Location }],
  };

  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log(user);
    !user.Response &&
      fetch(
        "https://api-sandbox.coterieinsurance.com/v1/commercial/applications",
        {
          method: "POST",
          headers: {
            authorization: "token 73920c6f-d530-419c-87b3-4f4762e05e9d",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setResponse(data.availablePolicyTypes);
          console.log("Available Policy Types", data.availablePolicyTypes);
          console.log("Success:", data);
        })
        .catch((error) => {
          dispatch(setResponse(error));
          console.error("Error:", error);
        });
    // eslint-disable-next-line
  }, []);

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
      Response: "",
    });
  };

  return (
    <Paper elevation={10} sx={{ p: 3 }}>
      <Typography pb={2}>Our Recommended Policy's:</Typography>

      {response.map((policy, index) => (
        <Typography key={index}>
          {policy === "GL"
            ? "- General Liability"
            : policy === "BOP"
            ? "- Business Owners Policy"
            : policy === "PL"
            ? "- Professional Liability"
            : null}
        </Typography>
      ))}

      {response && (
        <Typography pt={2}>
          Additional information has been sent to your email, if you have any
          questions please reach out to us via the email sent. Thank you!
        </Typography>
      )}
      <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
        Reset
      </Button>
    </Paper>
  );
}
