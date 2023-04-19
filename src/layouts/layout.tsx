import {useRouter} from "next/router";
import React, {ReactNode} from "react";
import Header from "@/components/organisms/Header/Header";
import SideBar from "@/components/organisms/SideBar/SideBar";
import {StyledMainLayout} from "@/layouts/Layout.style";

interface LayoutProps {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    const router = useRouter();

    const showHeader = !router.pathname.includes("/soubor/") && !router.pathname.includes("/login") && !router.pathname.includes("/auth");

    const header = router.pathname.includes("dashboard") ? "Dashboard" : router.pathname.includes("moje-slozky") ? "Moje složky" : router.pathname.includes("sdilene-slozky") ? "Sdílené složky" : "Ostatní"

    return (
        <StyledMainLayout>
            {showHeader && <Header header={header}/>}
            <div style={{display: "flex"}}>
                {showHeader && <SideBar/>}
                <main style={{flexGrow: 1}}>{children}</main>
            </div>
        </StyledMainLayout>
    )
}

export default Layout