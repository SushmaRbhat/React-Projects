import React, { useState } from "react";
import "./Tab.css";
import { Slider } from "@mui/material";
import RangeSlider from "../Slider/Slider";
import CustomStepper from "../Stepper/Stepper";

const Category2TabContent = ({ category2, children }) => {
  const [selectedTab, setSelectedTab] = useState(null);

  const handleTab = (id) => {
    setSelectedTab(id);
    console.log(id);
  };
  const getInputSlider = (option) => {
    if (option === "Budget") {
      return (
        <>
          <RangeSlider minValue={10000000} maxValue={500000000} />
        </>
      );
    } else if (option === "Bedroom")
      return (
        <>
          <CustomStepper steps={["1", "2", "3", "4+"]} />
        </>
      );
    else if (option === "Construction Status")
      return (
        <>
          <CustomStepper
            steps={["New Launch", "Ready to Move", "Under Construction"]}
          />
        </>
      );
    else if (option === "Posted By")
      return (
        <>
          <CustomStepper steps={["Agrent", "Owner", "Builder"]} />
        </>
      );
    else if (option === "Area")
      return (
        <>
          <RangeSlider minValue={1000} maxValue={4000} />
        </>
      );
  };

  return (
    <div className="multi-select-tabs">
      {category2.map((ele, i) => (
        <button
          className={
            ele === selectedTab
              ? "tab-btn select-category2-btn"
              : "tab-btn unselect-btn"
          }
          key={i}
          onClick={() => handleTab(ele)}
        >
          {ele}
        </button>
      ))}

      <div style={{ width: "100%" }}>{getInputSlider(selectedTab)}</div>
    </div>
  );
};

export default Category2TabContent;
