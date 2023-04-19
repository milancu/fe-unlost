import {StyledOutlineButton} from "@/components/atoms/Buttons/Button.style";
import Image, {StaticImageData} from "next/image";
import React from "react";


interface ButtonProps {
    text: string,
    img?: StaticImageData
    onClick: ()=>void
}

const OutlineButton: React.FC<ButtonProps> = ({text, img, onClick}) => {
    return (
        <StyledOutlineButton onClick={()=>onClick()}>
            {text}
            {img && <Image src={img} alt={'icon'}/>}
        </StyledOutlineButton>
    )
}

export default OutlineButton