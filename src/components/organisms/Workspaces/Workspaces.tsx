import {StyledWorkspaces, WorkspaceContainer} from "@/components/organisms/Workspaces/Workspaces.style";
import WorkspaceLink from "@/components/molecules/WorkspaceLink/WorkspaceLink";

const links = [
    {
        header: "Moje složky",
        link: "/moje-slozky"
    },
    {
        header: "Sdílené složky",
        link: "/sdilene-slozky"
    },
    {
        header: "Ostatní soubory",
        link: "/ostatni"
    }
]

const Workspaces = () => {
    return (
        <StyledWorkspaces>
            <h1>Pracoviště</h1>
            <WorkspaceContainer>
                {links.map((link, index) => {
                    return (
                        <WorkspaceLink link={link.link} header={link.header} key={index} sumFolder={13}/>
                    )
                })}
            </WorkspaceContainer>

        </StyledWorkspaces>
    )
}

export default Workspaces