import { createSlice } from "@reduxjs/toolkit";

export const data = createSlice({
  name: "data",
  initialState: {
    Steps: [
      {
        label: "Introduce us to your business.",
        description: `We need some basic information about your business to get started.`,
      },
      {
        label: "Tell us a bit more about your business.",
        description:
          "A few more questions and we will match you with the policy that best suits your business.",
      },
      {
        label: "What is the best way to get a hold of you?",
        description: `Once matched we will send you detailed information about each recommended policy and what they can do for you.`,
      },
    ],
    Industries: [
      {
        value: "10537",
        label: "Plumber",
      },
      {
        value: "10391",
        label: "Software developer",
      },
      {
        value: "10415",
        label: "Lawyer",
      },
      {
        value: "10109",
        label: "Handyman",
      },
    ],
    Options: [
      {
        value: "50000",
        label: "$50k",
      },
      {
        value: "75000",
        label: "$75k",
      },
      {
        value: "100000",
        label: "$100k",
      },
      {
        value: "150000",
        label: "$150k",
      },
      {
        value: "200000",
        label: "$200k",
      },
    ],
  },
});

export default data.reducer;
