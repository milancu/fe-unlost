import {StyledFileTable} from "./FileTable.style"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import fileIcon from "@/static/svg/icons/file.svg";
import moreIcon from "@/static/svg/icons/3dot.svg"

const files = [
    {
        filename: "Pracovní smlouva",
        lastModifiedDate: "23.02.2023"
    },
    {
        filename: "Pracovní smlouva",
        lastModifiedDate: "23.02.2023"
    },
    {
        filename: "Pracovní smlouva",
        lastModifiedDate: "23.02.2023"
    },
    {
        filename: "Pracovní smlouva",
        lastModifiedDate: "23.02.2023"
    },
    {
        filename: "Pracovní smlouva",
        lastModifiedDate: "23.02.2023"
    },
    {
        filename: "Pracovní smlouva",
        lastModifiedDate: "23.02.2023"
    }

]

const FileTable = () => {
    return (
        <StyledFileTable>
            <thead>
            <tr>
                <th style={{textAlign: "left"}}>Název souboru</th>
                <th style={{textAlign: "right"}}>Datum poslední změny</th>
            </tr>
            </thead>
            <tbody>
            {files.map((file, index) => {
                return (
                    <tr key={index}>
                        <th style={{textAlign: "left"}}>
                            <Link href={"/"} style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                                <Image src={fileIcon} alt={'icon'}/>
                                {file.filename}
                            </Link>
                        </th>
                        <th style={{textAlign: "right"}}>{file.lastModifiedDate}</th>
                        <th style={{textAlign: "right"}}>
                            <Image src={moreIcon} alt={'icon'}/>
                        </th>
                    </tr>
                )
            })}
            </tbody>
        </StyledFileTable>
    )
}

export default FileTable