import {useQuery} from "@apollo/client";
import {GET_FILES, GET_OTHER_FILE} from "@/graphql/types";
import {FilesTable} from "@/components/organisms/LastOpenedFiles/LastOpenedFiles.style";
import FileTable from "@/components/organisms/FileTable/FileTable";
import {StyledFileTable, Wrapper} from "@/components/organisms/FileTable/FileTable.style";
import Link from "next/link";
import Image from "next/image";
import fileIcon from "@/static/svg/icons/file.svg";
import {formatDate} from "@/utils/DateFormatter";
import moreIcon from "@/static/svg/icons/3dot.svg";
import React, {useEffect, useState} from "react";
import {useGetOtherFilesQuery} from "@/generated/graphql";
import FileDetail from "@/components/organisms/FileDetail/FileDetail";
import {Header, RightContent, StyledFileLayout} from "@/layouts/FilesLayout/FilesLayout.style";

const Others = () => {

    const {loading, error, data} = useGetOtherFilesQuery();
    const [files, setFiles] = useState([])
    const [selectedFile, setSelectedFile] = useState([]);


    const handleSelectedFile = (file: any) => {
        setSelectedFile(file);
    };

    useEffect(() => {
        if (data && data.getAllOtherDocument) {
            setSelectedFile(data.getAllOtherDocument[0])
            setFiles(data.getAllOtherDocument)
        }

    }, [data])

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <StyledFileLayout>
            <RightContent>
                <Header>
                    <h1>
                        Ostatní soubory
                    </h1>
                </Header>
                <Wrapper>
                    <StyledFileTable>
                        <tr>
                            <th style={{textAlign: "left"}}>Název souboru</th>
                            <th style={{textAlign: "right"}}>Datum vytvoření</th>
                        </tr>
                        {files.map((file: any, index: number) => {
                            return (
                                <tr key={index}>
                                    <th style={{textAlign: "left"}}>
                                        <Link href={`/soubor/${file.id}`}
                                              style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                                            <Image src={fileIcon} alt={'icon'}/>
                                            {file.filename}
                                        </Link>
                                    </th>
                                    <th style={{textAlign: "right"}}>{formatDate(file.createAt)}</th>
                                    <th style={{textAlign: "right"}}>
                                        <Image src={moreIcon} alt={'icon'} onClick={() => handleSelectedFile(file)}/>
                                    </th>
                                </tr>
                            )
                        })}
                    </StyledFileTable>
                </Wrapper>
            </RightContent>
            <FileDetail selectedFile={selectedFile}/>
        </StyledFileLayout>
    )
}

export default Others