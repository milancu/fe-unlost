import styled from "styled-components";

export const StyledFolderSchemaInput = styled.input`
  width: 100%;
  height: 47px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  background: transparent;
  //border-radius: 10px;
  border: none;
  outline: none;


`

export const StyledFolderSchema = styled.div`
  width: 100%;
  height: 47px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      cursor: pointer;
    }
  }

  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  margin: 10px 0;
`