import styled from "styled-components";

export const CountCard = styled.div`
  border-radius: 1.2rem;
  border: 0;
  padding: 2.5rem;
  flex-basis: calc(33.33% - 15px);
  width: calc(33.33% - 15px);
  min-height: 20rem;
  height: auto;

  .iconRow {
    display: flex;
    align-items: center;
    width: 100%;
    .icon {
      height: 5rem;
      width: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(69, 117, 215, 0.18);
      border-radius: 6.5625px;
    }
    .title {
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 2.2rem;
      margin-left: 2rem;
      span {
        font-size: 1.1rem;
        line-height: 1.1rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        font-weight: 300;
        margin-top: 0.4rem;
      }
    }
  }
  &.blue {
    .icon {
      background: rgba(69, 117, 215, 0.18);
    }
  }
  &.green {
    .icon {
      background: rgba(161, 200, 168, 0.18);
    }
  }
  &.red {
    .icon {
      background: rgba(161, 119, 108, 0.18);
    }
  }
  .total {
    &.countMap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    }
    &Count {
      display: flex;
      flex-direction: column;
    }
    &Digit {
      font-weight: 600;
      font-size: 3.2rem;
      line-height: 3.9rem;
    }
    &Perc {
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.7rem;
      color: #608b70;
      margin-top: 0.5rem;

      .down {
        path {
          fill: #a8605a;
        }
      }
    }
    &Map {
      canvas {
        width: 100% !important;
        max-width: 20rem;
      }
    }
  }
`;

export const PhoneCallInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 3rem;

  .infoBoxes {
    justify-content: flex-start;
    margin-bottom: 3rem;
  }

  canvas {
    width: 100% !important;
  }

  // .legends {
  //   display: flex;
  //   justify-content: center;
  //   margin-top: 4rem;
  //   margin-bottom: 3rem;
  //   ul {
  //     display: flex;
  //   }
  //   li {
  //     &:not(:first-child) {
  //       margin-left: 4rem;
  //     }
  //     &.legend-label {
  //       display: flex;
  //       align-items: center;
  //       span {
  //         width: 1.5rem;
  //         height: 0.1rem;
  //         margin-right: 1rem;
  //         display: inline-flex;
  //       }
  //       &:not(:first-child) {
  //         margin-left: 4rem;
  //       }
  //     }
  //   }
  //   .text-blue {
  //     span {
  //       background: var(--blue);
  //     }
  //   }
  //   .text-red {
  //     span {
  //       background: var(--red);
  //     }
  //   }
  // }
`;

export const CardBox = styled.div`
  width: 12.1rem;
  height: 6.8rem;
  // background: #1a73e8;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0.5rem 0 2rem;
  &.blue {
    background: var(--blue);
    color: #ffffff;
  }
  &.maroon {
    background: var(--red);
    color: #ffffff;
  }
  &.gray {
    // background: var(--bg-gray);
    // color: #000;
  }
  span {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2.5rem;
  }
  label {
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 2.5rem;
  }
  &:not(:last-child) {
    margin-right: 2.5rem;
  }
`;

export const TrafficChannelCardHeader = styled.div`
  min-height: 8rem;
  & > div {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2.2rem;
  }
  .channelTabs {
    span {
      display: inline-block;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      padding: 2.8rem 2rem;
      border-bottom: 0.2rem solid transparent;
      transition: all 0.3s ease-in-out;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
      &.current {
        border-bottom: 0.2rem solid var(--blue);
      }
    }
  }
`;

export const Hr = styled.hr`
  margin: 0;
  border: 0;
  border-bottom: 0.1rem solid rgba(138, 143, 160, 0.5);
  width: calc(100% + 3.6rem);
  margin-left: -1.8rem;
`;

export const TrafficChannelChartSec = styled.div`
  margin-top: 8rem;

  hr {
    display: flex;
    width: calc(100% + 3.6rem);
    margin: 3rem 0 0 -1.8rem;
    padding: 0;
    border: 0;
    border-bottom: 0.1rem solid rgba(138, 143, 160, 0.4);
  }
  // .legends {
  //   display: flex;
  //   justify-content: center;
  //   margin-top: 4rem;
  //   margin-bottom: 3rem;
  //   ul {
  //     display: flex;
  //   }
  //   li {
  //     &:not(:first-child) {
  //       margin-left: 4rem;
  //     }
  //     &.legend-label {
  //       display: flex;
  //       align-items: center;
  //       span {
  //         width: 2.6rem;
  //         height: 2.6rem;
  //         border-radius: 0.5rem;
  //         margin-right: 1rem;
  //         display: inline-flex;
  //       }
  //       &:not(:first-child) {
  //         margin-left: 4rem;
  //       }
  //     }
  //   }
  //   .text-blue {
  //     span {
  //       background: var(--blue);
  //     }
  //   }
  //   .text-pink {
  //     span {
  //       background: var(--pink);
  //     }
  //   }
  //   .text-light-blue {
  //     span {
  //       background: var(--light-blue);
  //     }
  //   }
  //   .text-purple {
  //     span {
  //       background: var(--purple);
  //     }
  //   }
  //   .text-cream {
  //     span {
  //       background: var(--cream);
  //     }
  //   }
  // }
