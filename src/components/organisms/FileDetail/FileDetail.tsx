import {Row, StyledFileDetail} from "@/components/organisms/FileDetail/FileDetail.style";
import OutlineButton from "@/components/atoms/Buttons/OutlineButton";
import addUser from "@/static/svg/icons/addUser.svg";
import link from "@/static/svg/icons/link.svg";
import {ButtonWrapper, StyledImage, StyledInput} from "@/components/organisms/FolderDetail/FolderDetail.style";
import DeleteButton from "@/components/atoms/Buttons/DeleteButton";
import React, {useState} from "react";
import Image from "next/image";
import {useQuery} from "@apollo/client";
import {GET_FOLDER, GET_USER_BY_ID} from "@/graphql/types";
import {formatDate} from "@/utils/DateFormatter";
import {useAddDocumentAccessMutation, useDeleteFileMutation, useGetShareLinkQuery} from "@/generated/graphql";
import {enqueueSnackbar} from "notistack";
import {router} from "next/client";

interface FileDetailProps {
    selectedFile: any
}

const FileDetail: React.FC<FileDetailProps> = ({selectedFile}) => {

    const {
        loading: folderLoading,
        error: folderError,
        data: folderData
    } = useQuery(GET_FOLDER, {variables: {id: selectedFile?.folderId}});

    const {loading: userLoading, error, data} = useQuery(GET_USER_BY_ID, {
        variables: {id: selectedFile?.createByUser},
    });

    const {data: shareLink} = useGetShareLinkQuery({variables: {documentId: selectedFile?.id}})
    const [addUserAccess, setAddUser] = useState(false)

    const [addDocumentAccessMutation, {
        data: addDocumentAccessData,
    }] = useAddDocumentAccessMutation();
    const [email, setEmail] = useState("")

    const [deleteDocumentMutation] = useDeleteFileMutation()


    const copyLink = () => {
        console.log()
        enqueueSnackbar('Zkopírováno do schránky', {variant: "success"})
        if (shareLink) {
            //TODO
            // @ts-ignore
            navigator.clipboard.writeText(shareLink.getShareLink.link)
        }
    }

    const handleAddDocument = () => {
        setAddUser(!addUserAccess)
    }

    const addDocumentAccess = () => {
        setAddUser(!addUserAccess)

        addDocumentAccessMutation({
            variables: {
                documentId: selectedFile.id,
                email: email,
            },
        }).then(r => enqueueSnackbar('Dokument úspěšně sdílen', {variant: "success"})).catch(
            e => {
                enqueueSnackbar('Error', {variant: "error"})
            }
        );
    }

    const deleteFile = () => {
        deleteDocumentMutation({
            variables: {
                documentId: selectedFile.id,
            }
        }).then(r => {
            enqueueSnackbar('Dokument byl smazán', {variant: "success"})
            window.location.reload()
        }).catch(
            e => {
                enqueueSnackbar('Error', {variant: "error"})
            }
        );
    }

    if (userLoading || folderLoading) return <StyledFileDetail>Loading...</StyledFileDetail>
    if (error || folderError) return <StyledFileDetail>No files</StyledFileDetail>

    return (
        <StyledFileDetail>
            <div>
                <h1>
                    {selectedFile.filename}
                </h1>
                <Row>
                    <p>Vytvořil uživatel:</p>
                    <Image src={data.getUser.imageUrl} alt={'icon'} width={40} height={40}
                           style={{outline: "2px solid #5768FF", borderRadius: "30px"}}/>
                </Row>
                <Row>
                    <p>Adresář:</p>
                    <p>/{folderData.getFolder.name}</p>
                </Row>
                <Row>
                    <p>Uzamknutý uživatelem:</p>
                    <p>{selectedFile.isLocked ? "Ano" : "Ne"}</p>
                </Row>
                <Row>
                    <p>Datum vytvoření:</p>
                    <p>{formatDate(selectedFile.createAt)}</p>
                </Row>
            </div>
            <ButtonWrapper>
                {addUserAccess ?
                    <OutlineButton text={"Potvrdit"} img={addUser} onClick={() => addDocumentAccess()}/>
                    :
                    <OutlineButton text={"Sdílet dokument"} img={addUser} onClick={() => handleAddDocument()}/>

                }
                <OutlineButton text={"Dočasný odkaz"} img={link} onClick={() => copyLink()}/>
            </ButtonWrapper>
            {addUserAccess &&
                <StyledInput type={"email"} placeholder={"Email uživatele"} value={email}
                             onChange={e => setEmail(e.target.value)}/>
            }
            <div style={{textAlign: "center", height: "300px", overflow: "auto", marginTop: "20px"}}>
                {selectedFile.imgLink ?
                    <StyledImage src={selectedFile.imgLink} alt={'image'} width={250} height={300}/> : ""}
            </div>
            <div style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "3rem"
            }}>
                <DeleteButton text={"Odstranit soubor"} onDeleteClick={deleteFile}/>
            </div>
        </StyledFileDetail>
    )
}

export default FileDetail