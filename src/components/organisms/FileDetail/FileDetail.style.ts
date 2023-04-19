import styled from "styled-components";

export const StyledFileDetail = styled.div`
  min-width: 450px;
  height: 100%;
  max-width: 500px;
  
  flex-shrink: 0;

  background: rgba(97, 96, 208, 0.1);
  border-radius: 20px;

  padding: 2rem;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    flex-shrink: 0;
    font-weight: 600;
    font-size: 24px;
    width: 100%;
    max-width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  font-size: 16px;
`