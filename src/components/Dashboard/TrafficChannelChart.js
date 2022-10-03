import React, { useState } from "react";
import { useSelector } from "react-redux";

import { ReactComponent as DownArrow } from "../../assets/images/downArrow.svg";
import { ReactComponent as DownArrowWhite } from "../../assets/images/downArrow-white.svg";
import { BarChart } from "../Chart";
import {
  Hr,
  TrafficChannelCardHeader,
  TrafficChannelChartSec,
} from "./Style.styled";

const TrafficChannelChart = () => {
  const themeMode = useSelector((state) => state?.persist);
  const [activeTab, setActiveTab] = useState("profit");

  const options = {
    responsive: true,
    plugins: {
      legend: false,
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          offset: true,
        },
        ticks: {
          color: themeMode ? "#000000" : "#F00",
          font: {
            family: "inter",
            style: "normal",
            size: "14",
            weight: 600,
          },
          fontFamily: "inter",
        },
      },
      y: {
        grid: {
          display: false,
          offset: true,
        },
        beginAtZero: true,
        min: 0,
        max: 10000,
        stepSize: 2000,
        ticks: {
          color: themeMode ? "#000000" : "#F00",
          font: {
            family: "inter",
            style: "normal",
            size: "14",
            weight: 600,
          },
          fontFamily: "inter",
          maxTicksLimit: 6,
          callback: (labels) => {
            switch (labels) {
              case 0:
                return "0";
              case 2000:
                return "2k";
              case 4000:
                return "4k";
              case 6000:
                return "6k";
              case 8000:
                return "8k";
              case 10000:
                return "10k";
              default:
                return "0";
            }
          },
        },
      },
    },
  };

  const labels = [
    "John 1",
    "John 2",
    "John 3",
    "John 4",
    "John 5",
    "John 6",
    "John 7",
    "John 8",
  ];

  const data = {
    labels,
    datasets: [
      {
        barThickness: 46,
        barPercentage: 0.1,
        label: "Direct",
        borderRadius: 5,
        data: [6605, 3509, 7800, 5801, 6560, 8155, 4340, 9969],
        backgroundColor: [
          "#1A73E8",
          "#FFBFA5",
          "#79C2FD",
          "#6B5DD3",
          "#FFE58C",
          "#88BB96",
          "#D93025",
          "#BEE8BC",
        ],
        borderColor: [
          "#1A73E8",
          "#FFBFA5",
          "#79C2FD",
          "#6B5DD3",
          "#FFE58C",
          "#88BB96",
          "#D93025",
          "#BEE8BC",
        ],
      },
    ],
  };
  return (
    <>
      <TrafficChannelCardHeader className="d-flex justify-content-between align-items-center">
        <div>Traffic channel</div>
        <div className="channelTabs">
          <span
            className={`cursor-pointer ${
              activeTab === "profit" ? "current" : ""
            }`}
            onClick={() => setActiveTab("profit")}
          >
            Profit
          </span>
          <span
            className={`cursor-pointer ${
              activeTab === "revenue" ? "current" : ""
            }`}
            onClick={() => setActiveTab("revenue")}
          >
            Revenue
          </span>
          <span
            className={`cursor-pointer ${activeTab === "ROI" ? "current" : ""}`}
            onClick={() => setActiveTab("ROI")}
          >
            ROI
          </span>
        </div>
        <div>
          <button className="btn-white bgTheme mb-1">
            {themeMode ? <DownArrow /> : <DownArrowWhite />}
            <span>Report</span>
          </button>
        </div>
      </TrafficChannelCardHeader>
      <Hr />
      <TrafficChannelChartSec>
        <BarChart options={options} data={data} width={860} height={300} />
        <hr />
        <div className="d-flex w-100 legends">
          <ul className="list-unstyled m-0 p-0">
            <li className="legend-label text-blue">
              <span></span> John 1
            </li>
            <li className="legend-label text-pink">
              <span></span> John 2
            </li>
            <li className="legend-label text-light-blue">
              <span></span> John 3
            </li>
            <li className="legend-label text-purple">
              <span></span> John 4
            </li>
            <li className="legend-label text-cream">
              <span></span> John 5
            </li>
            <li className="legend-label text-green">
              <span></span> John 6
            </li>
            <li className="legend-label text-red">
              <span></span> John 7
            </li>
            <li className="legend-label text-light-green">
              <span></span> John 8
            </li>
          </ul>
        </div>
      </TrafficChannelChartSec>
    </>
  );
};

export default TrafficChannelChart;
