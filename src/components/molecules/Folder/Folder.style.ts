import styled from "styled-components";
import Link from "next/link";

export const StyledFolder = styled.div`
  width: 207.38px;
  height: 149.96px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-weight: 500;
  font-size: 20px;
  justify-content: space-between;
  height: 149.96px;
  padding: 30px 15px 15px;
`

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: end;
`

export const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FolderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-content: start;
  justify-content: start;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 2rem;

`