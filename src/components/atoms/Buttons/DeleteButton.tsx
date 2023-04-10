import {OutlineRedButton} from "@/components/atoms/Buttons/Button.style";
import React from "react";

interface DeleteButtonProps {
    text: string
    //TODO void
}

const DeleteButton: React.FC<DeleteButtonProps> = ({text}) => {
    return (
        <OutlineRedButton>
            {text}
        </OutlineRedButton>
    )
}

export default DeleteButton