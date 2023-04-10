import {StyledOutlineButton} from "@/components/atoms/Buttons/Button.style";
import Image, {StaticImageData} from "next/image";
import React from "react";


interface ButtonProps {
    text: string,
    img: StaticImageData
}

const OutlineButton: React.FC<ButtonProps> = ({text, img}) => {
    return (
        <StyledOutlineButton>
            {text}
            <Image src={img} alt={'icon'}/>
        </StyledOutlineButton>
    )
}

export default OutlineButton