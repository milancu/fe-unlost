import React, {ReactElement, ReactNode, useEffect} from "react";

interface AuthContextProps {
    children: ReactNode
}

const AuthContext: React.FC<AuthContextProps> = ({children}): ReactElement => {

    useEffect(() => {
        const token = localStorage.getItem('access_token')

        if (token == null) {
            // window.location.href = "http://localhost:8080/oauth2/authorization/google";
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default AuthContext