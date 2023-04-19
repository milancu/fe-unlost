import {LinksWrapper, StyledLink, StyledSideBar} from "@/components/organisms/SideBar/SideBar.style";
import dashboardIcon from "@/static/svg/icons/dashboard.svg"
import sharedFolderIcon from "@/static/svg/icons/sharedFolder.svg"
import folderIcon from "@/static/svg/icons/folder.svg"
import storageIcon from "@/static/svg/icons/storage.svg"
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";

const links = [
    {
        link: "/dashboard",
        icon: dashboardIcon
    },
    {
        link: "/sdilene-slozky",
        icon: sharedFolderIcon
    },
    {
        link: "/moje-slozky",
        icon: folderIcon
    },
    {
        link: "/ostatni",
        icon: storageIcon
    }
]

const SideBar = () => {
    const router = useRouter()

    const [profileImg, setProfileImg] = useState<string>("")

    useEffect(() => {
        setProfileImg(localStorage.getItem('profileImg')!!)
    }, [])

    if (profileImg == "") {
        return <div>LOADING</div>
    }

    return (
        <StyledSideBar>
            <LinksWrapper>
                {links.map((link, index) => {
                    return (
                        <StyledLink key={index} href={link.link}
                                    className={router.pathname.includes(link.link) ? "active" : ""}>
                            <Image src={link.icon} alt={'icon'}/>
                        </StyledLink>
                    )
                })}
            </LinksWrapper>
            <Image src={profileImg} alt={'icon'} width={45} height={45}
                   style={{outline: "3px solid #5768FF", borderRadius: "30px"}}/>
        </StyledSideBar>
    )
}

export default SideBar