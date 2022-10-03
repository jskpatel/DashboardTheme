import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../../components/Calendar";

import {
  CountCards,
  DataTable,
  DownloadReportAndFilter,
  GoogleAccountHeader,
  HeadingContent,
  HeadingSection,
  TableResponsive,
  VerticalPerformance,
} from "./Style.styled";
import {
  CardFullWidth,
  InlineCardsBlock,
} from "../../assets/scss/Common.styled";

import { ReactComponent as DownArrow } from "../../assets/images/downArrow.svg";
import { ReactComponent as DownArrowWhite } from "../../assets/images/downArrow-white.svg";
import { ReactComponent as CalendarIcon } from "../../assets/images/calendarIcon.svg";
import { ReactComponent as CalendarIconWhite } from "../../assets/images/calendarIconWhite.svg";
import { ReactComponent as DropdownArrow } from "../../assets/images/dropdownArrow.svg";
import { ReactComponent as DropdownArrowWhite } from "../../assets/images/dropdownArrowWhite.svg";
import { ReactComponent as SunVector } from "../../assets/images/sunVector.svg";
import { postDateRange } from "../../store/actions/persist";
import MCCAcountPopup from "../../components/Dashboard/MCCAcountPopup";
import CardBoxes from "../../components/Ringba/CardBoxes";
import DataList1 from "../../components/Ringba/DataList1";
import DataList2 from "../../components/Ringba/DataList2";
import ViewingFromDevices from "../../components/Ringba/ViewingFromDevices";
import VerticalPerformanceChart from "../../components/Ringba/VerticalPerformanceChart";

const Ringba = () => {
  document.title = "Ringba";
  const dispatch = useDispatch();
  const addSyncMCCRef = useRef(null);
  const calendarRef = useRef(null);
  const { themeMode } = useSelector((state) => state.persist);
  const [showMCCAcount, setShowMCCAcount] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
      label: "Today",
    },
  ]);

  useEffect(() => {
    if (!showCalendar) return;
    const hideCalendarOnBody = (e) => {
      if (!calendarRef.current.contains(e.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("click", hideCalendarOnBody);

    return () => {
      document.removeEventListener("click", hideCalendarOnBody);
    };
  }, [showCalendar]);

  useEffect(() => {
    if (!showMCCAcount) return;
    const hideAddSyncMCCOnBody = (e) => {
      if (!addSyncMCCRef.current.contains(e.target)) {
        setShowMCCAcount(false);
      }
    };
    document.addEventListener("click", hideAddSyncMCCOnBody);

    return () => {
      document.removeEventListener("click", hideAddSyncMCCOnBody);
    };
  }, [showMCCAcount]);

  useEffect(() => {
    if (dateRange?.[0]) {
      dispatch(postDateRange(dateRange?.[0]));
    }
  }, [dateRange]);

  return (
    <>
      <HeadingSection>
        <Row>
          <Col md={6}>
            <HeadingContent>
              <h1>Hi, Wade!</h1>
              <label>
                Today the overall efficiency is{" "}
                <span className="text-green">153%</span>. Otherwise, there is
                nothing new <SunVector />
              </label>
            </HeadingContent>
          </Col>
          <Col md={6}>
            <DownloadReportAndFilter>
              <div className="d-flex justify-content-end mb-4 pb-2">
                <button className="btn-white bgTheme mb-1">
                  {themeMode ? <DownArrowWhite /> : <DownArrow />}
                  <span>Report</span>
                </button>
              </div>
              <div className="d-flex justify-content-end mb-4 pb-2">
                <button
                  className="btn-white bgTheme mb-1 position-relative"
                  onClick={() => setShowMCCAcount(!showMCCAcount)}
                  ref={addSyncMCCRef}
                >
                  <span>
                    AdSync MCC <small>685-836-0386</small>{" "}
                    {themeMode ? <DropdownArrowWhite /> : <DropdownArrow />}
                  </span>
                  {showMCCAcount ? (
                    <MCCAcountPopup
                      onClickStopEvent={(e) => e.stopPropagation()}
                    />
                  ) : (
                    <></>
                  )}
                </button>
                <button
                  className="btn-white bgTheme mb-1 position-relative"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowCalendar(!showCalendar);
                  }}
                >
                  {themeMode ? <CalendarIconWhite /> : <CalendarIcon />}
                  <span>{dateRange?.[0]?.label}</span>
                  {showCalendar ? (
                    <div
                      className="react-calendar bgTheme themeShadow"
                      ref={calendarRef}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Calendar
                        show={showCalendar}
                        rangeDate={dateRange}
                        setRangeDate={setDateRange}
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </button>
              </div>
            </DownloadReportAndFilter>
          </Col>
        </Row>
      </HeadingSection>

      <CountCards>
        <Row className="mx-0 justify-content-between">
          <CardBoxes />
        </Row>
      </CountCards>

      {/* Data list  */}
      <InlineCardsBlock>
        <DataTable className="w-100">
          <GoogleAccountHeader className="d-flex justify-content-between align-items-start flex-column">
            <div>Google Accounts</div>
            <hr />
          </GoogleAccountHeader>
          <TableResponsive>
            <DataList1 />
          </TableResponsive>
        </DataTable>
      </InlineCardsBlock>

      {/* Data list  */}
      <InlineCardsBlock>
        <DataTable>
          <TableResponsive className="mw-1024">
            <DataList2 />
          </TableResponsive>
        </DataTable>
        <ViewingFromDevices title="Vertical Performance" />
      </InlineCardsBlock>

      <CardFullWidth className="bgTheme">
        <VerticalPerformance className="bgTheme">
          <VerticalPerformanceChart />
        </VerticalPerformance>
      </CardFullWidth>
    </>
  );
};

export default Ringba;
