import React from "react";
import { DoughnutChart } from "../Chart";
import { ViewingDataFromDevices } from "./Style.styled";

import { ReactComponent as DesktopIcon } from "./../../assets/images/desktopIcon.svg";
import { ReactComponent as MobileIcon } from "./../../assets/images/mobileIcon.svg";
import { ReactComponent as TabletIcon } from "./../../assets/images/tabletIcon.svg";

const options = {
  responsive: true,
  plugins: {
    title: false,
    legend: false,
  },
  cutout: 60,
};
const data = {
  labels: ["Tablet", "Mobile", "Desktop"],
  datasets: [
    {
      label: "# of Votes",
      data: [6.4, 15, 79.1],
      backgroundColor: ["#FFBFA5", "#BEE8BC", "#2A6FFF"],
      borderColor: ["#FFBFA5", "#BEE8BC", "#2A6FFF"],
      borderWidth: 0,
      borderRadius: 5,
      spacing: 20,
      offset: 0,
      rotation: 0,
    },
  ],
};

const ViewingFromDevices = ({ title }) => {
  return (
    <>
      <ViewingDataFromDevices className="bgTheme">
        <h4 className="bgTheme">{title}</h4>

        <DoughnutChart options={options} data={data} width={150} height={100} />

        <div className="deviceslegends">
          <div className="legendBox">
            <span>
              <DesktopIcon />
            </span>
            <p>Medicare EN</p>
            <label>79.1%</label>
          </div>
          <div className="legendBox">
            <span>
              <MobileIcon />
            </span>
            <p>Medicare ES</p>
            <label>9.5%</label>
          </div>
          <div className="legendBox">
            <span>
              <TabletIcon />
            </span>
            <p>ACA EN</p>
            <label>2.8%</label>
          </div>
        </div>
      </ViewingDataFromDevices>
    </>
  );
};

export default ViewingFromDevices;
