import {StyledWorkspaces, WorkspaceContainer} from "@/components/organisms/Workspaces/Workspaces.style";
import WorkspaceLink from "@/components/molecules/WorkspaceLink/WorkspaceLink";
import React from "react";

const links = [
    {
        header: "Moje složky",
        link: "/moje-slozky",
        sumFolder: 0
    },
    {
        header: "Sdílené složky",
        link: "/sdilene-slozky",
        sumFolder: 0
    },
    {
        header: "Ostatní soubory",
        link: "/ostatni",
        sumFolder: 0
    }
]

interface FolderData {
    data: any
}

const Workspaces: React.FC<FolderData> = ({data}) => {
    if (data.getAllOwnedFolder) {
        links[0].sumFolder = data.getAllOwnedFolder.length
    }
    if (data.getAllSharedFolder) {
        links[1].sumFolder = data.getAllSharedFolder.length
    }

    return (
        <StyledWorkspaces>
            <h1>Pracoviště</h1>
            <WorkspaceContainer>
                {links.map((link, index) => {
                    return (
                        <WorkspaceLink link={link.link} header={link.header} key={index} sumFolder={link.sumFolder}/>
                    )
                })}
            </WorkspaceContainer>

        </StyledWorkspaces>
    )
}

export default Workspaces