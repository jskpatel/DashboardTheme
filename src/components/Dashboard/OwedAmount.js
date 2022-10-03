import React, { useState } from "react";
import { OwedAmountData } from "./Style.styled";

import { ReactComponent as ViewMoreOptions } from "./../../assets/images/moreOptionsIcon.svg";
import { ReactComponent as AmountOwedIcon } from "./../../assets/images/amountOwedIcon.svg";
import { ReactComponent as UpArrow } from "../../assets/images/upArrow.svg";
import SettingOptionsPopup from "../SettingOptionsPopup";
import styled from "styled-components";

const OwedAmount = () => {
  const [showPopup, setShowPopup] = useState(false);
  const GaugeMeter = styled.div`
    width: 30rem;
    height: 15rem;
    background: var(--white);
    margin: 0 auto 2rem;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;

    .multigraph {
      width: 30rem;
      height: 15rem;
      position: relative;
      top: 0;
      left: 0;
      margin: 0;
      zoom: 0.8;
      &:before {
        content: "";
        width: 30rem;
        height: 15rem;
        position: absolute;
        border: 3rem solid rgba(0, 0, 0, 0.1);
        border-radius: 30rem 30rem 0 0;
        border-bottom: none;
      }
    }
    .tooltip {
      width: 8rem;
      height: 3rem;
      background: lightgrey;
      text-align: center;
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 200;
      color: #000;
      border: 0.1rem solid #grey;
      position: absolute;
      left: 50%;
      bottom: -4rem;
      margin: -4rem;
      transition: all 300ms ease-in-out;
      box-shadow: 0 0 0.5rem grey;
      opacity: 0;
      transform: scale(0.1);
    }
    .multigraph:hover .tooltip {
      bottom: 75%;
      opacity: 0.8;
      transform: scale(1);
    }
    .graph {
      width: 30rem;
      height: 15rem;
      position: absolute;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: end;
      &:before,
      &:after {
        width: 30rem;
        height: 15rem;
        position: absolute;
        top: 100%;
        border: 3rem solid #000;
        content: "";
        border-radius: 0 0 30rem 30rem;
        border-top: none;
        animation: animate 3s;
        transform-origin: center top;
      }
      &:after {
        transform: rotate(75deg);
      }
      span {
        position: absolute;
        font-size: 34px;
      }
    }

    @keyframes animate {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(180deg);
      }
    }
  `;

  return (
    <>
      <OwedAmountData className="bgTheme">
        <h4 className="bgTheme d-flex justify-content-end">
          <span
            className="cursor-pointer d-flex align-items-center justify-content-center position-relative"
            onClick={() => setShowPopup(!showPopup)}
          >
            <ViewMoreOptions />
            {showPopup ? (
              <SettingOptionsPopup
                showPopup={showPopup}
                setShowPopup={setShowPopup}
              />
            ) : (
              <></>
            )}
          </span>
        </h4>

        <GaugeMeter>
          <div className="multigraph">
            <span className="tooltip">45%</span>
            <span className="graph">
              <span>45%</span>
            </span>
          </div>
        </GaugeMeter>

        <div className="d-flex flex-column text-center align-items-center">
          <div className="owedIcon">
            <AmountOwedIcon />
          </div>
          <label className="owedTitle">Today's Profit</label>
          <label className="owedAmount">$10,600</label>
          <label className="owedSubAmount">
            $16,783 <UpArrow />
          </label>
        </div>
      </OwedAmountData>
    </>
  );
};

export default OwedAmount;
