import React, { useEffect, useState } from "react";
import { tabOptions } from "../../taboptions/TabOptionsData";
import "./Tab.css";
import Category2TabContent from "./Category2TabContent";

const TabContent = ({ category1, category2 }) => {
  return (
    <div>
      <div className="tabs">
        <div className="category-tab-container">
          <div className="category-tab">
            <button className=" category-btn category-active-btn">
              Residential
            </button>
            <button className="category-btn category-inactive-btn">
              {" "}
              Commercial
            </button>
          </div>
        </div>
        <div className="input-search">
          <i class="fa-solid fa-location-dot"></i>{" "}
          <input type="text" placeholder="Search for Location" />
          <button>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div>
          <button className="search-btn">Search</button>
        </div>
      </div>
      <div className="multi-select-tabs">
        {category1.map((ele) => (
          <button className="tab-btn unselect-btn">{ele}</button>
        ))}
      </div>
      {<Category2TabContent category2={category2} />}
    </div>
  );
};

const Tab = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTab = (id) => {
    setSelectedTab(id);
  };

  return (
    <div className="tab-container">
      <div className="tabs">
        {tabOptions.map((item) => {
          return (
            <button
              key={item.id}
              className={
                selectedTab === item.id
                  ? "tab-btn active-tab"
                  : "tab-btn inactive-tab"
              }
              onClick={() => handleTab(item.id)}
            >
              <img src={item.icon} />
              <span> {item.tabName}</span>
            </button>
          );
        })}
      </div>
      {selectedTab !== 0 && (
        <div className="tab-content">
          {tabOptions.map((item) => (
            <div key={item.id}>
              {selectedTab === item.id && (
                <TabContent
                  category1={item.subtTabOptions}
                  category2={item.subtTabOptions2}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tab;
