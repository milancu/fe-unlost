import {StyledGoogleButton} from "@/components/atoms/Buttons/Button.style";
import googleLogo from "@/static/svg/google_logo.svg"
import Image from "next/image";
import React from "react";

interface GoogleLoginButtonProps {
    onClick: () => void
}

const GoogleLoginButton:React.FC<GoogleLoginButtonProps> = ({onClick}) => {
    return (
        <StyledGoogleButton onClick={onClick}>
            <Image src={googleLogo} alt={'logo'}/>
            Sign in with Google
        </StyledGoogleButton>
    )
}

export default GoogleLoginButton