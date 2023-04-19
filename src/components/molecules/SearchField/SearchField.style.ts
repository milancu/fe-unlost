import Image from "next/image";

import styled from "styled-components";
import Link from "next/link";

export const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  background: #27272F;
  border-radius: 20px;
  padding-left: 60px;

  border: none;
  outline: none;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #c0c0c0;

  &:focus {
    outline: 2px solid #4359e2;
  }
`

export const StyledCloseIcon = styled(Image)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -50%);
  
  cursor: pointer;
  opacity: 0.5;

`
export const StyledField = styled.div`
  position: relative;
  width: clamp(200px, 90%, 600px);
  display: flex;
  z-index: 99999;
`

export const StyledIcon = styled(Image)`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translate(-50%, -50%);

`

export const ResultContainer = styled.div`
  position: absolute;

  top: 60px;
  border-radius: 20px;
  z-index: 99998;


  width: 100%;
  //height: 80px;
  max-height: 600px;
  background: #27272F;

  border: 2px solid rgba(77, 91, 220, 0.51);
  box-shadow: 0px 10px 160px 0px rgba(0, 0, 0, 0.05);

  text-align: left;
  padding: 1rem 1rem;
`

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  h3 {
    margin-left: 10px;
    font-size: 18px;
    font-weight: 500;
  }

  margin-bottom: 20px;
  
  max-height: 300px;
  overflow-x: auto;
`

export const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  h3 {
    margin-left: 10px;
    font-size: 18px;
    font-weight: 500;
  }

  max-height: 300px;
  overflow-x: auto;
`

export const StyledLink = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  border-bottom: 1px solid #5e5e5e;
  padding: 8px 20px;

  width: 100%;
  
  display: flex;
  justify-content: space-between;

  &:hover {
    background: #1e1e25;
    border: none;
    border-radius: 15px;
  }
`