`;

export const ViewingDataFromDevices = styled.div`
  border-radius: 1.2rem;
  padding: 3rem 3rem 1rem;
  flex-basis: 0 0 calc(33.33% - 2rem);
  width: calc(33.33% - 2rem);

  h4 {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.2rem;
    margin-bottom: 3rem;
  }

  canvas {
    height: 200px !important;
    width: 200px !important;
    margin: 0 auto;
  }
  .deviceslegends {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;

    .legendBox {
      display: flex;
      flex-direction: column;
      span {
        margin-bottom: 1rem;
      }
      label {
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 2.2rem;
        margin-bottom: 1.4rem;
      }
      p {
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.5rem;
        margin-bottom: 1rem;
      }
    }
  }
`;

export const ViewsFromGEOData = styled.div`
  border-radius: 1.2rem;
  padding: 3rem 3rem 1rem;
  flex-basis: 0 0 calc(33.33% - 2rem);
  width: calc(33.33% - 2rem);

  h4 {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.2rem;
    margin-bottom: 3rem;
  }
`;

export const OwedAmountData = styled.div`
  background: var(--white);
  border-radius: 1.2rem;
  padding: 3rem 3rem 1rem;
  flex-basis: 0 0 calc(33.33% - 2rem);
  width: calc(33.33% - 2rem);

  h4 {
    span {
      display: flex;
      height: 3rem;
      width: 3rem;
    }
  }
  .owedIcon {
    margin-bottom: 3rem;
  }
  .owedTitle {
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: #ababab;
    margin-bottom: 1rem;
  }
  .owedAmount {
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 2.9rem;
    margin-bottom: 1rem;
  }
  .owedSubAmount {
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;

export const MCCAcountDataPopup = styled.div`
  width: 44.4rem;
  position: absolute;
  z-index: 9;
  right: 0;
  text-align: left;
  top: calc(100% + 0.5rem);
  border-radius: 1rem;

  .title {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.3rem;
    padding: 1.6rem 1.5rem 1.6rem 3.5rem;
    border-bottom: 1.16535px solid rgba(138, 143, 160, 0.2);
  }
  .status {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: #61a1f0;
    padding: 1.7rem 1.5rem 1.7rem 3.5rem;
    border-bottom: 1.16535px solid rgba(138, 143, 160, 0.2);
  }
  .dataList {
    padding: 0 3.5rem 1rem;
    & > label {
      font-size: 1.4rem;
      line-height: 1.7rem;
      margin-top: 1.2rem;
    }
    .user {
      overflow-y: auto;
      &.activeUser {
        max-height: 25.5rem;
      }
      &.allUser {
        max-height: 18.5rem;
      }
      li {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        font-weight: 400;
        font-size: 1.15rem;
        line-height: 1.4rem;
        padding: 1.1rem 0;

        &:not(:last-child) {
          border-bottom: 1.16535px solid rgba(138, 143, 160, 0.1);
        }
      }
      &Icon {
        width: 3.5rem;
        img {
          height: 1.2rem;
          width: 1.2rem;
        }
      }
      &Status {
        width: 2.5rem;
        display: flex;
        justify-content: flex-start;
        span {
          width: 1.2rem;
          height: 1.2rem;
          background: #0b8043;
          display: flex;
          border-radius: 100%;
        }
      }
      &Name {
        width: calc(100% - 15rem);
        flex-basis: calc(100% - 15rem);
      }
      &Contact {
        width: 9.5rem;
        flex-basis: 9.5rem;
        text-align: right;
      }
    }
  }
  .heading {
    padding: 1.5rem 1.5rem 1.5rem 3.5rem;
    font-size: 1.4rem;
    line-height: 1.7rem;
    border-top: 1.16535px solid rgba(138, 143, 160, 0.2);
    display: flex;
    width: 100%;
  }
  .subHeading {
    min-height: 4.7rem;
    border-left: 0.5rem solid #1a73e8;
    display: flex;
    align-items: center;
    padding: 1.5rem 1.5rem 1.5rem 3rem;
    font-size: 1.4rem;
    line-height: 1.7rem;
  }
`;
