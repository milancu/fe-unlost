import {StyledButton} from "@/components/atoms/Buttons/Button.style";
import React from "react";

interface CreateFolderProps {
    handleModal: () => void
}

const CreateFolder: React.FC<CreateFolderProps> = ({handleModal}) => {
    return (
        <StyledButton onClick={() => handleModal()}>
            Vytvořit novou složku
        </StyledButton>
    )
}

export default CreateFolder