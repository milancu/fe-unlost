import {StyledButton} from "@/components/atoms/Buttons/Button.style";
import uploadIcon from "@/static/svg/icons/upload.svg"
import React from "react";
import Image from "next/image";

const ImportButton = () => {
    return (
        <StyledButton>
            <Image src={uploadIcon} alt={'icon'} width={24}/>
            Nahrát soubor
        </StyledButton>
    )
}

export default ImportButton