import styled from "styled-components";

interface CircleProgressProps {
    color: string
}

export const StyledCircleLoadingProcess = styled.div<CircleProgressProps>`
  width: 192px;
  height: 181px;
  left: 23px;
  top: 20px;

  background: rgba(42, 42, 56, 0.87);
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 20px;

  color: ${props => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const Circle = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  //border: 1px solid blue;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const CircleProgress = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
`

interface LoadingCircleProgressProps {
    color: string
    executing: number
}

export const StyledCircle = styled.circle<LoadingCircleProgressProps>`
  fill: none;
  stroke: ${props => props.color};
  stroke-width: 10px;
  stroke-dasharray: 282.6;
  stroke-dashoffset: ${props => props.executing};

  animation: loading 1s ease forwards;

  @keyframes loading {
    0% {
      stroke-dashoffset: 282.6;
    }
  }
`

export const StyledCircleInner = styled.circle`
  fill: none;
  stroke: #D9D9D9;
  stroke-width: 10px;
`