import React, { useMemo, useState } from "react";
import { TABLEDATA } from "../../services/constants";
import DTable from "../DataTable";
import { ReactComponent as DropdownArrow } from "../../assets/images/dropdownArrow.svg";
// import DataTable from "../DataTable";

const DataList = () => {
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
    { Header: "Account", accessor: "account" },
    { Header: "Campaign Id", accessor: "campaignId" },
    {
      Header: "Campaign",
      accessor: "campaign",
      Cell: ({ row }) => (
        <span className="cTable-incoming">{row?.original?.campaign}</span>
      ),
    },
    { Header: "Status", accessor: "status" },
    { Header: "Budget", accessor: "budget" },
    { Header: "Cost", accessor: "cost" },
    { Header: "New Cost", accessor: "newcost" },
    { Header: "Video Views", accessor: "videoviews" },
    { Header: "View Rate", accessor: "viewrate" },
    { Header: "clicks", accessor: "clicks" },
    { Header: "Avg. CPV", accessor: "avgCPV" },
    { Header: "Avg. CPM", accessor: "avgCPM" },
    { Header: "Avg. CTR", accessor: "avgCTR" },
    { Header: "Avg. CPE", accessor: "avgCPE" },
    { Header: "Avg. CPC", accessor: "avgCPC" },
    { Header: "Conversions", accessor: "conversions" },
    { Header: "Conversion Rate ", accessor: "conversionrate" },
    { Header: "Cost/Conv", accessor: "costconv" },
    { Header: "Conv Rate", accessor: "convrate" },
    {
      Header: "Video Played",
      columns: [
        { Header: "25%", accessor: "25%" },
        { Header: "50%", accessor: "50%" },
        { Header: "75%", accessor: "75%" },
        { Header: "100%", accessor: "100%" },
      ],
    },
  ]);

  const renderRowSubComponent = React.useCallback(
    ({ row }) => (
      <table>
        <tr>
          <td>
            <span></span>
          </td>
          <td>{row.values.account}</td>
          <td>{row.values.campaignId}</td>
          <td>{row.values.campaign}</td>
          <td>{row.values.status}</td>
          <td>{row.values.budget}</td>
          <td>{row.values.cost}</td>
          <td>{row.values.newcost}</td>
          <td>{row.values.videoviews}</td>
          <td>{row.values.viewrate}</td>
          <td>{row.values.clicks}</td>
          <td>{row.values.avgCPV}</td>
          <td>{row.values.avgCPM}</td>
          <td>{row.values.avgCTR}</td>
          <td>{row.values.avgCPE}</td>
          <td>{row.values.avgCPC}</td>
          <td>{row.values.conversions}</td>
          <td>{row.values.conversionrate}</td>
          <td>{row.values.costconv}</td>
          <td>{row.values.convrate}</td>
          <td>{row.values.convrate}</td>
          <td>{row.values.convrate}</td>
          <td>{row.values.convrate}</td>
          <td>{row.values.convrate}</td>
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
        data={TABLEDATA}
        rowSelect
        renderRowSubComponent={renderRowSubComponent}
      />
    </>
  );
};

export default DataList;
