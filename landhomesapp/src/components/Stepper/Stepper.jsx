import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function CustomStepper({ steps }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={1}
        alternativeLabel
        sx={{
          "& .MuiStepIcon-root": { color: "#ec1b26" },
          " & .MuiStepIcon-root.Mui-active": {
            color: "#ec1b26",
          },
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
