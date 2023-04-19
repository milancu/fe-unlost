import {StyledButton} from "@/components/atoms/Buttons/Button.style";
import {StaticImageData} from "next/image";
import React from "react";

interface PrimaryButtonProps {
    text: string
    img?: StaticImageData
    onClick: () => void
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({text, img, onClick}) => {
    return (
        <StyledButton onClick={() => onClick()}>
            {text}
        </StyledButton>
    )
}

export default PrimaryButton