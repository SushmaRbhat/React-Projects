import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return value;
}

const RangeDisplay = ({ maxValue, minValue }) => {
  return (
    <div class="range-wrapper-area">
      <div class="range-area">
        <span class="range-value-area">{minValue}</span>
        <span class="range-divider-area"></span>
        <span class="range-value-area">{maxValue}</span>
      </div>
    </div>
  );
};
export default function RangeSlider({ maxValue, minValue }) {
  const [value, setValue] = useState([minValue, maxValue]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };

  const formatNumber = (value) => {
    const val = Math.abs(value);

    console.log(typeof value);
    if (val >= 10000000) return `${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `${(val / 100000).toFixed(2)} Lac`;
    // console.log("value", value);
    return val;
  };

  return (
    <>
      <RangeDisplay
        minValue={formatNumber(value[0])}
        maxValue={formatNumber(value[1])}
      />
      <Box sx={{ width: "100%" }}>
        <Slider
          sx={{ color: "#ec1b26" }}
          getAriaLabel={() => "Temperature range"}
          value={value}
          min={0}
          max={1000000000}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>{" "}
    </>
  );
}
