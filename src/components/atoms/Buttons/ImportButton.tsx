import {StyledImportButton} from "@/components/atoms/Buttons/Button.style";
import uploadIcon from "@/static/svg/icons/upload.svg"
import React from "react";
import Image from "next/image";

const ImportButton = () => {
    return (
        <StyledImportButton>
            <Image src={uploadIcon} alt={'icon'} width={24}/>
            Nahrát soubor
        </StyledImportButton>
    )
}

export default ImportButton