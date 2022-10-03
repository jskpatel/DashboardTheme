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
  X_DATA_MONTH_RANGE_2,
  X_DATA_DAY_RANGE_2,
  X_DATA_MONTH_RANGE_4,
  X_DATA_DAY_RANGE_4,
} from "../../services/constants";

const X_DATA_MONTH_RANGE = [
  "1400",
  "1305",
  "1300",
  "1400",
  "1303",
  "1409",
  "1600",
  "1704",
  "1808",
  "2008",
  "2101",
  "2301",
  "2401",
  "2401",
  "3406",
  "3305",
  "4402",
  "4407",
];

const X_DATA_DAY_RANGE = [
  "1400",
  "1450",
  "1400",
  "1500",
  "1430",
  "1390",
  "1400",
  "1440",
  "1480",
  "1480",
  "1499",
  "1499",
  "1499",
  "1440",
  "1480",
  "1310",
  "1380",
  "1410",
  "1420",
  "1430",
  "1460",
  "1450",
  "1460",
  "1500",
];

const ProfitLossChart = () => {
  const { themeMode, postDateRangeData } = useSelector(
    (state) => state?.persist
  );
  const [activeTab, setActiveTab] = useState("Medicare EN");
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
        max: 15000,
        stepSize: 5000,
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
          maxTicksLimit: 4,
          callback: (labels) => {
            switch (labels) {
              case 0:
                return "0";
              case 3000:
                return "3k";
              case 10000:
                return "10k";
              case 15000:
                return "15k";
              default:
                return "0";
            }
          },
        },
      },
      y1: {
        type: "linear",
        display: false,
        position: "right",
        min: 0,
        max: 15000,
        stepSize: 5000,
        beginAtZero: true,
        ticks: {
          display: false,
          maxTicksLimit: 4,
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
        label: "Profit",
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
        label: "Cost",
        data:
          postDateRangeData.label === "Today" ||
          postDateRangeData.label === "Yesterday"
            ? X_DATA_MONTH_RANGE_2
            : X_DATA_DAY_RANGE_2,
        borderColor: "#1a73e8",
        backgroundColor: ["#1a73e8"],
        color: "#1a73e8",
        fontStyle: "normal",
        borderWidth: 1,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Revenue",
        data:
          postDateRangeData.label === "Today" ||
          postDateRangeData.label === "Yesterday"
            ? X_DATA_MONTH_RANGE_4
            : X_DATA_DAY_RANGE_4,
        borderColor: "#88BB96",
        backgroundColor: ["#88BB96"],
        color: "#88BB96",
        fontStyle: "normal",
        borderWidth: 1,
        tension: 0.4,
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
        <div>Profit and Cost</div>
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

      {/* <hr /> */}
      <div className="d-flex w-100 legends">
        <ul className="list-unstyled m-0 p-0">
          <li className="legend-label text-blue">
            <span></span> Profit
          </li>
          <li className="legend-label text-red">
            <span></span> Cost
          </li>
          <li className="legend-label text-green">
            <span></span> Revenue
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfitLossChart;
