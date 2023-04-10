import {StyledLayout} from "@/layouts/LoginPageLayout/LoginPageLayout.style";
import Image from "next/image";
import logo from "@/static/images/unlost_text_logo.png"
import GoogleLoginButton from "@/components/atoms/Buttons/GoogleLoginButton";

const LoginPageLayout = () => {

    const handleLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/google"
    }

    return (
        <StyledLayout>
            <Image src={logo} alt={'logo'} width={170}/>
            <GoogleLoginButton onClick={handleLogin}/>
        </StyledLayout>
    )
}

export default LoginPageLayout