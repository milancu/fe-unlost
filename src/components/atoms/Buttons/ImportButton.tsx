import {StyledButton, StyledInput} from "@/components/atoms/Buttons/Button.style";
import uploadIcon from "@/static/svg/icons/upload.svg"
import React from "react";
import Image from "next/image";

interface ImportButtonProps {
    onUpload: (file: FileList) => void
}

const ImportButton: React.FC<ImportButtonProps> = ({onUpload}) => {
    return (
        <StyledButton>
            <Image src={uploadIcon} alt={'icon'} width={24}/>
            Nahrát soubor
            <StyledInput type={"file"} multiple onChange={e => onUpload(e.target.files!!)}/>
        </StyledButton>
    )
}

export default ImportButton