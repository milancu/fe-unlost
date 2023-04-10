import styled from "styled-components";
import Link from "next/link";

export const StyledSideBar = styled.div`
  width: 100px;
  height: 460px;
  position: relative;
  left: -50px;
  flex-shrink: 0;

  background: #27272F;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 30px;
  box-sizing: border-box;
`

export const LinksWrapper = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const StyledLink = styled(Link)`
  //border: 1px solid red;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  
  &.active{
    background: #4C5ADB;
  }
`