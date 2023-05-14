import React, {ReactElement, ReactNode, useEffect} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import {cookies} from "next/headers";

interface AuthContextProps {
    children: ReactNode
}

const AuthContext: React.FC<AuthContextProps> = ({children}): ReactElement => {
    const router = useRouter()
    let token: any = null;

    useEffect(() => {
        token = localStorage.getItem('access_token')

        if (token == null && ((router.pathname != "/auth") && (router.pathname != "/login"))) {
        }

        (handleTokenValidation().then(r => {
            if (!r) {
                window.location.href = "http://localhost:8080/oauth2/authorization/google";
            }
        }))
    }, [])

    const handleTokenValidation = async () => {
        try {
            await axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${token}`);
            return true
        } catch (error) {
            return false
        }
    };

    return (
        <>
            {children}
        </>
    )
}

export default AuthContext