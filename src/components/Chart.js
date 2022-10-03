import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const BarChart = ({ options, data, ...rest }) => {
  return <Bar options={options} data={data} {...rest} />;
};

export const LineChart = ({ options, data }) => {
  return <Line options={options} data={data} />;
};

export const MultilineChart = ({ options, data, ...rest }) => {
  return <Line options={options} data={data} {...rest} />;
};

export const DoughnutChart = ({ options, data, ...rest }) => {
  return <Doughnut options={options} data={data} {...rest} />;
};

export const HorizontalBarChart = ({ options, data, ...rest }) => {
  return <Bar options={options} data={data} {...rest} />;
};
