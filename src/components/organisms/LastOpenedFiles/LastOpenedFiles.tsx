import {FilesTable, StyledLastOpenedFiles} from "@/components/organisms/LastOpenedFiles/LastOpenedFiles.style";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import fileIcon from "@/static/svg/icons/file.svg"
import {useQuery} from "@apollo/client";
import {GET_FILE, GET_FILES} from "@/graphql/types";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;
import {formatDate} from "@/utils/DateFormatter";


const LastOpenedFiles = () => {

    let x = localStorage.getItem("lastOpenedFiles")
    const ids = JSON.parse(x!!);
    const {loading, error, data} = useQuery(GET_FILES, {variables: {ids: ids}})

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <StyledLastOpenedFiles>
            <h1>Nedávno otevřené soubory</h1>
            <FilesTable>
                <thead>
                <tr>
                    <th style={{textAlign: "left"}}>Název souboru</th>
                    <th style={{textAlign: "right"}}>Datum vytvoření</th>
                </tr>
                </thead>
                <tbody>
                {data?.getDocuments.map((file: any, index: number) => {
                    return (
                        <tr key={index}>
                            <th style={{textAlign: "left"}}>
                                <Link href={`/soubor/${file.id}`} style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                                    <Image src={fileIcon} alt={'icon'}/>
                                    {file.filename}
                                </Link>
                            </th>
                            <th style={{textAlign: "right"}}>{formatDate(file.createAt)}</th>
                        </tr>
                    )
                })}
                </tbody>
            </FilesTable>
        </StyledLastOpenedFiles>
    )
}

export default LastOpenedFiles