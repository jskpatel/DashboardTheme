import React from "react";
import { SettingOptions } from "../assets/scss/Common.styled";

const SettingOptionsPopup = ({ ref, onClickStopEvent }) => {
  return (
    <SettingOptions
      className="settingOptions bgTheme"
      ref={ref}
      onClick={onClickStopEvent}
    >
      <ul className="list-unstyled m-0 p-0">
        <li>
          <span>Option 1</span>
        </li>
        <li>
          <span>Option 2</span>
        </li>
        <li>
          <span>Option 3</span>
        </li>
      </ul>
    </SettingOptions>
  );
};

export default SettingOptionsPopup;
