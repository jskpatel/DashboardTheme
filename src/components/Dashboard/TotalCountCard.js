import React from "react";
import { LineChart } from "../Chart";
import { CountCard } from "./Style.styled";
import { ReactComponent as UpArrow } from "../../assets/images/upArrow.svg";

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

const TotalCountCard = ({ varient, key, data }) => {
  const labels = ["", "", "", "", "", "", "", "", "", "", "", ""];
  const chartData = {
    labels,
    datasets: [
      {
        label: data?.label,
        data: data?.map,
        fill: true,
        borderWidth: 1,
        borderColor: data?.border,
        backgroundColor: data?.varient,
        pointRadius: 0,
      },
    ],
  };

  return (
    <>
      <CountCard className={`bgTheme ${varient}`}>
        <div className="iconRow">
          <span className="icon">
            <img src={data?.icon} alt="Icon" />
          </span>
          <span className="title">
            {data?.label}
            <span>({data?.subLabel})</span>
          </span>
        </div>
        <div className="total countMap">
          <div className="totalCount">
            <span className="totalDigit bgTheme">
              {data?.map?.reduce((a, b) => a + b)}
            </span>
            <span className="totalPerc">
              +{data?.average}%{" "}
              <UpArrow className={data?.status ? "" : "down"} />
            </span>
          </div>
          <div className="totalMap">
            <LineChart options={lineChartOptions} data={chartData} />
          </div>
        </div>
      </CountCard>
    </>
  );
};

export default TotalCountCard;
