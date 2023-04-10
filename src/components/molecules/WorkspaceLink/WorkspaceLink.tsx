import {StyledLink, StyledWorkspace} from "@/components/molecules/WorkspaceLink/WorkspaceLink.style";
import React from "react";
import arrowCircle from "@/static/svg/icons/arrowCircle.svg"
import Image from "next/image";

export interface WorkspaceLinkProps {
    link: string,
    header: string,
    // TODO
    sumFolder: number
}

const WorkspaceLink: React.FC<WorkspaceLinkProps> = ({link, header, sumFolder}) => {
    return (
        <StyledWorkspace>
            <div>
                <h2>{header}</h2>
                <p>{sumFolder} složek</p>
            </div>
            <StyledLink href={link}>
                <Image src={arrowCircle} alt={'icon'}/>
            </StyledLink>
        </StyledWorkspace>
    )
}

export default WorkspaceLink