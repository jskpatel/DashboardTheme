import React, { useState } from "react";
import { DateRangePicker, createStaticRanges } from "react-date-range";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { CUSTOM_DATE_OBJECTS } from "../services/constants";

const Calendar = ({ show, rangeDate, setRangeDate }) => {
  const [custom, setCustom] = useState(false);
  const staticRanges = [...createStaticRanges(CUSTOM_DATE_OBJECTS)];

  const handleOnChange = (event) => {
    setRangeDate([event.selection]);
    event?.selection?.label === "Custom" ? setCustom(true) : setCustom(false);
    if (event?.selection?.label && event?.selection?.label !== "Custom") {
      setCustom(false);
    }
  };

  return (
    <DateRangePicker
      onChange={(item) => {
        handleOnChange(item);
      }}
      showSelectionPreview={false}
      moveRangeOnFirstSelection={false}
      months={1}
      ranges={rangeDate}
      direction="vertical"
      staticRanges={staticRanges}
      showMonthAndYearPickers
      className={show ? "" : "d-none"}
      disabledDay={() => !custom}
    />
  );
};

export default Calendar;
