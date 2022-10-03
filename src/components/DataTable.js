import React from "react";
import { Table } from "react-bootstrap";
import {
  useTable,
  useRowSelect,
  usePagination,
  useExpanded,
} from "react-table";
import styled from "styled-components";
import EmptyTable from "./EmptyTable";
import Loader from "./Loader";

// const pageLimit = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 500];

const CTable = styled.div``;

const DTable = ({
  data,
  columns,
  rowSelect,
  renderRowSubComponent,
  isLoading,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    visibleColumns,
    state: { expanded },
    // pageOptions,
    // pageCount,
    // gotoPage,

    // nextPage,
    // previousPage,
    // canNextPage,
    // canPreviousPage,

    // setPageSize,
    // state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useExpanded,
    usePagination,
    rowSelect ? useRowSelect : ""
    // rowSelect
    //   ? (hooks) => {
    //       hooks.visibleColumns.push((columns) => [
    //         // Let's make a column for selection
    //         {
    //           id: "selection",
    //           // The header can use the table's getToggleAllRowsSelectedProps method
    //           // to render a checkbox
    //           Header: ({ getToggleAllRowsSelectedProps }) => (
    //             <div>
    //               <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
    //             </div>
    //           ),
    //           // The cell can use the individual row's getToggleRowSelectedProps method
    //           // to the render a checkbox
    //           Cell: ({ row }) => (
    //             <div>
    //               <IndeterminateCheckbox
    //                 id={row.original.id}
    //                 {...row.getToggleRowSelectedProps()}
    //               />
    //             </div>
    //           ),
    //         },
    //         ...columns,
    //       ]);
    //     }
    //   : ""
  );

  return (
    <>
      <CTable className="cTable mt-2 bgTheme bgThemeText">
        <Table {...getTableProps()} hover className="m-0 p-0">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th key={column.id} {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {isLoading ? (
              <tr>
                <td colSpan={columns.length}>
                  <div
                    style={{ height: "50vh" }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Loader
                      height={50}
                      width={50}
                      color={"white"}
                      secondaryColor={"#1a73e8"}
                      strokeWidth={4}
                    />
                  </div>
                </td>
              </tr>
            ) : page.length ? (
              page.map((row, i) => {
                prepareRow(row);
                return (
                  <React.Fragment {...row.getRowProps()}>
                    <tr>
                      {row.cells.map((cell) => (
                        <td key={cell.row.id} {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                    {row.isExpanded ? (
                      <tr>
                        <td colSpan={visibleColumns.length}>
                          {/*
                            Inside it, call our renderRowSubComponent function. In reality,
                            you could pass whatever you want as props to
                            a component like this, including the entire
                            table instance. But for this example, we'll just
                            pass the row
                          */}
                          {renderRowSubComponent({ row })}
                        </td>
                      </tr>
                    ) : null}
                  </React.Fragment>
                );
              })
            ) : (
              <tr>
                <td colSpan={columns.length}>
                  <EmptyTable />
                </td>
              </tr>
            )}
          </tbody>
          {/* <tfoot>
          <tr>
            <td colSpan={columns.length}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <button
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                  >
                    {"<<"}
                  </button>
                  <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                  >
                    {"<"}
                  </button>
                  <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {">"}
                  </button>
                  <button
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                  >
                    {">>"}
                  </button>
                </div>
                <span>
                  Page
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>
                </span>
                <span>
                  Go to page:
                  <input
                    type="number"
                    defaultValue={pageIndex}
                    onChange={(e) => {
                      const page = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                      gotoPage(page);
                    }}
                    style={{ width: "100px" }}
                  />
                </span>
                <div>
                  <select
                    value={pageSize}
                    onChange={(e) => {
                      setPageSize(Number(e.target.value));
                    }}
                  >
                    {pageLimit.map((pageSize) => (
                      <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={columns.length}>
              <div className="main-navigation-part">
                <div className="left-navigation">
                  <p>view</p>
                  <select
                    value={pageSize}
                    onChange={(e) => {
                      setPageSize(Number(e.target.value));
                    }}
                  >
                    {pageLimit.map((pageSize) => (
                      <option key={pageSize} value={pageSize}>
                        {pageSize}
                      </option>
                    ))}
                  </select>
                  <p>Per page</p>
                </div>
                <div className="right-navigation">
                  <p>
                    Showing: <span>1</span>-<span>10</span> of{" "}
                    <span> 5000</span>
                  </p>

                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item disabled">
                        <button
                          onClick={() => previousPage()}
                          disabled={!canPreviousPage}
                        >
                          Previous
                        </button>
                      </li>
                      <li class="page-item">
                        <button>1</button>
                      </li>
                      <li class="page-item">
                        <button
                          onClick={() => nextPage()}
                          disabled={!canNextPage}
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </td>
          </tr>
        </tfoot> */}
        </Table>
      </CTable>
    </>
  );
};

export default DTable;

// const IndeterminateCheckbox = React.forwardRef(
//   ({ id = "select_all", indeterminate, ...rest }, ref) => {
//     const defaultRef = React.useRef();
//     const resolvedRef = ref || defaultRef;

//     React.useEffect(() => {
//       resolvedRef.current.indeterminate = indeterminate;
//     }, [resolvedRef, indeterminate]);

//     return (
//       <div className="custom-checkbox">
//         <input type="checkbox" id={id} ref={resolvedRef} {...rest} />
//         <label htmlFor={id}></label>
//       </div>
//     );
//   }
// );
