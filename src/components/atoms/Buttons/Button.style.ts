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
  
  color: #1F1F21;

  cursor: pointer;

  transition: all 0.2s ease-in;

  &:hover {
    filter: brightness(0.90);
    box-shadow: 0px 0px 3px rgba(255, 255, 255, 0.08), 0px 2px 3px rgba(245, 245, 245, 0.16);
  }
`

export const StyledButton = styled.button`
  position: relative;
  min-width: 180px;
  height: 50px;

  padding: 0 1rem;

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

export const StyledInput = styled.input`
  position: absolute;
  z-index: 99999;
  width: 180px;
  height: 50px;

  padding: 0 1rem;
  outline: none;
  opacity: 0;
`

export const StyledInputAddUser = styled.input`
  position: absolute;
  bottom: -70px;
  width: 100%;
  height: 50px;
  border-radius: 20px;
  padding: 1rem;
  font-size: 15px;
  border: none;
  outline: 2px solid #4D5BDC;
  background: #27272e;
`

export const InputWrapper = styled.div`
    position: relative;
  //border: 1px solid red;
  width: 215%;
`

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: -70px;
`

export const StyledOutlineButton = styled.button`
  min-width: 180px;
  height: 50px;

  padding: 0 10px;


  border: 2px solid #4D5BDC;
  border-radius: 20px;

  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #CED3FF;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;

  cursor: pointer;

  transition: color 0.2s ease-in, background 0.2s ease-in;

  &:hover {
    color: white;
    background: rgba(107, 119, 229, 0.15);
  }
`

export const OutlineRedButton = styled.button`
  width: 170px;
  height: 50px;

  padding: 0 1rem;


  border: 2px solid #F44141;
  border-radius: 20px;

  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #F44141;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  cursor: pointer;

  transition: color 0.2s ease-in, border 0.2s ease-in, background 0.2s ease-in;

  &:hover {
    color: #ff0000;
    background: rgba(255, 0, 0, 0.11);
    border: 2px solid #ff0000;
  }
`

export const StyledFilterButton = styled.div`
  min-width: 170px;
  height: 40px;
  padding: 0 10px;

  border: 2px solid #CED3FF;
  border-radius: 10px;

  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #CED3FF;
  background: transparent;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-evenly;

  cursor: pointer;

  transition: color 0.2s ease-in;

  &:hover {
    color: white;
  }
`

export const StyledSecondaryButton = styled.button`
  min-width: 180px;
  height: 50px;

  background: #65658A;
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
    background: #6767a4;
  }
`