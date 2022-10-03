import React, { useState } from "react";
import { CountCard } from "./Style.styled";

import userIcon from "../../assets/images/userIcon.svg";
import clockIcon from "../../assets/images/clockIcon.svg";
import eyeIcon from "../../assets/images/eyeIcon.svg";
import { ReactComponent as UpArrow } from "../../assets/images/upArrow.svg";
import { LineChart } from "../Chart";
import { getPercentage, getSumFromArray } from "../../services/constantFunc";

export const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: false,
    title: false,
  },
  scales: {
    y: {
      min: 0,
      max: 300,
      stepSize: 50,
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const godNumberCard = {
  id: 1,
  icon: userIcon,
  label: "God Number",
  subLabel: "Cost Per BIllables",
  total: "$635.11",
  average: "21.21",
  data: [0, 125, 60, 260, 120, 209, 80, 249, 120, 209, 80, 249],
  varient: "#9db5e7",
  border: "#4575D7",
  status: 1,
};
const dailyProfitCard = {
  id: 2,
  icon: eyeIcon,
  label: "Daily Profit",
  subLabel: "Gross Profit",
  total: "$635k",
  average: "21.21",
  data: [0, 125, 100, 260, 20, 109, 80, 249, 200, 209, 80, 249],
  varient: "#d6e5da",
  border: "#A1C8A8",
  status: 1,
};
const callEstimateCard = {
  id: 3,
  icon: clockIcon,
  label: "Call Conversion Estimate",
  subLabel: "Number of total calls longer than 90 seconds",
  total: "5m 8s",
  average: "21.21",
  data: [0, 125, 60, 260, 120, 209, 80, 249, 120, 209, 80, 249],
  varient: "#cbb6b1",
  border: "#A1776C",
  status: 0,
};

const CardBoxes = () => {
  const labels = ["", "", "", "", "", "", "", "", "", "", "", ""];
  const chartData = (data) => {
    return {
      labels,
      datasets: [
        {
          label: data?.label,
          data: data?.data,
          fill: true,
          borderWidth: 1,
          borderColor: data?.border,
          backgroundColor: data?.varient,
          pointRadius: 0,
        },
      ],
    };
  };

  return (
    <>
      <CountCard className={`bgTheme`}>
        <div className="iconRow">
          <span className="icon">
            <img src={godNumberCard?.icon} alt="Icon" />
          </span>
          <span className="title">
            {godNumberCard?.label}
            <span>({godNumberCard?.subLabel})</span>
          </span>
        </div>
        <div className="total countMap">
          <div className="totalCount">
            <span className="totalDigit bgTheme">$25.99</span>
            {/* <span className="totalDigit bgTheme">
              $
              {(
                getSumFromArray(godNumberCard?.data) /
                godNumberCard?.data.length
              ).toFixed(2)}
              k
            </span> */}
            <span className="totalPerc">
              +{getPercentage(100, 90).toFixed(2)}%{" "}
              {/* <br />+{godNumberCard?.average}%{" "} */}
              <UpArrow className={godNumberCard?.status ? "" : "down"} />
            </span>
          </div>
          <div className="totalMap">
            <LineChart
              options={lineChartOptions}
              data={chartData(godNumberCard)}
            />
          </div>
        </div>
      </CountCard>
      <CountCard className={`bgTheme`}>
        <div className="iconRow">
          <span className="icon">
            <img src={dailyProfitCard?.icon} alt="Icon" />
          </span>
          <span className="title">
            {dailyProfitCard?.label}
            <span>({dailyProfitCard?.subLabel})</span>
          </span>
        </div>
        <div className="total countMap">
          <div className="totalCount">
            <span className="totalDigit bgTheme">$10.6k</span>
            {/* <span className="totalDigit bgTheme">
              $
              {(
                getSumFromArray(dailyProfitCard?.data) /
                godNumberCard?.data.length
              ).toFixed(0)}
              k
            </span> */}
            <span className="totalPerc">
              +{getPercentage(110, 80).toFixed(2)}%{" "}
              <UpArrow className={dailyProfitCard?.status ? "" : "down"} />
            </span>
          </div>
          <div className="totalMap">
            <LineChart
              options={lineChartOptions}
              data={chartData(dailyProfitCard)}
            />
          </div>
        </div>
      </CountCard>
      <CountCard className={`bgTheme ${callEstimateCard?.varient}`}>
        <div className="iconRow">
          <span className="icon">
            <img src={callEstimateCard?.icon} alt="Icon" />
          </span>
          <span className="title">
            {callEstimateCard?.label}
            <span>({callEstimateCard?.subLabel})</span>
          </span>
        </div>
        <div className="total countMap">
          <div className="totalCount">
            <span className="totalDigit bgTheme">307</span>
            {/* <span className="totalDigit bgTheme">5m 8s</span> */}
            <span className="totalPerc">
              +{callEstimateCard?.average}%{" "}
              <UpArrow className={callEstimateCard?.status ? "" : "down"} />
            </span>
          </div>
          <div className="totalMap">
            <LineChart
              options={lineChartOptions}
              data={chartData(callEstimateCard)}
            />
          </div>
        </div>
      </CountCard>
    </>
  );
};

export default CardBoxes;
