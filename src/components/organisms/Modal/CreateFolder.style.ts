import styled from "styled-components";

export const StyledCreateFolderModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalWrapper = styled.div`
  width: 575px;
  min-height: 580px;

  background: #1F1F21;
  border-radius: 25px;

  padding: 2rem 3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const StyledInput = styled.input`
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  font-weight: 500;
  font-size: 30px;
  width: 100%;
  padding: 10px;
  margin-bottom: 30px;

  &:focus {
    border-bottom: 2px solid #4C5ADB;
  }
`

export const StyledLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const SchemaWrapper = styled.div`

  div {
    display: flex;
    justify-content: end;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledSchemaInput = styled.input`
  width: 100%;
  height: 50px;

  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  margin-bottom: 10px;

`

export const SuccessModal = styled.div`
  width: 500px;
  min-height: 400px;

  background: #1F1F21;
  border-radius: 25px;

  padding: 2rem 3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  gap: 20px;
`