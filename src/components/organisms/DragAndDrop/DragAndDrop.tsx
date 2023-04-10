import {StyledDragAndDrop} from "@/components/organisms/DragAndDrop/DragAndDrop.style";
import React from "react";
import CircleLoadingProcess, {LoadingType} from "@/components/molecules/CircleLoadingProcess/CircleLoadingProcess";
import uploadIcon from "@/static/svg/icons/uploadDragAndDrop.svg"
import Image from "next/image";

const DragAndDrop = () => {

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        console.log('Dropped files:', files);
        // TODO
    };

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData('Files', 'true');
    };


    return (
        <StyledDragAndDrop
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragStart={handleDragStart}
            draggable
        >
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <CircleLoadingProcess type={LoadingType.UPLOADING} executing={17} sumFiles={20}/>
                <CircleLoadingProcess type={LoadingType.EXTRACTING} executing={10} sumFiles={20}/>
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