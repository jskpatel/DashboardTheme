import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "./../../assets/images/searchIcon.svg";
import { ReactComponent as MessageIcon } from "./../../assets/images/messageIcon.svg";
import { ReactComponent as NotificationIcon } from "./../../assets/images/notificationIcon.svg";
import profile from "./../../assets/images/notificationIcon.png";
import { Headerbar, ProfileIcon } from "./Style.styled";
import SettingOptionsPopup from "../SettingOptionsPopup";
import { themes } from "./../themeContext/ThemeContext";
import Switch from "../Switch";
import { setThemeMode } from "../../store/actions/persist";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { themeMode } = useSelector((state) => state?.persist);
  const dispatch = useDispatch();

  const [showPopup, setShowPopup] = useState(false);

  const handleThemeMode = (mode) => {
    dispatch(setThemeMode(mode));
  };
  return (
    <>
      <Headerbar>
        {/* <div className="searchbar">
          <input placeholder="Start writing or type a command" />
          <SearchIcon />
          <span className="cursor-pointer">F</span>
        </div> */}
        <span></span>
        <div className="d-flex align-items-center">
          <span className="themeModeSwitch">
            <span className="me-2">L/D</span>
            <Switch
              onChange={() => {
                handleThemeMode(
                  themeMode === themes.dark ? themes.light : themes.dark
                );
              }}
              checked={!!themeMode}
            />
          </span>
          {/* <span className="messageNotify ms-5 ps-4">
            <MessageIcon className="cursor-pointer" />
            <span className="messageNotifyDot"></span>
          </span> */}
          <span className="ms-5 ps-4">
            <NotificationIcon className="cursor-pointer" />
          </span>
          <span className="ms-5 ps-4 position-relative">
            <ProfileIcon
              className="cursor-pointer"
              onClick={() => setShowPopup(!showPopup)}
            >
              <img src={profile} alt="Profile" />
              {showPopup ? (
                <SettingOptionsPopup
                  showPopup={showPopup}
                  setShowPopup={setShowPopup}
                />
              ) : (
                <></>
              )}
            </ProfileIcon>
          </span>
        </div>
      </Headerbar>
    </>
  );
};

export default Header;
