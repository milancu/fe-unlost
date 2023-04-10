import styled from "styled-components";

export const StyledGoogleButton = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  background: #FFFFFF;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border: none;
  outline: none;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;

  cursor: pointer;

  transition: all 0.2s ease-in;

  &:hover {
    filter: brightness(0.90);
    box-shadow: 0px 0px 3px rgba(255, 255, 255, 0.08), 0px 2px 3px rgba(245, 245, 245, 0.16);
  }
`

export const StyledImportButton = styled.button`
  min-width: 180px;
  height: 50px;

  background: #4D5BDC;
  border-radius: 20px;
  border: none;
  outline: none;

  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: white;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  cursor: pointer;
  
  transition: background 0.2s ease-in;

  &:hover {
    background: #3b4be0;
  }
`