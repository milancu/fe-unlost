import {FilesTable, StyledLastOpenedFiles} from "@/components/organisms/LastOpenedFiles/LastOpenedFiles.style";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import fileIcon from "@/static/svg/icons/file.svg"

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
]


const LastOpenedFiles = () => {

    return (
        <StyledLastOpenedFiles>
            <h1>Nedávno otevřené soubory</h1>
            <FilesTable>
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
                                <Link href={"/"}  style={{display:"flex", alignItems:"center", gap: "1rem"}}>
                                    <Image src={fileIcon} alt={'icon'}/>
                                    {file.filename}
                                </Link>
                            </th>
                            <th style={{textAlign: "right"}}>{file.lastModifiedDate}</th>
                        </tr>
                    )
                })}
                </tbody>
            </FilesTable>
        </StyledLastOpenedFiles>
    )
}

export default LastOpenedFiles