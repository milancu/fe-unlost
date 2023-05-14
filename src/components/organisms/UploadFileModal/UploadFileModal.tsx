import {
    ButtonWrapper,
    FilesWrapper,
    FolderWrapper,
    StyledDiv,
    StyledModal,
    StyledModalContainer,
    StyledOption,
    StyledSelect
} from "@/components/organisms/UploadFileModal/UploadFileModal.style";
import React, {useEffect, useState} from "react";
import PrimaryButton from "@/components/atoms/Buttons/PrimaryButton";
import {useQuery} from "@apollo/client";
import {GET_ALL_FOLDER} from "@/graphql/types";
import {v4 as uuidv4, parse} from 'uuid';
import OutlineButton from "@/components/atoms/Buttons/OutlineButton";

interface Props {
    files: FileList
    handleBack: () => void
    upload: () => void
    handleFolderId: (id: string) => void
}

const UploadFileModal: React.FC<Props> = ({files, handleBack, handleFolderId, upload}) => {
    const [selectedFolder, setSelectedFolder] = useState<any>()

    const {loading, error, data} = useQuery(GET_ALL_FOLDER);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( </p>;

    const filesArray = Array.from(files);
    const folders = [...data.getAllOwnedFolder, ...data.getAllSharedFolder];

    const handleSelect = (folder: any) => {
        setSelectedFolder(folder)
    }

    return (
        <StyledModal>
            <StyledModalContainer>
                <h1>Soubory:</h1>
                <FilesWrapper>
                    {filesArray.map((f: File, index: number) => {
                        return (
                            <StyledDiv>
                                {f.name}
                            </StyledDiv>
                        )
                    })}
                </FilesWrapper>
                <FolderWrapper>
                    <h3>
                        Vyberte do jaké složky nahrát soubory
                    </h3>
                    <StyledSelect id="folders" name="folders" value={selectedFolder}
                                  onChange={e => handleFolderId(e.target.value)}>
                        <StyledOption>Vyberte složku</StyledOption>
                        {folders.map((f: any, index: number) => {
                            return (
                                <StyledOption value={f.id} key={index}>
                                    {f.name}
                                </StyledOption>
                            )
                        })}
                    </StyledSelect>
                </FolderWrapper>
                <ButtonWrapper>
                    <OutlineButton text={"Zpět"} onClick={() => handleBack()}/>
                    <PrimaryButton text={"Nahrát"} onClick={() => {
                        handleFolderId(selectedFolder)
                        upload()
                    }}/>
                </ButtonWrapper>
            </StyledModalContainer>
        </StyledModal>
    )
}

export default UploadFileModal