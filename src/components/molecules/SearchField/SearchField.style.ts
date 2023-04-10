import Image from "next/image";

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
  
  &:focus{
    outline: 2px solid #4359e2;
  }
`

import styled from "styled-components";

export const StyledField = styled.div`
  position: relative;
  width: clamp(200px, 90%, 600px);
  display: flex;
`

export const StyledIcon = styled(Image)`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translate(-50%, -50%);
  
`