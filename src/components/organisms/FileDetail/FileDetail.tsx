import {Row, StyledFileDetail} from "@/components/organisms/FileDetail/FileDetail.style";
import OutlineButton from "@/components/atoms/Buttons/OutlineButton";
import addUser from "@/static/svg/icons/addUser.svg";
import link from "@/static/svg/icons/link.svg";
import {ButtonWrapper, StyledImage} from "@/components/organisms/FolderDetail/FolderDetail.style";
import DeleteButton from "@/components/atoms/Buttons/DeleteButton";
import React from "react";
import Image from "next/image";
import {useQuery} from "@apollo/client";
import {GET_FOLDER, GET_USER_BY_ID} from "@/graphql/types";
import {formatDate} from "@/utils/DateFormatter";

interface FileDetailProps {
    selectedFile: any
}

const FileDetail: React.FC<FileDetailProps> = ({selectedFile}) => {

    const {
        loading: folderLoading,
        error: folderError,
        data: folderData
    } = useQuery(GET_FOLDER, {variables: {id: selectedFile.folderId}});

    const {loading: userLoading, error, data} = useQuery(GET_USER_BY_ID, {
        variables: {id: selectedFile.createByUser},
    });

    if (userLoading || folderLoading) return <div>Loading...</div>
    if (error || folderError) return <div>Error :(</div>

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
                <OutlineButton text={"Sdílet dokument"} img={addUser} onClick={() => console.log("TODO")}/>
                <OutlineButton text={"Dočasný odkaz"} img={link} onClick={() => console.log("TODO")}/>
            </ButtonWrapper>
            <div style={{textAlign: "center", height: "300px", overflow:"auto", marginTop:"20px"}}>
                <StyledImage src={selectedFile.imgLink} alt={'image'} width={250} height={300}/>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "3rem"
            }}>
                <DeleteButton text={"Odstranit soubor"}/>
            </div>
        </StyledFileDetail>
    )
}

export default FileDetail