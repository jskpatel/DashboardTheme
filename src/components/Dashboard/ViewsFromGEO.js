import React from "react";
import { HorizontalBarChart } from "../Chart";
import { ViewsFromGEOData } from "./Style.styled";

const ViewsFromGEO = () => {
  const options = {
    indexAxis: "y",
    plugins: {
      title: {
        // display: false,
      },
      legend: {
        display: false,
        labels: {
          font: {
            size: 59,
            style: "normal",
            weight: 400,
            family: "inter",
          },
        },
      },
    },
    scales: {
      x: {
        min: 0,
        max: 20,
        stepSize: 5,
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
                return "0%";
              case 5:
                return "5%";
              case 10:
                return "10%";
              case 15:
                return "15%";
              case 20:
                return "20%";
              default:
                return "0";
            }
          },
        },
      },
      Y: {
        grid: {
          display: false,
        },
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
          // maxTicksLimit: 4,
        },
      },
    },
  };
  const dataHorBar = {
    labels: ["Vietnam", "United States", "Indonesia", "HongKong", "Ukraine"],
    datasets: [
      {
        label: "Views from GEO",
        barThickness: 26,
        barPercentage: 0.1,
        borderWidth: 1,
        borderRadius: 5,
        data: [19, 9, 3, 12, 15],
        backgroundColor: [
          "#BEE8BC",
          "#2A70FE",
          "#BEE8BC",
          "#BEE8BC",
          "#FFBFA5",
        ],
        borderColor: ["#BEE8BC", "#2A70FE", "#BEE8BC", "#BEE8BC", "#FFBFA5"],
      },
    ],
  };
  return (
    <>
      <ViewsFromGEOData className="bgTheme">
        <h4 className="bgTheme">Views From GEO</h4>

        <HorizontalBarChart
          options={options}
          data={dataHorBar}
          width={165}
          height={150}
        />
      </ViewsFromGEOData>
    </>
  );
};

export default ViewsFromGEO;
