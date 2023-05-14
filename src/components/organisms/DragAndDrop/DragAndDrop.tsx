import {StyledDragAndDrop} from "@/components/organisms/DragAndDrop/DragAndDrop.style";
import React, {useState} from "react";
import CircleLoadingProcess, {LoadingType} from "@/components/molecules/CircleLoadingProcess/CircleLoadingProcess";
import uploadIcon from "@/static/svg/icons/uploadDragAndDrop.svg"
import Image from "next/image";
import UploadFileModal from "@/components/organisms/UploadFileModal/UploadFileModal";
import client from "@/utils/ApolloClient";
import {UPLOAD_FILES} from "@/graphql/types";
import {enqueueSnackbar} from "notistack";

interface DragAndDropProps {
    data: any
}

const DragAndDrop: React.FC<DragAndDropProps> = ({data}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [files, setFiles] = useState<FileList>()
    const [folder, setFolder] = useState("")

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleFolder = (id: string) => {
        setFolder(id)
    }

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        setFiles(files)
        setIsModalOpen(true)
    };

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData('Files', 'true');
    };

    const handleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const uploadFiles = () => {
        console.log("Folder:" + " " + folder)
        const variables = {
            files: files,
            folderId: folder
        };

        client.mutate({
            mutation: UPLOAD_FILES,
            variables: variables
        }).then(() => {
            handleModal()
            enqueueSnackbar("Soubor úspěšně nahrán", {variant: "success"})
        }).catch(error => {
            console.error("Error uploading files", error);
            handleModal()
            enqueueSnackbar(error, {variant: "error"})
        });
    }

    return (
        <StyledDragAndDrop
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragStart={handleDragStart}
            // draggable
        >
            {isModalOpen &&
                <UploadFileModal
                    files={files!!}
                    handleBack={() => handleModal()}
                    upload={uploadFiles}
                    handleFolderId={handleFolder}/>}
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <CircleLoadingProcess type={LoadingType.UPLOADING} executing={data.getSumOfUploadingFile}
                                      sumFiles={data.getSumOfNewFile}/>
                <CircleLoadingProcess type={LoadingType.EXTRACTING} executing={data.getSumOfExtractingFile}
                                      sumFiles={data.getSumOfNewFile}/>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                justifyContent: "center",
                height: "100%"
            }}>
                <Image src={uploadIcon} alt={'icon'} style={{marginInline: "auto"}}/>
                <h2>Nahrajte svoje soubory</h2>
            </div>
        </StyledDragAndDrop>
    )
}

export default DragAndDrop