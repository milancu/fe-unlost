import {StyledMyFolderLayout} from "@/layouts/FolderLayout/MyFolderLayout.style";
import Folder from "@/components/molecules/Folder/Folder";
import {ButtonWrapper, FolderWrapper} from "@/components/molecules/Folder/Folder.style";
import React from "react";
import FolderDetail from "@/components/organisms/FolderDetail/FolderDetail";
import CreateFolder from "@/components/atoms/Buttons/CreateFolder";
import {useRouter} from "next/router";

const folders = [
    {
        link: "/files",
        name: "Smlouvy",
        color: "#36A9DA"
    },
    {
        link: "/files",
        name: "Smlouvy",
        color: "#36A9DA"
    },
    {
        link: "/files",
        name: "Smlouvy",
        color: "#36A9DA"
    }, {
        link: "/files",
        name: "Smlouvy",
        color: "#36A9DA"
    }, {
        link: "/files",
        name: "Smlouvy",
        color: "#36A9DA"
    }, {
        link: "/files",
        name: "Smlouvy",
        color: "#36A9DA"
    },
    {
        link: "/files",
        name: "Smlouvy",
        color: "#36A9DA"
    },
    {
        link: "/files",
        name: "Smlouvy",
        color: "#36A9DA"
    },


]

const FolderLayout = () => {

    const router = useRouter()

    return (
        <StyledMyFolderLayout>
            <div>
                <ButtonWrapper>
                    <CreateFolder/>
                </ButtonWrapper>
                <FolderWrapper>
                    {folders.map((folder, index) => {
                        return (
                            <Folder link={router.pathname + folder.link} name={folder.name} color={folder.color}
                                    key={index}/>
                        )
                    })}
                </FolderWrapper>
            </div>
            <FolderDetail/>
        </StyledMyFolderLayout>
    )
}

export default FolderLayout