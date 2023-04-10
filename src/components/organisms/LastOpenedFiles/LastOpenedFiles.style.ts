import styled from "styled-components";
import Link from "next/link";
import Table from "rc-table"

export const StyledLastOpenedFiles = styled.div`
  h1 {
    font-weight: 500;
    font-size: 20px;
  }
`

export const FilesTable = styled.table`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  background: #27272F;
  backdrop-filter: blur(20px);

  padding: 1.5rem;

  border-radius: 20px;

  thead, tbody {
    font-weight: 500;
  }
  
  thead th{
    padding-bottom: 1rem;
  }

  tbody th {
    font-size: 12px;
    padding: 1rem 0;
    border-bottom: 1px solid #414144;
  }
`