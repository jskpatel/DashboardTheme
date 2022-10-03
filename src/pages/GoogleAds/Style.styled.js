import styled from "styled-components";

export const DataTable = styled.div`
  width: 66.6%;
  padding: 3rem 3rem 1rem;
  background: var(--white);
  border-radius: 1.5rem;
`;

export const TableResponsive = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;

  table {
    min-width: 140rem;
    th {
      white-space: nowrap;
    }
  }
  &.mw-1024 {
    table {
      min-width: 765px;
    }
  }
`;
export const CountCards = styled.div``;
export const HeadingSection = styled.div``;
export const HeadingContent = styled.div`
  h1 {
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 3.9rem;
    margin-bottom: 2.5rem;
    margin-top: 0.5rem;
  }
  label {
    font-size: 1.7rem;
    line-height: 2.1rem;
    color: #8a8fa0;
  }
`;
export const DownloadReportAndFilter = styled.div``;

export const VerticalPerformance = styled.div`
  width: 100%;
  flex-basis: 100%;
  padding: 2rem;
  border-radius: 1.5rem;
`;
