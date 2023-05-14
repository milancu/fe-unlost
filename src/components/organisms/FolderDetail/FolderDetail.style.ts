import styled from "styled-components";
import Image from "next/image";

export const StyledFolderDetail = styled.div`
  min-width: 450px;
  height: 100%;
  width: 450px;
  background: #27272F;
  border-radius: 20px;
  padding: 2rem;
  
  display: flex;
  flex-direction: column;
`

export const TopContent = styled.div`
  margin-bottom: 1rem;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  font-size: 16px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledInput = styled.input`
  margin-top: 20px;
  outline: 2px solid #4D5BDC;
  border: none;
  background: transparent;
  border-radius: 20px;

  font-weight: 500;
  font-size: 14px;
  width: 400px;

  padding: 1rem;
`

export const StyledImage = styled(Image)`
  height: auto;
  object-fit: contain;
  cursor: initial;
  pointer-events: none;
  user-select: none;
  border-radius: 10px;
`

export const BottomContent = styled.div`
  flex: 1;
  overflow: auto;
  
  position: relative;

`

export const FolderSchemaWrapper = styled.div`
  height: 100%;
  margin-top: 1rem;
`

export const ProfileImgWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const ButtonAddLabelWrapper = styled.div`
  display: flex;

  button {
    width: 100%;
  }
`
