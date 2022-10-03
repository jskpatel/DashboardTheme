import React from "react";
import { MultilineChart } from "../Chart";
import { CardBox, PhoneCallInfo } from "./Style.styled";

export const options = {
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
        color: "#000000",
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
      max: 21000,
      stepSize: 4000,
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
            case 7000:
              return "7k";
            case 14000:
              return "14k";
            case 21000:
              return "21k";
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
      max: 21000,
      stepSize: 7000,
      beginAtZero: true,
      ticks: {
        display: false,
        maxTicksLimit: 4,
      },
    },
  },
};

const labels = [
  "May 19",
  "Jul 19",
  "Sep 19",
  "Nov 19",
  "Jan 20",
  "Mar 20",
  "May 20",
  "Jul 20",
  "Sep 20",
  "Nav 20",
  "Jan 21",
  "Mar 21",
  "May 21",
  "Jul 21",
  "Sep 21",
  "Nav 21",
  "Jan 22",
  "Mar 22",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Clicks",
      data: [
        "0",
        "8000",
        "7000",
        "8000",
        "7000",
        "8000",
        "7000",
        "8000",
        "7000",
        "8000",
        "7000",
        "8000",
        "7000",
        "8000",
        "7000",
        "8000",
        "7000",
        "21000",
      ],
      borderColor: "#1A73E8",
      backgroundColor: ["#1A73E8"],
      color: "#1A73E8",
      fontStyle: "normal",
      borderWidth: 1,
      tension: 0.4,
      yAxisID: "y",
      pointRadius: 0,
    },
    {
      label: "Phone call leads",
      data: [
        "0",
        "9500",
        "8500",
        "9500",
        "10500",
        "9500",
        "5500",
        "9500",
        "5500",
        "9500",
        "5500",
        "9500",
        "16500",
        "9500",
        "5500",
        "9500",
        "500",
        "21000",
      ],
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
};

const PhoneCallChart = () => {
  return (
    <>
      <PhoneCallInfo>
        <div className="d-flex infoBoxes">
          <CardBox className="blue">
            <label>Click</label>
            <span>45.1K</span>
          </CardBox>
          <CardBox className="maroon">
            <label>Phone call leads</label>
            <span>9.64K</span>
          </CardBox>
          <CardBox className="gray">
            <label>Avg.CPC</label>
            <span>$1.38</span>
          </CardBox>
          <CardBox className="gray">
            <label>Cost</label>
            <span>$62.4K</span>
          </CardBox>
        </div>
        <div className="d-flex">
          <MultilineChart
            options={options}
            data={data}
            width={860}
            height={250}
          />
        </div>
        <div className="d-flex w-100 legends">
          <ul className="list-unstyled m-0 p-0">
            <li className="legend-label text-blue">
              <span></span> Clicks
            </li>
            <li className="legend-label text-red">
              <span></span> Phone call leads
            </li>
          </ul>
        </div>
      </PhoneCallInfo>
    </>
  );
};

export default PhoneCallChart;
