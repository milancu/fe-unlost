import {OutlineRedButton} from "@/components/atoms/Buttons/Button.style";
import React, {useState} from "react";

interface DeleteButtonProps {
    text: string
    onDeleteClick: () => void
}

const DeleteButton: React.FC<DeleteButtonProps> = ({text, onDeleteClick}) => {
    const [confirm, setConfirm] = useState(false)

    const handleClick = () => {
        if (confirm) {
            onDeleteClick()
        }
        setConfirm(!confirm)
    }

    return (
        <OutlineRedButton onClick={() => handleClick()}>
            {confirm ? "Potvrdit" : text}
        </OutlineRedButton>
    )
}

export default DeleteButton