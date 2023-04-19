import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  z-index: 99999;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledModalContainer = styled.div`
  width: 575px;
  min-height: 580px;

  background: #1F1F21;
  border-radius: 25px;

  padding: 2rem 3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    margin-bottom: 20px;
  }
`

export const StyledDiv = styled.div`
  padding: 1rem;
  border-bottom: 2px solid #4b4b4b;
`

export const FilesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 200px;
  overflow-x: auto;

  margin-bottom: 40px;
`

export const StyledSelect = styled.select`
  width: 100%;
  height: 60px;
  outline: 2px solid #FFFFFF;
  border: none;
  background: transparent;

  border-radius: 20px;
  padding: 0 1rem;
  
  font-size: 18px;
  font-weight: 600;

  &:focus {
    outline: 2px solid #312db2;
  }
`

export const StyledOption = styled.option `
  background: #1F1F21;
  height: 80px;
  border: none;
  outline: none;
`

export const FolderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 300px;
`

export const ButtonWrapper = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
    `