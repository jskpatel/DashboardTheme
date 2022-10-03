/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MultilineChart } from "../Chart";
import {
  CardBox,
  Hr,
  PhoneCallInfo,
  TrafficChannelCardHeader,
} from "./Style.styled";

import { ReactComponent as DownArrow } from "../../assets/images/downArrow.svg";
import { ReactComponent as DownArrowWhite } from "../../assets/images/downArrow-white.svg";
import {
  LABEL_DAY_COLOR,
  LABEL_DAY_COLOR_DARKMODE,
  LABEL_DAY_RANGE,
  LABEL_MONTH_COLOR,
  LABEL_MONTH_COLOR_DARKMODE,
  LABEL_MONTH_RANGE,
  X_DATA_DAY_RANGE_PROFIT_FLOOR,
  X_DATA_DAY_RANGE_PROFIT_FLOOR_2,
  X_DATA_MONTH_RANGE_PROFIT_FLOOR,
  X_DATA_MONTH_RANGE_PROFIT_FLOOR_2,
} from "../../services/constants";

const ProfitFloorChart = () => {
  const { themeMode, postDateRangeData } = useSelector(
    (state) => state?.persist
  );
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
          color: themeMode
            ? postDateRangeData.label === "Today" ||
              postDateRangeData.label === "Yesterday"
              ? LABEL_DAY_COLOR_DARKMODE
              : LABEL_MONTH_COLOR_DARKMODE
            : postDateRangeData.label === "Today" ||
              postDateRangeData.label === "Yesterday"
            ? LABEL_DAY_COLOR
            : LABEL_MONTH_COLOR,
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
        stepSize: 4000,
        beginAtZero: true,
        scaleBreaks: {
          customBreaks: [
            {
              startValue: 3000,
              endValue: 3000,
            },
          ],
        },
        ticks: {
          color: "#000000",
          font: {
            family: "inter",
            style: "normal",
            size: "14",
            weight: 600,
          },
          fontFamily: "inter",
          maxTicksLimit: 7,
          callback: (labels) => {
            switch (labels) {
              case 0:
                return "0";
              case 3000:
                return "3k";
              case 5000:
                return "5k";
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
        display: true,
        position: "right",
        min: 0,
        max: 15000,
        stepSize: 4000,
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
        ? LABEL_DAY_RANGE
        : LABEL_MONTH_RANGE,
    datasets: [
      {
        label: "data 1",
        data:
          postDateRangeData.label === "Today" ||
          postDateRangeData.label === "Yesterday"
            ? X_DATA_DAY_RANGE_PROFIT_FLOOR
            : X_DATA_MONTH_RANGE_PROFIT_FLOOR,
        borderColor: "#000000",
        backgroundColor: ["#000000"],
        color: "#000000",
        fontStyle: "normal",
        borderDash: [10, 10],
        borderWidth: 1,
        tension: 0.4,
        yAxisID: "y1",
        pointRadius: 0,
      },
      {
        label: "Profit",
        data:
          postDateRangeData.label === "Today" ||
          postDateRangeData.label === "Yesterday"
            ? X_DATA_DAY_RANGE_PROFIT_FLOOR_2
            : X_DATA_MONTH_RANGE_PROFIT_FLOOR_2,
        borderColor: "#D93025",
        backgroundColor: ["#D93025"],
        color: "#D93025",
        fontStyle: "normal",
        borderWidth: 1,
        tension: 0.4,
        yAxisID: "y1",
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
        <div>$10k Profit Floor</div>
        <div>
          <button className="btn-white bgTheme mb-1">
            {!themeMode ? <DownArrow /> : <DownArrowWhite />}
            <span>Report</span>
          </button>
        </div>
      </TrafficChannelCardHeader>
      <Hr />
      <PhoneCallInfo>
        <div className="d-flex infoBoxes mt-5">
          <CardBox className="gray bgTheme">
            <label>Avg. Weekly</label>
            <span>$1.38</span>
          </CardBox>
          <CardBox className="gray bgTheme">
            <label>Avg. Monthly</label>
            <span>$62.4K</span>
          </CardBox>
          <CardBox className="gray bgTheme">
            <label>Avg. Quarterly</label>
            <span>$62.4K</span>
          </CardBox>
        </div>
        <div className="d-flex">
          <MultilineChart
            options={options}
            data={data}
            width={860}
            height={350}
          />
        </div>
      </PhoneCallInfo>
    </>
  );
};

export default ProfitFloorChart;
