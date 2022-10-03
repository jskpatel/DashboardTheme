import React, { useMemo, useState } from "react";
import { RainbaTABLEDATA2, TABLEDATA } from "../../services/constants";
import DTable from "../DataTable";
import { ReactComponent as DropdownArrow } from "../../assets/images/dropdownArrow.svg";

const DataList2 = () => {
  const [isLoading, setIsLoading] = useState(false);

  const columns = useMemo(() => [
    {
      // Build our expander column
      id: "expander", // Make sure it has an ID
      Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
        <span {...getToggleAllRowsExpandedProps()}>
          {/* {isAllRowsExpanded ? <DropdownArrow /> : <DropdownArrow />} */}
        </span>
      ),
      Cell: ({ row }) => (
        // Use Cell to render an expander for each row.
        // We can use the getToggleRowExpandedProps prop-getter
        // to build the expander.
        <span
          {...row.getToggleRowExpandedProps()}
          className="cTable-expand-arrow"
        >
          {row.isExpanded ? <DropdownArrow /> : <DropdownArrow />}
        </span>
      ),
    },
    { Header: "Campaign Name", accessor: "campaignname" },
    { Header: "Live", accessor: "live" },
    { Header: "Hour", accessor: "hour" },
    { Header: "Day", accessor: "day" },
    { Header: "Month", accessor: "month" },
    { Header: "Total", accessor: "total" },
    { Header: "Status", accessor: "status" },
  ]);

  const renderRowSubComponent = React.useCallback(
    ({ row }) => (
      <table>
        <tr>
          <td>
            <span></span>
          </td>
          <td>{row.values.campaignname}</td>
          <td>{row.values.live}</td>
          <td>{row.values.hour}</td>
          <td>{row.values.day}</td>
          <td>{row.values.month}</td>
          <td>{row.values.total}</td>
          <td>{row.values.status}</td>
        </tr>
      </table>
    ),
    []
  );

  return (
    <>
      <DTable
        isLoading={isLoading}
        columns={columns}
        data={RainbaTABLEDATA2}
        rowSelect
        renderRowSubComponent={renderRowSubComponent}
      />
    </>
  );
};

export default DataList2;
