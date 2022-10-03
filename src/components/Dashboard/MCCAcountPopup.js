import React from "react";
import { MCCAcountDataPopup } from "./Style.styled";
import Icon_1 from "./../../assets/images/icon_1.svg";

const MCCAcountPopup = ({ ref, onClickStopEvent }) => {
  return (
    <>
      <MCCAcountDataPopup
        className="bgTheme mCCAcountDataPopup"
        ref={ref}
        onClick={onClickStopEvent}
      >
        <div className="title">AdSync MCC</div>
        <div className="status">Account status: Active</div>
        <div className="dataList">
          <label>Recent</label>
          <ul className="user activeUser list-unstyled p-0 m-0">
            <li>
              <span className="userIcon">
                <img src={Icon_1} alt="Icon" />
              </span>
              <span className="userStatus">
                <span></span>
              </span>
              <span className="userName">
                John 5 - MCC - English <br /> AdSync MCC
              </span>
              <span className="userContact">734-582-2654</span>
            </li>
            <li>
              <span className="userIcon">
                <img src={Icon_1} alt="Icon" />
              </span>
              <span className="userStatus">
                <span></span>
              </span>
              <span className="userName">
                John 5 - MCC - English <br /> AdSync MCC
              </span>
              <span className="userContact">734-582-2654</span>
            </li>
            <li>
              <span className="userIcon">
                <img src={Icon_1} alt="Icon" />
              </span>
              <span className="userStatus">
                <span></span>
              </span>
              <span className="userName">
                John 5 - MCC - English <br /> AdSync MCC
              </span>
              <span className="userContact">734-582-2654</span>
            </li>
            <li>
              <span className="userIcon">
                <img src={Icon_1} alt="Icon" />
              </span>
              <span className="userStatus">
                <span></span>
              </span>
              <span className="userName">
                John 5 - MCC - English <br /> AdSync MCC
              </span>
              <span className="userContact">734-582-2654</span>
            </li>
            <li>
              <span className="userIcon">
                <img src={Icon_1} alt="Icon" />
              </span>
              <span className="userStatus">
                <span></span>
              </span>
              <span className="userName">
                John 5 - MCC - English <br /> AdSync MCC
              </span>
              <span className="userContact">734-582-2654</span>
            </li>
          </ul>
        </div>
        <label className="heading">Accounts</label>
        <label className="subHeading">All AdSync MCC accounts</label>
        <div className="dataList">
          <ul className="user allUser list-unstyled p-0 m-0">
            <li>
              <span className="userIcon">
                <img src={Icon_1} alt="Icon" />
              </span>
              <span className="userStatus">
                <span></span>
              </span>
              <span className="userName">John 5 - MCC - English</span>
              <span className="userContact">734-582-2654</span>
            </li>
            <li>
              <span className="userIcon">
                <img src={Icon_1} alt="Icon" />
              </span>
              <span className="userStatus">
                <span></span>
              </span>
              <span className="userName">John 5 - MCC - English</span>
              <span className="userContact">734-582-2654</span>
            </li>
            <li>
              <span className="userIcon">
                <img src={Icon_1} alt="Icon" />
              </span>
              <span className="userStatus">
                <span></span>
              </span>
              <span className="userName">John 5 - MCC - English</span>
              <span className="userContact">734-582-2654</span>
            </li>
            <li>
              <span className="userIcon">
                <img src={Icon_1} alt="Icon" />
              </span>
              <span className="userStatus">
                <span></span>
              </span>
              <span className="userName">John 5 - MCC - English</span>
              <span className="userContact">734-582-2654</span>
            </li>
            <li>
              <span className="userIcon">
                <img src={Icon_1} alt="Icon" />
              </span>
              <span className="userStatus">
                <span></span>
              </span>
              <span className="userName">John 5 - MCC - English</span>
              <span className="userContact">734-582-2654</span>
            </li>
          </ul>
        </div>
      </MCCAcountDataPopup>
    </>
  );
};

export default MCCAcountPopup;
