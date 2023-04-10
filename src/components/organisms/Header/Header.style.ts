import styled from "styled-components";

export const StyledHeader = styled.div`
  border: 1px solid red;
  margin-bottom: 60px;
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;

  position: relative;
  
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;

  text-align: center;

  color: #FFFFFF;
`

export const HeaderWrapper = styled.div`
  width: 100%;
  //min-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: auto;

`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  //border: 1px solid red;
  
  gap: 60px;
  
  h1{
    text-align: left;
    width: 300px;
    font-weight: 600;
    font-size: 32px;
  }
`