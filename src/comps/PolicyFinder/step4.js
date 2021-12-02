import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { dataReset } from "../../redux/userSlice";
import { counterReset } from "../../redux/counterSlice";

export default function Step4({ reset }) {
  const user = useSelector((state) => state.user);
  const [response, setResponse] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = () => {
    const userData = {
      businessName: user.Business,
      contactEmail: user.Email,
      grossAnnualSales: user.Sales,
      annualPayroll: user.Payroll,
      numEmployees: user.Employees,
      industryId: user.Industry,
      locations: [{ zip: user.Location }],
    };

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
  };

  const handleReset = () => {
    dispatch(counterReset());
    dispatch(dataReset());
    reset();
  };

  return (
    <Paper elevation={10} sx={{ p: 3 }}>
      <Typography pb={2}>Our Recommended Policy's:</Typography>

      {response &&
        response.map((policy, index) => (
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

      {response && response.length !== 0 && (
        <Typography pt={2}>
          Additional information has been sent to your email, if you have any
          questions please reach out to us via the email sent. Thank you!
        </Typography>
      )}

      {!response && (
        <Typography pt={2}>
          Unfortunately at this time we do not have any policies that best match
          your business. We are trying to accommodate more businesses daily and
          will reach out to you if a new policy becomes available. Thank you!
        </Typography>
      )}

      <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
        Reset Policy Finder
      </Button>
    </Paper>
  );
}
