import styled from "styled-components";

export const StyledFileViewDetail = styled.div`
  width: 100%;
  
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