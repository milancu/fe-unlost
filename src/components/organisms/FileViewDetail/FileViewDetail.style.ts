import styled from "styled-components";

export const StyledFileViewDetail = styled.div`
  width: 100%;
  position: relative;
  
  display: flex;
  flex-direction: column;
`

export const TopContentWrapper = styled.div`
  width: 70%;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 500;
  font-size: 14px;
  padding: 1rem 0;

  p:first-child {
    color: #B9B9B9;
  }
`

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
`

export const StyledSaveButton = styled.button`
  width: 100%;
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

export const BottomContentWrapper = styled.div`
  margin-top: 40px;
  height: 100%;
  overflow: auto;
`

export const Header = styled.div`
  font-weight: 700;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2rem;
  margin-top: 20px;
`

export const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid #969696;
  outline: none;
  background: transparent;

  font-weight: 500;
  font-size: 16px;
  width: 400px;

  padding: 1rem;

  text-align: right;

  &:focus {
    border-bottom: 2px solid #4D5BDC;
  }
`

export const StyledLabel = styled.label`
  //background-color: #19191c;
  //padding: 1rem;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`