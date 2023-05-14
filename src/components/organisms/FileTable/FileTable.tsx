import {StyledCheckBox, StyledFileTable, TableWrapper, Wrapper} from "./FileTable.style"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import fileIcon from "@/static/svg/icons/file.svg";
import moreIcon from "@/static/svg/icons/3dot.svg"
import {formatDate} from "@/utils/DateFormatter";


interface Props {
    files: any
    onSelect: (file: any) => void
    labels: any[]
}

const FileTable: React.FC<Props> = ({files, onSelect, labels}) => {


    return (
        <Wrapper>
            <TableWrapper>
                <StyledFileTable>
                    <tr>
                        <th style={{textAlign: "left"}}>Název souboru</th>
                        {labels.map((label: any, index: number) => {
                            return (
                                <th style={{textAlign: "right"}}>{label.name}</th>
                            )
                        })}
                        {/*<th style={{textAlign: "left"}}>Datum vytvoření</th>*/}
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
                                {file.annotatedData.map((data: string, index: number) => {
                                    return (
                                        <th key={index}>{data.value ? data.value : ""}</th>
                                    )
                                })}

                                {/*<th style={{textAlign: "right"}}>{formatDate(file.createAt)}</th>*/}
                                <th style={{textAlign: "right"}}>
                                    <Image src={moreIcon} alt={'icon'} onClick={() => onSelect(file)}/>
                                </th>
                            </tr>
                        )
                    })}
                </StyledFileTable>
            </TableWrapper>
        </Wrapper>
    )
}

export default FileTable