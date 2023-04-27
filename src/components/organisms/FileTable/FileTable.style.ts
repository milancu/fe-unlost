import styled from "styled-components";

export const StyledFileTable = styled.table`
  //border: 1px solid red;
  width: 100%;
  //height: calc(100vh - 380px);
  //overflow: auto;

  //thead, tbody {
  //  font-weight: 400;
  //}
  //
  //thead th {
  //  padding-bottom: 1rem;
  //  font-size: 13px;
  //  line-height: 20px;
  //  font-weight: 500;
  //
  //  color: #CACACA;
  //}
  //
  //tbody th {
  //  font-size: 12px;
  //  padding: 1.5rem 0;
  //  border-bottom: 1px solid #414144;
  //}

  border-collapse: collapse;

  th, td {
    padding: 2rem;
  }

  th {
    text-align: left;

    &:first-child {
      border-radius: 30px 0 0 30px;
    }

    &:last-child {
      border-radius: 0 30px 30px 0;
    }
  }

  tr {
    &:not(:first-child) {
      border-bottom: 1px solid #494949;

      &:hover {
        background: #262633;
        border-radius: 30px;
        border-bottom: none;
      }
    }
  }

  tr:first-child {
    th {
      color: #ababab;
      font-weight: 500;
      font-size: 14px;
      padding: 1rem 2rem;
    }
  }
`

export const Wrapper = styled.div`
  width: min(900px, 100%);
  margin-inline: auto;
`

export const StyledCheckBox = styled.input`
  height: 20px;
  width: 20px;
  margin: 0 auto;
  display: block;
`