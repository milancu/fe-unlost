import styled from "styled-components";

export const StyledFileTable = styled.table`
  //border: 1px solid red;
  width: 100%;
  height: calc(100vh - 380px);
  //overflow: auto;

  thead, tbody {
    font-weight: 400;
  }

  thead th {
    padding-bottom: 1rem;
    font-size: 13px;
    line-height: 20px;
    font-weight: 500;

    color: #CACACA;
  }

  tbody th {
    font-size: 12px;
    padding: 1.5rem 0;
    border-bottom: 1px solid #414144;
  }
`