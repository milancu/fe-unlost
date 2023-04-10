import styled from "styled-components";
import Link from "next/link";

export const StyledWorkspace = styled.div`
  width: 260px;
  height: 180px;

  background: linear-gradient(188deg, #936BB3 -39.64%, #2351F4 94.24%);
  box-shadow: -11px 2px 100px 20px rgba(75, 91, 221, 0.1);
  border-radius: 20px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1.2rem;

  h2 {
    font-weight: 500;
    font-size: 20px;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    color: rgba(252, 252, 254, 0.5);
  }
`

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: end;

  transition: transform 0.3s ease-in;

  &:hover {
    transform: scale(1.05);
  }
`