/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MultilineChart } from "../Chart";
import { Hr, PhoneCallInfo, TrafficChannelCardHeader } from "./Style.styled";

import { ReactComponent as DownArrow } from "../../assets/images/downArrow.svg";
import { ReactComponent as DownArrowWhite } from "../../assets/images/downArrow-white.svg";

import {
  LABEL_DAY_COLOR,
  LABEL_DAY_RANGE,
  LABEL_MONTH_COLOR,
  LABEL_MONTH_RANGE,
  X_DATA_MONTH_RANGE,
  X_DATA_DAY_RANGE,
  X_DATA_MONTH_RANGE_3,
  X_DATA_DAY_RANGE_3,
} from "../../services/constants";

const VerticalPerformanceChart = () => {
  const { themeMode, postDateRangeData } = useSelector(
    (state) => state?.persist
  );
  const [activeTab, setActiveTab] = useState("Medicare EN");
  const X_DATA_MONTH_RANGE_2 = [
    "300",
    "330",
    "350",
    "340",
    "350",
    "340",
    "330",
    "340",
    "350",
    "340",
    "350",
    "360",
    "340",
    "345",
    "350",
    "350",
    "340",
    "350",
  ];

  const X_DATA_DAY_RANGE_2 = [
    "300",
    "330",
    "350",
    "340",
    "350",
    "340",
    "330",
    "340",
    "350",
    "340",
    "350",
    "360",
    "340",
    "345",
    "350",
    "350",
    "340",
    "350",
    "330",
    "340",
    "350",
    "330",
    "340",
    "350",
  ];
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: false,
      legend: false,
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
          display: false,
        },
        ticks: {
          color:
            postDateRangeData.label === "Today" ||
            postDateRangeData.label === "Yesterday"
              ? LABEL_MONTH_COLOR
              : LABEL_DAY_COLOR,
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
        type: "linear",
        display: true,
        position: "left",
        min: 0,
        max: 500,
        stepSize: 100,
        beginAtZero: true,
        ticks: {
          color: "#000000",
          font: {
            family: "inter",
            style: "normal",
            size: "14",
            weight: 600,
          },
          fontFamily: "inter",
          maxTicksLimit: 6,
        },
      },
      y1: {
        type: "linear",
        display: false,
        position: "right",
        min: 0,
        max: 500,
        stepSize: 100,
        beginAtZero: true,
        ticks: {
          display: false,
          maxTicksLimit: 6,
        },
      },
      y2: {
        type: "linear",
        display: false,
        position: "right",
        min: 0,
        max: 500,
        stepSize: 100,
        beginAtZero: true,
        ticks: {
          display: false,
          maxTicksLimit: 6,
        },
      },
    },
  };
  const getData = () => ({
    labels:
      postDateRangeData.label === "Today" ||
      postDateRangeData.label === "Yesterday"
        ? LABEL_MONTH_RANGE
        : LABEL_DAY_RANGE,
    datasets: [
      {
        label: "Target Billables",
        data:
          postDateRangeData.label === "Today" ||
          postDateRangeData.label === "Yesterday"
            ? X_DATA_MONTH_RANGE
            : X_DATA_DAY_RANGE,
        borderColor: "#D93025",
        backgroundColor: ["#D93025"],
        color: "#D93025",
        fontStyle: "normal",
        borderWidth: 1,
        tension: 0.4,
        yAxisID: "y1",
        pointRadius: 0,
      },
      {
        label: "Our Billables",
        data:
          postDateRangeData.label === "Today" ||
          postDateRangeData.label === "Yesterday"
            ? X_DATA_MONTH_RANGE_2
            : X_DATA_DAY_RANGE_2,
        borderColor: "#000000",
        backgroundColor: ["#000000"],
        color: "#000000",
        fontStyle: "normal",
        borderDash: [10, 10],
        borderWidth: 1,
        tension: 0.4,
        // yAxisID: "y2",
        pointRadius: 0,
      },
      {
        label: "Available Cap",
        data:
          postDateRangeData.label === "Today" ||
          postDateRangeData.label === "Yesterday"
            ? X_DATA_MONTH_RANGE_3
            : X_DATA_DAY_RANGE_3,
        borderColor: "#1A73E8",
        backgroundColor: ["#1A73E8"],
        color: "#1A73E8",
        fontStyle: "normal",
        borderWidth: 1,
        tension: 0.4,
        // yAxisID: "y3",
        pointRadius: 0,
      },
    ],
  });
  const [data, setData] = useState(getData());

  useEffect(() => {
    const interval = setInterval(() => setData(getData()), 100);
    return () => clearInterval(interval);
  }, [postDateRangeData, data]);

  return (
    <>
      <TrafficChannelCardHeader className="d-flex justify-content-between align-items-center">
        <div>Vertical Performance</div>
        <div className="channelTabs">
          <span
            className={`cursor-pointer ${
              activeTab === "Medicare EN" ? "current" : ""
            }`}
            onClick={() => setActiveTab("Medicare EN")}
          >
            Medicare EN
          </span>
          <span
            className={`cursor-pointer ${
              activeTab === "Medicare ES" ? "current" : ""
            }`}
            onClick={() => setActiveTab("Medicare ES")}
          >
            Medicare ES
          </span>
          <span
            className={`cursor-pointer ${
              activeTab === "ACA EN" ? "current" : ""
            }`}
            onClick={() => setActiveTab("ACA EN")}
          >
            ACA EN
          </span>
        </div>
        <div>
          <button className="btn-white bgTheme mb-1">
            {!themeMode ? <DownArrow /> : <DownArrowWhite />}
            <span>Report</span>
          </button>
        </div>
      </TrafficChannelCardHeader>
      <Hr />
      <PhoneCallInfo>
        <div className="d-flex mt-5">
          <MultilineChart
            options={options}
            data={data}
            width={860}
            height={250}
          />
        </div>
      </PhoneCallInfo>

      <div className="d-flex w-100 legends">
        <ul className="list-unstyled m-0 p-0">
          <li className="legend-label text-blue">
            <span></span> Available Cap
          </li>
          <li className="legend-label text-black">
            <span></span> Our Billables
          </li>
          <li className="legend-label text-red">
            <span></span> Target Billables
          </li>
        </ul>
      </div>
    </>
  );
};

export default VerticalPerformanceChart;
