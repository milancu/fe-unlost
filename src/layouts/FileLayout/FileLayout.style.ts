import styled from "styled-components";
import Image from "next/image";

export const StyledFileLayout = styled.div`
  height: calc(100vh - 120px);
`


export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`

export const LeftContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  h1 {
    font-weight: 600;
    font-size: 32px;
  }
`

export const StyledImageLink = styled(Image)`
  cursor: pointer;

  transition: transform 0.2s ease-in;

  &:hover {
    transform: scale(1.1);
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  gap: 2rem;

`

export const ImageWrapper = styled.div`
  position: relative;
  overflow: auto;
  //height: fit-content;
  //min-height: 100vh;
  flex-shrink: 0;
  background: white;
  border-radius: 30px 30px 0 0;
`

export const StyledImage = styled(Image)`
  height: auto;
  object-fit: contain;
  cursor: initial;
  pointer-events: none;
  user-select: none;
  border-radius: 30px;
`


export const AnnotateLayer = styled.svg`
  position: absolute;
  z-index: 9999;
  width: 850px;
  height: 100%;
  min-height: 1400px;
  cursor: crosshair;

`