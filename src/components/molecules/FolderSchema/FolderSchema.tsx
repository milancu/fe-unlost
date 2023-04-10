import {StyledFolderSchema} from "@/components/molecules/FolderSchema/FolderSchema.style";
import React from "react";
import editIcon from "@/static/svg/icons/edit.svg"
import trashIcon from "@/static/svg/icons/trash.svg"
import Image from "next/image";

interface FolderSchema {
    name: string
}

const FolderSchema: React.FC<FolderSchema> = ({name}) => {
    return (
        <StyledFolderSchema>
            {name}
            <div>
                <Image src={editIcon} alt={'icon'}/>
                <Image src={trashIcon} alt={'icon'}/>
            </div>
        </StyledFolderSchema>
    )
}

export default FolderSchema