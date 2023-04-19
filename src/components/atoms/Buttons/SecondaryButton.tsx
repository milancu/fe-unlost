import {StyledSecondaryButton} from "@/components/atoms/Buttons/Button.style";
import React from "react";

interface Props {
    text: string,
    onClick: () => void
}

const SecondaryButton: React.FC<Props> = ({text, onClick}) => {
    return (
        <StyledSecondaryButton onClick={() => onClick()}>
            {text}
        </StyledSecondaryButton>
    )
}

export default SecondaryButton