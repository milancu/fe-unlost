import styled from "styled-components";

export const StyledFileLayout = styled.div`
  height: calc(100vh - 140px);
  padding-bottom: 60px;

  display: flex;
  justify-content: space-between;
  gap: 3rem;
`

export const RightContent = styled.div`
    width: 100%;
    `

export const Header = styled.div`
  h1 {
    font-weight: 600;
    font-size: 32px;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2rem;
`