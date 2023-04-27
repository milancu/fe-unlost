import {StyledCheckBox, StyledFileTable, Wrapper} from "./FileTable.style"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import fileIcon from "@/static/svg/icons/file.svg";
import moreIcon from "@/static/svg/icons/3dot.svg"
import {formatDate} from "@/utils/DateFormatter";


interface Props {
    files: any
    onSelect: (file: any) => void
}

const FileTable: React.FC<Props> = ({files, onSelect}) => {
    return (
        <Wrapper>
            <StyledFileTable>
                {/*<thead>*/}
                {/*<tr>*/}
                {/*    <th style={{textAlign: "left"}}>Název souboru</th>*/}
                {/*    <th style={{textAlign: "right"}}>Datum poslední změny</th>*/}
                {/*</tr>*/}
                {/*</thead>*/}
                {/*<tbody>*/}
                {/*{files.map((file: any, index: number) => {*/}
                {/*    return (*/}
                {/*        <tr key={index}>*/}
                {/*            <th style={{textAlign: "left"}}>*/}
                {/*                <Link href={`/soubor/${file.id}`}*/}
                {/*                      style={{display: "flex", alignItems: "center", gap: "1rem"}}>*/}
                {/*                    <Image src={fileIcon} alt={'icon'}/>*/}
                {/*                    {file.filename}*/}
                {/*                </Link>*/}
                {/*            </th>*/}
                {/*            <th style={{textAlign: "right"}}>{formatDate(file.createAt)}</th>*/}
                {/*            <th style={{textAlign: "right"}}>*/}
                {/*                <Image src={moreIcon} alt={'icon'} onClick={() => onSelect(file)}/>*/}
                {/*            </th>*/}
                {/*        </tr>*/}
                {/*    )*/}
                {/*})}*/}
                {/*</tbody>*/}
                <tr>
                    <th></th>
                    <th>Filename</th>
                    <th>Label</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Datum poslední změny</th>
                </tr>
                <tr>
                    <th><StyledCheckBox type={"checkbox"}/></th>
                    <th data-cell={"filename"}>test</th>
                    <th data-cell={"label"}>label</th>
                    <th data-cell={"name"}>alza</th>
                    <th data-cell={"Date"}>23.05.2034</th>
                    <th data-cell={"Datum poslední změny"}>12.05.2006</th>
                </tr>
                <tr>
                    <th><StyledCheckBox type={"checkbox"}/></th>
                    <th data-cell={"filename"}>test</th>
                    <th data-cell={"label"}>label</th>
                    <th data-cell={"name"}>alza</th>
                    <th data-cell={"Date"}>23.05.2034</th>
                    <th data-cell={"Datum poslední změny"}>12.05.2006</th>
                </tr>
                <tr>
                    <th><StyledCheckBox type={"checkbox"}/></th>
                    <th data-cell={"filename"}>test</th>
                    <th data-cell={"label"}>label</th>
                    <th data-cell={"name"}>alza</th>
                    <th data-cell={"Date"}>23.05.2034</th>
                    <th data-cell={"Datum poslední změny"}>12.05.2006</th>
                </tr>
                <tr>
                    <th><StyledCheckBox type={"checkbox"}/></th>
                    <th data-cell={"filename"}>test</th>
                    <th data-cell={"label"}>label</th>
                    <th data-cell={"name"}>alza</th>
                    <th data-cell={"Date"}>23.05.2034</th>
                    <th data-cell={"Datum poslední změny"}>12.05.2006</th>
                </tr>
                <tr>
                    <th><StyledCheckBox type={"checkbox"}/></th>
                    <th data-cell={"filename"}>test</th>
                    <th data-cell={"label"}>label</th>
                    <th data-cell={"name"}>alza</th>
                    <th data-cell={"Date"}>23.05.2034</th>
                    <th data-cell={"Datum poslední změny"}>12.05.2006</th>
                </tr>
                <tr>
                    <th><StyledCheckBox type={"checkbox"}/></th>
                    <th data-cell={"filename"}>test</th>
                    <th data-cell={"label"}>label</th>
                    <th data-cell={"name"}>alza</th>
                    <th data-cell={"Date"}>23.05.2034</th>
                    <th data-cell={"Datum poslední změny"}>12.05.2006</th>
                </tr>
            </StyledFileTable>
        </Wrapper>
    )
}

export default FileTable