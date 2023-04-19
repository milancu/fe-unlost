import {
    InputWrapper,
    ModalWrapper, SchemaWrapper,
    StyledCreateFolderModal,
    StyledInput,
    StyledLabel, StyledSchemaInput, SuccessModal
} from "@/components/organisms/Modal/CreateFolder.style";
import PrimaryButton from "@/components/atoms/Buttons/PrimaryButton";
import OutlineButton from "@/components/atoms/Buttons/OutlineButton";
import React, {useState} from "react";
import SecondaryButton from "@/components/atoms/Buttons/SecondaryButton";
import {CREATE_FOLDER, UPLOAD_FILES} from "@/graphql/types";
import {useMutation} from "@apollo/client";
import ImportButton from "@/components/atoms/Buttons/ImportButton";
import successIcon from "@/static/svg/icons/successIcon.svg"
import Image from "next/image";
import client from "@/utils/ApolloClient";

interface CreateFolderModalProps {
    onClick: () => void
}

const CreateFolderModal: React.FC<CreateFolderModalProps> = ({onClick}) => {
    const [folderName, setFolderName] = useState<string>("")
    const [labels, setLabels] = useState<any>([]);
    const [state, setState] = useState(0)
    const [folderId, setFolderId] = useState()
    const [folderType, setFolderType] = useState()

    const [createFolder, {loading, error}] = useMutation(CREATE_FOLDER);


    const handleClick = async () => {
        try {
            const result = await createFolder({variables: {name: folderName, labels: labels}});
            if (result.data.createFolder) {
                setFolderType(result.data.createFolder.folderType)
                setFolderId(result.data.createFolder.id)
                setState(1)
            }
        } catch (err) {
            console.error(err);
        }
    }

    const handleClickBack = () => {
        onClick()
    }

    const handleCreateLabel = () => {
        const newLabel = {
            id: labels.length + 1,
            name: '',
        };

        setLabels([...labels, newLabel]);
    }

    const handleLabelNameChange = (id: string, name: string) => {
        const updatedLabels = labels.map((label: any) => {
            if (label.id === id) {
                return {...label, name};
            }
            return label;
        });
        setLabels(updatedLabels);
    }

    const handleFolderName = (folderName: string) => {
        setFolderName(folderName)
    }

    const uploadFiles = (files: FileList) => {
        const variables = {
            files: files,
            folderId: folderId
        };

        client.mutate({
            mutation: UPLOAD_FILES,
            variables: variables
        }).then(() => {
            onClick()
            let url = '';
            console.log(folderType)
            if (folderType === "OWNER") {
                url = `/moje-slozky/soubory/${folderId}`
            } else {
                url = `/sdilene-slozky/soubory/${folderId}`
            }
            window.location.href = url
        }).catch(error => {
            console.error("Error uploading files", error);
        });
    }

    return (
        <StyledCreateFolderModal>
            {state == 0 ? <ModalWrapper>
                    <div>
                        <StyledInput type={"text"} placeholder={"Název souboru"} autoComplete={"nope"} value={folderName}
                                     onChange={(event) => handleFolderName(event.target.value)}/>
                        <SchemaWrapper>
                            <h2>Schéma složky</h2>
                            <InputWrapper id={"inputWrapper"}>
                                {labels.map((label: any, index: number) => (
                                    <StyledSchemaInput
                                        key={label.id}
                                        type={'text'}
                                        name={`input${label.id}`}
                                        value={label.name}
                                        placeholder={'Název labelu'}
                                        onChange={(event) => handleLabelNameChange(label.id, event.target.value)}
                                    />
                                ))}
                            </InputWrapper>
                            <div>
                                <SecondaryButton text={"Přidat label"} onClick={handleCreateLabel}/>
                            </div>
                        </SchemaWrapper>
                    </div>

                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <OutlineButton text={"Zpět"} onClick={() => handleClickBack()}/>
                        <PrimaryButton text={"Pokračovat"} onClick={() => handleClick()}/>
                    </div>
                    <>
                    </>
                </ModalWrapper>
                :
                <SuccessModal>
                    <Image src={successIcon} alt={'icon'}/>
                    <h3>Nová složka úspěšně vytvořena </h3>
                    <div style={{display: "flex", justifyContent: "space-between", gap: "10px", width: "100%"}}>
                        <OutlineButton text={"Zavřít"} onClick={() => {
                            onClick()
                            window.location.reload();
                        }}/>
                        <ImportButton onUpload={uploadFiles}/>
                    </div>
                </SuccessModal>
            }
        </StyledCreateFolderModal>
    )
}

export default CreateFolderModal