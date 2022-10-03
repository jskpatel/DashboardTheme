import React, { useMemo, useState } from "react";
import { RainbaTABLEDATA1, TABLEDATA } from "../../services/constants";
import DTable from "../DataTable";
import { ReactComponent as DropdownArrow } from "../../assets/images/dropdownArrow.svg";

const DataList1 = () => {
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
    { Header: "Campaign", accessor: "campaign" },
    { Header: "Campaign Id", accessor: "campaignid" },
    {
      Header: "Incoming",
      accessor: "incoming",
      Cell: ({ row }) => (
        <span className="cTable-incoming">{row?.original?.incoming}</span>
      ),
    },
    { Header: "Live", accessor: "live" },
    { Header: "Completed", accessor: "completed" },
    { Header: "Ended", accessor: "ended" },
    { Header: "Connected", accessor: "connected" },
    { Header: "Paid", accessor: "paid" },
    { Header: "Converted", accessor: "converted" },
    { Header: "No Connect", accessor: "noconnect" },
    { Header: "Duplicate", accessor: "duplicate" },
    { Header: "Blocked", accessor: "blocked" },
    { Header: "IVR Hangup", accessor: "ivrhangup" },
    { Header: "RPC", accessor: "rpc" },
    { Header: "Revenue", accessor: "revenue" },
    { Header: "Payout", accessor: "payout" },
    { Header: "Profit", accessor: "profit" },
    { Header: "Margin", accessor: "margin" },
    { Header: "Conve", accessor: "conve" },
    { Header: "TCL", accessor: "tcl" },
    { Header: "ACL", accessor: "acl" },
    { Header: "Total Cost", accessor: "totalcost" },
  ]);

  const renderRowSubComponent = React.useCallback(
    ({ row }) => (
      <table>
        <tr>
          <td>
            <span></span>
          </td>
          <td>{row.values.campaign}</td>
          <td>{row.values.campaignid}</td>
          <td>{row.values.incoming}</td>
          <td>{row.values.live}</td>
          <td>{row.values.completed}</td>
          <td>{row.values.ended}</td>
          <td>{row.values.connected}</td>
          <td>{row.values.paid}</td>
          <td>{row.values.converted}</td>
          <td>{row.values.noconnect}</td>
          <td>{row.values.duplicate}</td>
          <td>{row.values.blocked}</td>
          <td>{row.values.ivrhangup}</td>
          <td>{row.values.rpc}</td>
          <td>{row.values.revenue}</td>
          <td>{row.values.payout}</td>
          <td>{row.values.profit}</td>
          <td>{row.values.margin}</td>
          <td>{row.values.conve}</td>
          <td>{row.values.tcl}</td>
          <td>{row.values.acl}</td>
          <td>{row.values.totalcost}</td>
        </tr>
      </table>
    ),
    [columns]
  );

  return (
    <>
      <DTable
        isLoading={isLoading}
        columns={columns}
        data={RainbaTABLEDATA1}
        rowSelect
        renderRowSubComponent={renderRowSubComponent}
      />
    </>
  );
};

export default DataList1;
